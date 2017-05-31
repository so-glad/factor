CREATE SEQUENCE public.table_payment_method_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_payment_method_id_seq
OWNER TO soglad;

-- Table: public.payment_method

-- DROP TABLE public.payment_method;

CREATE TABLE public.payment_method
(
    id         BIGINT                 NOT NULL DEFAULT nextval('public.table_payment_method_id_seq' :: CHARACTER VARYING),
    name       CHARACTER VARYING(255) NOT NULL DEFAULT '',
    mode       CHARACTER VARYING(255) NOT NULL DEFAULT 'CARD',
    revoked    BOOLEAN NOT NULL DEFAULT FALSE,
    router_id  BIGINT,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    CONSTRAINT payment_method_pkey PRIMARY KEY (id),
    CONSTRAINT payment_method_mode_check CHECK (mode = ANY (ARRAY['CARD', 'NETWORK', 'CASH'])),
    CONSTRAINT payment_method_router_id_foreign FOREIGN KEY (router_id)
    REFERENCES public.payment_router (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.payment_method OWNER to soglad;

CREATE INDEX payment_method_mode_index
  ON public.payment_method USING BTREE (mode) TABLESPACE soglad;

CREATE INDEX payment_router_id_index
  ON public.payment_method USING BTREE (router_id) TABLESPACE soglad;