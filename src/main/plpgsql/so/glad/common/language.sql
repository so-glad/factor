CREATE SEQUENCE public.table_language_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_language_id_seq
OWNER TO soglad;

-- Table: public.language

-- DROP TABLE public.language;

CREATE TABLE public.language
(
  id         BIGINT                 NOT NULL DEFAULT nextval('public.table_language_id_seq' :: CHARACTER VARYING),
  name       CHARACTER VARYING(255) NOT NULL,
  code       CHARACTER VARYING(255) NOT NULL,
  native_name       CHARACTER VARYING(255) NOT NULL,
  sort        INTEGER NOT NULL DEFAULT 1,
  revoked    BOOLEAN                NOT NULL DEFAULT FALSE,
  comment    CHARACTER VARYING(255) NOT NULL DEFAULT 'language',
  created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT language_pkey PRIMARY KEY (id),
  CONSTRAINT language_code_unique UNIQUE (code)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE public.language OWNER TO soglad;

CREATE INDEX language_code_index
  ON public.language USING BTREE (code) TABLESPACE soglad;
CREATE INDEX language_name_index
  ON public.language USING BTREE (name) TABLESPACE soglad;

INSERT INTO public.language(name, code, native_name) VALUES
  ('english','en','English'),
  ('chinese','zh','汉语'),
  ('russian','ru',''),
  ('japanese','jp','日本語')