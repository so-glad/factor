CREATE SEQUENCE public.table_order_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_order_id_seq
OWNER TO soglad;

-- Table: public.order

-- DROP TABLE public.order;

CREATE TABLE public.order
(
    id                BIGINT                 NOT NULL DEFAULT nextval('public.table_order_id_seq' :: CHARACTER VARYING),
    serial_number     CHARACTER VARYING(255) NOT NULL,
    status            CHARACTER VARYING(255) NOT NULL DEFAULT 'Created',
    total_price       NUMERIC(20,2) NOT NULL DEFAULT 9999999999.99,
    final_price       NUMERIC(20,2) NOT NULL DEFAULT 9999999999.99,
    payment_method_id BIGINT,
    payment_status    CHARACTER VARYING(255) NOT NULL DEFAULT 'Created',
    shipment_method_id BIGINT ,
    shipment_status   CHARACTER VARYING(255) NOT NULL DEFAULT 'Created',
    user_address_id   BIGINT ,
    currency_id   BIGINT,
    user_id       BIGINT,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    CONSTRAINT order_pkey PRIMARY KEY (id),
    CONSTRAINT order_payment_method_id_foreign FOREIGN KEY (payment_method_id)
    REFERENCES public.payment_method (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE,
    CONSTRAINT order_shipment_method_id_foreign FOREIGN KEY (shipment_method_id)
    REFERENCES public.shipment_method (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE,
    CONSTRAINT order_user_address_id_foreign FOREIGN KEY (user_address_id)
    REFERENCES public.user_address (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE,
    CONSTRAINT order_status_check CHECK (status = ANY(ARRAY['Created', 'Paying', 'Paid', 'Shipping', 'Shipped', 'Completed', 'Returned', 'Cancelled'])),
    CONSTRAINT order_payment_status_check CHECK (payment_status = ANY(ARRAY['Created', 'Paying', 'Paid', 'Failed', 'Cancelled'])),
    CONSTRAINT order_shipment_status_check CHECK (shipment_status = ANY(ARRAY['Created', 'Shipping', 'Shipped', 'Rejected']))
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.order OWNER to soglad;

CREATE INDEX order_serial_number_index
  ON public.order USING BTREE (serial_number) TABLESPACE soglad;

CREATE INDEX order_status_index
  ON public.order USING BTREE (status) TABLESPACE soglad;

CREATE INDEX order_total_price_index
  ON public.order USING BTREE (total_price) TABLESPACE soglad;

CREATE INDEX order_final_price_index
  ON public.order USING BTREE (final_price) TABLESPACE soglad;

CREATE INDEX order_payment_method_id_index
  ON public.order USING BTREE (payment_method_id) TABLESPACE soglad;

CREATE INDEX order_payment_status_index
  ON public.order USING BTREE (payment_status) TABLESPACE soglad;

CREATE INDEX order_shipment_method_id_index
  ON public.order USING BTREE (shipment_method_id) TABLESPACE soglad;

CREATE INDEX order_shipment_status_index
  ON public.order USING BTREE (shipment_status) TABLESPACE soglad;

CREATE INDEX order_user_id_index
  ON public.order USING BTREE (user_id) TABLESPACE soglad;

CREATE INDEX order_currency_id_index
  ON public.order USING BTREE (currency_id) TABLESPACE soglad;