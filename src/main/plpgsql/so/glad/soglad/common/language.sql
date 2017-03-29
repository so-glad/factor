CREATE SEQUENCE common.table_language_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE common.table_language_id_seq
OWNER TO soglad;

-- Table: common.language

-- DROP TABLE common.language;

CREATE TABLE common.language
(
  id         BIGINT                 NOT NULL DEFAULT nextval('common.table_language_id_seq' :: CHARACTER VARYING),
  name       CHARACTER VARYING(255) NOT NULL,
  code       CHARACTER VARYING(255) NOT NULL,
  native_name       CHARACTER VARYING(255) NOT NULL,
  enabled    BOOLEAN                NOT NULL DEFAULT TRUE,
  comment    CHARACTER VARYING(255) NOT NULL DEFAULT 'language',
  created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT language_pkey PRIMARY KEY (id),
  CONSTRAINT language_code_unique UNIQUE (code)
) WITH (OIDS = FALSE
) TABLESPACE soglad;

ALTER TABLE common.language
  OWNER TO soglad;

INSERT INTO common.language(name, code, native_name) VALUES
  ('english','en','English'),
  ('chinese','zh','汉语'),
  ('russian','ru',''),
  ('japanese','jp','日本語')