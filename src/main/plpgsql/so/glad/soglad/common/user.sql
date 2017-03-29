CREATE SEQUENCE common.table_role_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE common.table_role_id_seq OWNER TO soglad;

-- Table: common.role;

-- DROP TABLE common.role;

CREATE TABLE common.role
(
  id         BIGINT                      NOT NULL DEFAULT nextval('common.table_role_id_seq'::CHARACTER VARYING),
  name       CHARACTER VARYING(255)      NOT NULL,
  code       CHARACTER VARYING(255)      NOT NULL,
  enabled    BOOLEAN                     NOT NULL DEFAULT TRUE,
  comment    CHARACTER VARYING(255)      NOT NULL DEFAULT 'common.role',
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT role_pkey PRIMARY KEY (id),
  CONSTRAINT role_code_unique UNIQUE (code)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE common.role OWNER TO soglad;

INSERT INTO common.role(name, code, comment) VALUES 
('Member', 'MBR', 'Platform service user'),
('Staff', 'STF', 'Company inside employee'),
('Merchant', 'MCT', 'Merchant'),
('Distributor', 'DSB', 'Next level merchant'),
('Supplier', 'SPL', 'Productor supplier'),
('Cooperator', 'COR', 'coopertor');

CREATE SEQUENCE common.table_user_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE common.table_user_id_seq OWNER TO soglad;

-- Table: common.user;

-- DROP TABLE common.user;

CREATE TABLE common.user (
  id              BIGINT                      NOT NULL DEFAULT nextval('common.table_user_id_seq' :: CHARACTER VARYING),
  username        CHARACTER VARYING(255)      NOT NULL,
  password        CHARACTER VARYING(255)      NOT NULL DEFAULT '',
  salt            CHARACTER VARYING(255)               DEFAULT NULL,
  enabled         BOOLEAN                     NOT NULL DEFAULT TRUE,
  status          CHARACTER VARYING(255)      NOT NULL DEFAULT '',
  alias           CHARACTER VARYING(255)      NOT NULL DEFAULT 'Bear',
  avatar          CHARACTER VARYING(255),
  gender          CHARACTER VARYING(255)      NOT NULL DEFAULT 'Male',
  email           CHARACTER VARYING(255),
  email_verified  BOOLEAN                     NOT NULL DEFAULT FALSE,
  mobile          CHARACTER VARYING(255),
  mobile_verified BOOLEAN                     NOT NULL DEFAULT FALSE,
  remember_token  CHARACTER VARYING(255)               DEFAULT NULL,
  role_id         BIGINT                      NOT NULL DEFAULT 1,
  created_at      TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT user_pkey PRIMARY KEY (id),
  CONSTRAINT user_username_unique UNIQUE (username),
  CONSTRAINT user_email_unique UNIQUE (email),
  CONSTRAINT user_mobile_unique UNIQUE (mobile),
  CONSTRAINT user_role_id_foreign FOREIGN KEY (role_id)
  REFERENCES common.role (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE common.user OWNER TO soglad;

CREATE SEQUENCE common.table_group_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE common.table_group_id_seq
OWNER TO soglad;

-- Table: common.group;

-- DROP TABLE common.group;

CREATE TABLE common.group
(
  id         BIGINT  NOT NULL DEFAULT nextval('common.table_group_id_seq' :: CHARACTER VARYING),
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
  REFERENCES common.group (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT group_type_check CHECK (type::text = ANY (ARRAY['USER'::CHARACTER VARYING]::text[]))
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE common.group OWNER TO soglad;