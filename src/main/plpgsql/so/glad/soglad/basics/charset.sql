CREATE SEQUENCE basics.charset_id_seq
    INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE basics.charset_id_seq OWNER TO soglad;

-- Table: basics.locale

-- DROP TABLE basics.locale;

CREATE TABLE basics.charset
(
  id bigint NOT NULL DEFAULT nextval("basics.charset_id_seq"),
  name character varying(255) NOT NULL,
  code character varying(255) NOT NULL,
  sign character varying(255) NOT NULL,
  enabled boolean NOT NULL DEFAULT true,
  sort integer NOT NULL default 1,
  comment character varying(255),
  created_at timestamp(0) without time zone,
  updated_at timestamp(0) without time zone,
  CONSTRAINT charset_pkey PRIMARY KEY (id),
  CONSTRAINT charset_code_unique UNIQUE (code),
  CONSTRAINT charset_sign_unique UNIQUE (sign)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE basics.charset OWNER to soglad;