CREATE SEQUENCE public.table_shipment_method_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_shipment_method_id_seq
OWNER TO soglad;

-- Table: public.shipment_method

-- DROP TABLE public.shipment_method;

CREATE TABLE public.shipment_method
(
    id         BIGINT                 NOT NULL DEFAULT nextval('public.table_shipment_method_id_seq' :: CHARACTER VARYING),
    name       CHARACTER VARYING(255) NOT NULL DEFAULT '',
    price      NUMERIC(20, 2) NOT NULL DEFAULT 9999999999.99,
    revoked    BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    CONSTRAINT shipment_method_pkey PRIMARY KEY (id)
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.shipment_method OWNER to soglad;

CREATE INDEX shipment_method_price_index
  ON public.shipment_method USING BTREE (price) TABLESPACE soglad;
