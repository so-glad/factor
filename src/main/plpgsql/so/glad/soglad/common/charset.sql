CREATE SEQUENCE common.table_charset_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE common.table_charset_id_seq OWNER TO soglad;

-- Table: common.charset;

-- DROP TABLE common.charset;

CREATE TABLE common.charset (
  id         BIGINT                 NOT NULL DEFAULT nextval('common.table_charset_id_seq' :: CHARACTER VARYING),
  name       CHARACTER VARYING(255) NOT NULL,
  code       CHARACTER VARYING(255) NOT NULL,
  sign       CHARACTER VARYING(255) NOT NULL,
  enabled    BOOLEAN                NOT NULL DEFAULT TRUE,
  sort       INTEGER                NOT NULL DEFAULT 1,
  comment    CHARACTER VARYING(255),
  created_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT current_timestamp,
  updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT current_timestamp,
  CONSTRAINT charset_pkey PRIMARY KEY (id),
  CONSTRAINT charset_code_unique UNIQUE (code),
  CONSTRAINT charset_sign_unique UNIQUE (sign)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE common.charset OWNER TO soglad;

INSERT into common.charset(name, code, sign) VALUES
  ('','',''),
  (''，''，''),