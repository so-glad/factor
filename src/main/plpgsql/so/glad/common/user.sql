CREATE SEQUENCE public.table_role_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_role_id_seq
OWNER TO soglad;

-- Table: public.role;

-- DROP TABLE public.role;

CREATE TABLE public.role
(
  id         BIGINT                      NOT NULL DEFAULT nextval('public.table_role_id_seq' :: CHARACTER VARYING),
  name       CHARACTER VARYING(255)      NOT NULL,
  code       CHARACTER VARYING(255)      NOT NULL,
  revoked    BOOLEAN                     NOT NULL DEFAULT FALSE,
  comment    CHARACTER VARYING(255)      NOT NULL DEFAULT 'public.role',
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT role_pkey PRIMARY KEY (id),
  CONSTRAINT role_code_unique UNIQUE (code)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.role OWNER TO soglad;

CREATE INDEX role_code_index
  ON public.role USING BTREE (code) TABLESPACE soglad;

INSERT INTO public.role (name, code, comment) VALUES
  ('Administrator', 'ADM', 'Platform administrator user'),
  ('Member', 'MBR', 'Platform service user'),
  ('Staff', 'STF', 'Company inside employee'),
  ('Computing', 'COM', 'Computing unit'),
  ('Merchant', 'MCT', 'Merchant account'),
  ('Distributor', 'DSB', 'Downstream distributor'),
  ('Supplier', 'SPL', 'Product supplier'),
  ('Cooperator', 'COR', 'Business cooperator'),
  ('Teacher', 'TCH', 'For teacher user'),
  ('Student', 'STD', 'For student user');

CREATE SEQUENCE public.table_user_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_user_id_seq
OWNER TO soglad;

-- Table: public.user;

-- DROP TABLE public.user;

CREATE TABLE public.user (
  id              BIGINT                      NOT NULL DEFAULT nextval('public.table_user_id_seq' :: CHARACTER VARYING),
  username        CHARACTER VARYING(255)      NOT NULL,
  password        CHARACTER VARYING(255)      NOT NULL DEFAULT '',
  salt            CHARACTER VARYING(255)               DEFAULT NULL,
  revoked         BOOLEAN                     NOT NULL DEFAULT FALSE,
  status          CHARACTER VARYING(255)      NOT NULL DEFAULT '',
  alias           CHARACTER VARYING(255)      NOT NULL DEFAULT 'Bear',
  avatar          CHARACTER VARYING(255),
  email           CHARACTER VARYING(255),
  email_verified  BOOLEAN                     NOT NULL DEFAULT FALSE,
  mobile          CHARACTER VARYING(255),
  mobile_verified BOOLEAN                     NOT NULL DEFAULT FALSE,
  remember_token  CHARACTER VARYING(255)               DEFAULT NULL,
  role_id         BIGINT                      NOT NULL DEFAULT 1,
  created_at      TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  updated_at      TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT user_pkey PRIMARY KEY (id),
  CONSTRAINT user_username_unique UNIQUE (username),
  CONSTRAINT user_email_unique UNIQUE (email),
  CONSTRAINT user_mobile_unique UNIQUE (mobile),
  CONSTRAINT user_role_id_foreign FOREIGN KEY (role_id)
  REFERENCES public.role (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.user OWNER TO soglad;

CREATE INDEX user_username_index
  ON public.user USING BTREE (username) TABLESPACE soglad;
CREATE INDEX user_email_index
  ON public.user USING BTREE (email) TABLESPACE soglad;
CREATE INDEX user_mobile_index
  ON public.user USING BTREE (mobile) TABLESPACE soglad;

CREATE SEQUENCE public.table_group_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_group_id_seq
OWNER TO soglad;

-- Table: public.group;

-- DROP TABLE public.group;

CREATE TABLE public.group
(
  id         BIGINT  NOT NULL DEFAULT nextval('public.table_group_id_seq' :: CHARACTER VARYING),
  name       CHARACTER VARYING(255) NOT NULL ,
  code       CHARACTER VARYING(255) NOT NULL ,
  revoked    BOOLEAN                NOT NULL DEFAULT FALSE,
  type       CHARACTER VARYING(255) NOT NULL DEFAULT 'USER'::CHARACTER VARYING,
  parent_id  BIGINT,
  comment    CHARACTER VARYING(255),
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT user_group_pkey PRIMARY KEY (id),
  CONSTRAINT user_group_code_unique UNIQUE (code),
  CONSTRAINT user_group_parent_id_foreign FOREIGN KEY (parent_id)
  REFERENCES public.group (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT group_type_check CHECK (type::text = ANY (ARRAY['USER'::CHARACTER VARYING]::text[]))
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.group OWNER TO soglad;

CREATE INDEX group_code_index
  ON public.group USING BTREE (code) TABLESPACE soglad;