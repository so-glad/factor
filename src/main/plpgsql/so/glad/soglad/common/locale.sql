CREATE SEQUENCE common.table_locale_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE common.table_locale_id_seq
OWNER TO soglad;

-- Table: common.locale

-- DROP TABLE common.locale;

CREATE TABLE common.locale
(
  id          BIGINT                         NOT NULL DEFAULT nextval('common.table_locale_id_seq' :: CHARACTER VARYING),
  name        CHARACTER VARYING(255)         NOT NULL,
  code        CHARACTER VARYING(255)         NOT NULL,
  native_name CHARACTER VARYING(255)         NOT NULL,
  enabled     BOOLEAN                        NOT NULL DEFAULT TRUE,
  language_id BIGINT NOT NULL DEFAULT 0,
  region_id BIGINT NOT NULL DEFAULT 0,
  comment     CHARACTER VARYING(255),
  created_at  TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT locale_pkey PRIMARY KEY (id),
  CONSTRAINT locale_code_unique UNIQUE (code),
  CONSTRAINT locale_language_id_foreign FOREIGN KEY (language_id)
  REFERENCES common.locale (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT locale_region_id_foreign FOREIGN KEY (region_id)
  REFERENCES common.region (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE common.locale OWNER TO soglad;