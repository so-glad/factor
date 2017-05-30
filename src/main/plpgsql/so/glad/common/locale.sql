CREATE SEQUENCE public.table_locale_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_locale_id_seq
OWNER TO soglad;

-- Table: public.locale

-- DROP TABLE public.locale;

CREATE TABLE public.locale
(
  id          BIGINT                         NOT NULL DEFAULT nextval('public.table_locale_id_seq' :: CHARACTER VARYING),
  name        CHARACTER VARYING(255)         NOT NULL,
  code        CHARACTER VARYING(255)         NOT NULL,
  native_name CHARACTER VARYING(255)         NOT NULL,
  revoked     BOOLEAN                        NOT NULL DEFAULT FALSE,
  sort        INTEGER NOT NULL DEFAULT 1,
  language_id BIGINT,
  region_id   BIGINT,
  comment     CHARACTER VARYING(255),
  created_at  TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT locale_pkey PRIMARY KEY (id),
  CONSTRAINT locale_code_unique UNIQUE (code),
  CONSTRAINT locale_language_id_foreign FOREIGN KEY (language_id)
  REFERENCES public.language (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT locale_region_id_foreign FOREIGN KEY (region_id)
  REFERENCES public.region (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.locale OWNER TO soglad;

CREATE INDEX locale_code_index
  ON public.locale USING BTREE (code) TABLESPACE soglad;
CREATE INDEX locale_name_index
  ON public.locale USING BTREE (name) TABLESPACE soglad;
CREATE INDEX locale_region_id_index
  ON public.locale USING BTREE (region_id) TABLESPACE soglad;
CREATE INDEX locale_language_id_index
  ON public.locale USING BTREE (language_id) TABLESPACE soglad;