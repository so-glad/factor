CREATE SEQUENCE public.table_file_id_seq
    INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_file_id_seq OWNER TO soglad;

CREATE TABLE public.file
(
  id             BIGINT                  NOT NULL DEFAULT nextval('public.table_file_id_seq' :: CHARACTER VARYING),
  name           CHARACTER VARYING(255)  NOT NULL,
  content_type   CHARACTER VARYING(255)  NOT NULL DEFAULT 'text/plain',
  content_length INTEGER                 NOT NULL DEFAULT 0,
  hash_type      CHARACTER VARYING(255)  NOT NULL DEFAULT 'sha256',
  hash_code      CHARACTER VARYING(255)  NOT NULL,
  url            CHARACTER VARYING(255),
  revoked        BOOLEAN                 NOT NULL DEFAULT FALSE,
  comment    CHARACTER VARYING(255)      NOT NULL DEFAULT 'currency',
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT file_pkey PRIMARY KEY (id),
  CONSTRAINT file_hash_unique UNIQUE (hash_type, hash_code),
  CONSTRAINT file_url_unique UNIQUE (url)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.file OWNER TO soglad;

CREATE INDEX file_hash_code_index
  ON public.file USING BTREE (hash_code) TABLESPACE soglad;
CREATE INDEX file_url_index
  ON public.file USING BTREE (url) TABLESPACE soglad;