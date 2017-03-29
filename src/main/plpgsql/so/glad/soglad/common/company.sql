CREATE SEQUENCE common.table_company_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE common.table_company_id_seq
OWNER TO soglad;

-- Table: common.company;
-- Dependency currency
-- DROP TABLE common.company;

CREATE TABLE common.company
(
  id             BIGINT                 NOT NULL DEFAULT nextval('common.table_company_id_seq'::CHARACTER VARYING),
  identity       CHARACTER VARYING(255) NOT NULL,
  enabled        BOOLEAN                NOT NULL DEFAULT TRUE,
  name           CHARACTER VARYING(255) NOT NULL,
  alias          CHARACTER VARYING(255),
  category       CHARACTER VARYING(255) NOT NULL DEFAULT '',
  capital        DECIMAL(20,2) DEFAULT 10000.00,
  currency_id    BIGINT NOT NULL DEFAULT 1,
  found_date     TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  chairman       CHARACTER VARYING(255) NOT NULL,
  address        CHARACTER VARYING(255) NOT NULL,
  phone          CHARACTER VARYING(255) NOT NULL,
  fax            CHARACTER VARYING(255),
  email          CHARACTER VARYING(255),
  industry       CHARACTER VARYING(255),
  comment        CHARACTER VARYING(255),
  size           int,
  business       TEXT DEFAULT NULL,
  summary        TEXT DEFAULT NULL,
  created_at     TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at     TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT company_pkey PRIMARY KEY (id),
  CONSTRAINT company_identity_unique UNIQUE (identity),
  CONSTRAINT company_currency_id_foreign FOREIGN KEY (currency_id)
  REFERENCES common.currency (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE common.company OWNER TO soglad;

