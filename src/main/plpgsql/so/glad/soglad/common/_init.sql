-- SCHEMA: common

-- DROP SCHEMA common ;

CREATE SCHEMA common AUTHORIZATION soglad;

-- FUNCTION: common.generate_id(character varying)

-- DROP FUNCTION common.generate_id(character varying);

CREATE OR REPLACE FUNCTION basics.generate_id(tab_name character varying)
    RETURNS bigint
    LANGUAGE 'plpgsql'
    COST 100.0
    VOLATILE NOT LEAKPROOF 
AS $function$

DECLARE
  our_epoch bigint := 1482046573767;
  shard_id int := 1;
  seq_id bigint;
  now_millis bigint;
  result bigint;
BEGIN
  SELECT nextval('basics.table_' || tab_name || '_id_seq') % 1024 INTO seq_id;
  SELECT FLOOR(EXTRACT(EPOCH FROM clock_timestamp()) * 1000) INTO now_millis;
  result := (now_millis - our_epoch) << 23;
  result := result | (shard_id << 10);
  result := result | (seq_id);
  RETURN result;
END;

$function$;

ALTER FUNCTION basics.generate_id(character varying) OWNER TO soglad;


CREATE SEQUENCE basics.table_supplier_id_seq
    INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

ALTER SEQUENCE basics.table_supplier_id_seq OWNER TO soglad;

CREATE TABLE basics.supplier
(
    id bigint NOT NULL DEFAULT basics.generate_id('supplier'::character varying),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    code character varying(255) COLLATE pg_catalog."default",
    enabled boolean NOT NULL DEFAULT true,
    address character varying(255) COLLATE pg_catalog."default",
    phone_number character varying(255) COLLATE pg_catalog."default",
    comment character varying(255) COLLATE pg_catalog."default",
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT supplier_pkey PRIMARY KEY (id),
    CONSTRAINT supplier_code_unique UNIQUE (code)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE basics.supplier OWNER to soglad;

CREATE SEQUENCE basics.table_cooperator_id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE basics.table_cooperator_id_seq OWNER TO soglad;

CREATE TABLE basics.cooperator
(
    id bigint NOT NULL DEFAULT basics.generate_id('cooperator'::character varying),
    name character varying(255) NOT NULL,
    code character varying(255),
    enabled boolean NOT NULL DEFAULT true,
    address character varying(255),
    phone_number character varying(255),
    comment character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT cooperator_pkey PRIMARY KEY (id),
    CONSTRAINT cooperator_code_unique UNIQUE (code)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE basics.cooperator OWNER to soglad;

CREATE SEQUENCE basics.table_mobile_operator_id_seq
    INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE basics.table_mobile_operator_id_seq OWNER TO soglad;
-- Table: public.mobile_operator

-- DROP TABLE public.mobile_operator;

CREATE TABLE public.mobile_operator
(
  id bigint NOT NULL DEFAULT nextval("basics.table_mobile_operator_id_seq"),
  name character varying(255) NOT NULL,
  code character varying(255) NOT NULL,
  sign character varying(255) NOT NULL,
  enabled boolean NOT NULL DEFAULT true,
  comment character varying(255),
  created_at timestamp(0) without time zone,
  updated_at timestamp(0) without time zone,
  CONSTRAINT mobile_operator_pkey PRIMARY KEY (id),
  CONSTRAINT mobile_operator_code_unique UNIQUE (code),
  CONSTRAINT mobile_operator_sign_unique UNIQUE (sign)
)WITH (OIDS = FALSE) TABLESPACE zeofast;

ALTER TABLE public.mobile_operator OWNER to zeofast;

CREATE TABLE basics.staff
(
    id bigint NOT NULL DEFAULT basics.generate_id('staff'::character varying),
    username character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    salt character varying(255) COLLATE pg_catalog."default",
    enabled boolean DEFAULT true,
    status character varying(255) COLLATE pg_catalog."default",
    alias character varying(255) COLLATE pg_catalog."default",
    avatar character varying(255) COLLATE pg_catalog."default",
    gender character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    email_verified boolean DEFAULT false,
    mobile character varying(255) COLLATE pg_catalog."default",
    mobile_verified boolean DEFAULT false,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT staff_pkey PRIMARY KEY (id),
    CONSTRAINT staff_email_unique UNIQUE (email),
    CONSTRAINT staff_mobile_unique UNIQUE (mobile),
    CONSTRAINT staff_username_unique UNIQUE (username)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE basics.staff OWNER to soglad;