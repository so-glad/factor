CREATE SEQUENCE public.table_payment_router_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_payment_router_id_seq
OWNER TO soglad;

-- Table: public.payment_router

-- DROP TABLE public.payment_router;

CREATE TABLE public.payment_router
(
    id         BIGINT                 NOT NULL DEFAULT nextval('public.table_payment_router_id_seq' :: CHARACTER VARYING),
    name       CHARACTER VARYING(255) NOT NULL DEFAULT '',
    method_ids CHARACTER VARYING(255) NOT NULL DEFAULT '',
    router_account CHARACTER VARYING(255),
    router_secret  CHARACTER VARYING(255),
    revoked    BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    CONSTRAINT payment_router_pkey PRIMARY KEY (id)
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.payment_router OWNER to soglad;