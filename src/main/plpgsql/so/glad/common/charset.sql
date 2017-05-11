CREATE SEQUENCE public.table_charset_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_charset_id_seq OWNER TO soglad;

-- Table: public.charset;

-- DROP TABLE public.charset;

CREATE TABLE public.charset (
  id         BIGINT                 NOT NULL DEFAULT nextval('public.table_charset_id_seq' :: CHARACTER VARYING),
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
ALTER TABLE public.charset OWNER TO soglad;

CREATE INDEX charset_code_index
  ON public.charset USING BTREE (code) TABLESPACE soglad;
CREATE INDEX charset_sign_index
  ON public.charset USING BTREE (sign) TABLESPACE soglad;

INSERT into public.charset(name, code, sign) VALUES
  ('','',''),
  (''，''，''),