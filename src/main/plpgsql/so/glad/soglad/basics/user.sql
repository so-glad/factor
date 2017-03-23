CREATE SEQUENCE public.table_role_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_role_id_seq
OWNER TO soglad;

-- Table: public.role;

-- DROP TABLE public.role;

CREATE TABLE public.role
(
  id         BIGINT                 NOT NULL DEFAULT nextval('public.table_role_id_seq'::CHARACTER VARYING),
  name       CHARACTER VARYING(255) NOT NULL,
  code       CHARACTER VARYING(255),
  enabled    BOOLEAN                NOT NULL DEFAULT TRUE,
  comment    CHARACTER VARYING(255),
  created_at TIMESTAMP WITHOUT TIME ZONE,
  updated_at TIMESTAMP WITHOUT TIME ZONE,
  CONSTRAINT role_pkey PRIMARY KEY (id),
  CONSTRAINT role_code_unique UNIQUE (code)
) WITH (OIDS = FALSE
) TABLESPACE soglad;
ALTER TABLE public.role
  OWNER TO soglad;

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
  enabled         BOOLEAN                     NOT NULL DEFAULT TRUE,
  status          CHARACTER VARYING(255),
  alias           CHARACTER VARYING(255)      NOT NULL DEFAULT 'Bear',
  avatar          CHARACTER VARYING(255),
  gender          CHARACTER VARYING(255)      NOT NULL DEFAULT 'Male',
  email           CHARACTER VARYING(255)      NOT NULL,
  email_verified  BOOLEAN                     NOT NULL DEFAULT FALSE,
  mobile          CHARACTER VARYING(255),
  mobile_verified BOOLEAN                     NOT NULL DEFAULT FALSE,
  remember_token  CHARACTER VARYING(255)               DEFAULT NULL,
  role_id            BIGINT                      NOT NULL DEFAULT 1,
  created_at      TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  updated_at      TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT user_pkey PRIMARY KEY (id),
  CONSTRAINT user_username_unique UNIQUE (username),
  CONSTRAINT user_email_unique UNIQUE (email),
  CONSTRAINT user_mobile_unique UNIQUE (mobile),
  CONSTRAINT user_role_id_foreign FOREIGN KEY (role_id)
  REFERENCES public.role (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE
) TABLESPACE soglad;
ALTER TABLE public.user
  OWNER TO soglad;

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
  enabled    BOOLEAN NOT NULL DEFAULT TRUE,
  type       CHARACTER VARYING(255) NOT NULL DEFAULT 'USER'::CHARACTER VARYING,
  parent_id  BIGINT,
  comment    CHARACTER VARYING(255),
  created_at TIMESTAMP WITHOUT TIME ZONE,
  updated_at TIMESTAMP WITHOUT TIME ZONE,
  CONSTRAINT user_group_pkey PRIMARY KEY (id),
  CONSTRAINT user_group_code_unique UNIQUE (code),
  CONSTRAINT user_group_parent_id_foreign FOREIGN KEY (parent_id)
  REFERENCES public.group (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT group_type_check CHECK (type::text = ANY (ARRAY['USER'::CHARACTER VARYING]::text[]))
) WITH (OIDS = FALSE
) TABLESPACE soglad;
ALTER TABLE public.group
  OWNER TO soglad;