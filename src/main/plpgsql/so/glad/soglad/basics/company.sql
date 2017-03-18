CREATE SEQUENCE basics.table_company_id_seq
    INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE basics.table_company_id_seq OWNER TO soglad;

CREATE TABLE basics.company
(
    id bigint NOT NULL DEFAULT nextval("basics.table_company_id_seq"),
    name character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    enabled boolean NOT NULL DEFAULT true,
    alias character varying(255) NOT NULL,
    category character varying(255),
    legal_identity character varying(255),
    chairman character varying(255),
    address character varying(255),
    phone_number character varying(255),
    email character varying(255),
    account_bank character varying(255),
    bank_account character varying(255),
    comment character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT company_pkey PRIMARY KEY (id),
    CONSTRAINT compayn_code_unique UNIQUE (code)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE basics.company OWNER to soglad;