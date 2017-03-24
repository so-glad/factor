CREATE SEQUENCE public.table_region_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_region_id_seq
OWNER TO soglad;

-- Table: public.region

-- DROP TABLE public.region;

CREATE TABLE public.region
(
  id         BIGINT                 NOT NULL DEFAULT nextval('public.table_region_id_seq' :: CHARACTER VARYING),
  name       CHARACTER VARYING(255) NOT NULL,
  code       CHARACTER VARYING(255) NOT NULL,
  sign       CHARACTER VARYING(255) NOT NULL,
  enabled    BOOLEAN                NOT NULL DEFAULT TRUE,
  parent_id  BIGINT,
  sort       INTEGER                NOT NULL DEFAULT 1,
  comment    CHARACTER VARYING(255) NOT NULL DEFAULT 'region',
  created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT region_pkey PRIMARY KEY (id),
  CONSTRAINT region_code_unique UNIQUE (code),
  CONSTRAINT region_sign_unique UNIQUE (sign),
  CONSTRAINT region_parent_id_foreign FOREIGN KEY (parent_id)
  REFERENCES public.region (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE
) TABLESPACE soglad;

ALTER TABLE public.region
  OWNER TO soglad;

INSERT INTO public.region(name,code,sign, parent_id) VALUES
  ('china','008600000','China',NULL),
  ('unitedstate','','UnitedState',NULL)