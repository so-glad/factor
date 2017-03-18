CREATE SEQUENCE basics.locale_id_seq
    INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE basics.locale_id_seq OWNER TO soglad;

-- Table: basics.locale

-- DROP TABLE basics.locale;

CREATE TABLE basics.locale
(
  id bigint NOT NULL DEFAULT nextval("basics.locale_id_seq"),
  name character varying(255) NOT NULL,
  code character varying(255) NOT NULL,
  sign character varying(255) NOT NULL,
  enabled boolean NOT NULL DEFAULT true,
  parent_id bigint,
  sort integer NOT NULL default 1,
  comment character varying(255),
  created_at timestamp(0) without time zone,
  updated_at timestamp(0) without time zone,
  CONSTRAINT locale_pkey PRIMARY KEY (id),
  CONSTRAINT locale_code_unique UNIQUE (code),
  CONSTRAINT locale_sign_unique UNIQUE (sign),
  CONSTRAINT locale_parent_id_foreign FOREIGN KEY (parent_id)
  REFERENCES basics.locale (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE basics.locale OWNER to soglad;