CREATE SEQUENCE basics.currency_id_seq
    INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE basics.currency_id_seq OWNER TO zeofast;
-- Table: basics.currency

-- DROP TABLE basics.currency;

CREATE TABLE basics.currency
(
  id bigint NOT NULL DEFAULT nextval("basics.currency_id_seq"),
  name character varying(255) NOT NULL,
  code character varying(255) NOT NULL,
  enabled boolean NOT NULL DEFAULT true,
  symbol character varying(255) NOT NULL,
  comment character varying(255) NOT NULL,
  created_at timestamp(0) without time zone,
  updated_at timestamp(0) without time zone,
  CONSTRAINT currency_pkey PRIMARY KEY (id),
  CONSTRAINT currency_code_unique UNIQUE (code)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE basics.currency OWNER to soglad;