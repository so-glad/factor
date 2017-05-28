CREATE SEQUENCE public.table_order_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_order_id_seq
OWNER TO soglad;

-- Table: public.order

-- DROP TABLE public.order;

CREATE TABLE public.order
(
    id         BIGINT                      NOT NULL DEFAULT nextval('public.table_order_id_seq' :: CHARACTER VARYING),
    serial_number CHARACTER VARYING(255) NOT NULL,
    status ,

    total_price ,
    final_price ,
    payment_mode_id ,
    payment_status ,
    shipment_mode_id ,
    shipment_status ,

    currency_id ,
    user_id,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    CONSTRAINT user_address_pkey PRIMARY KEY (id)
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.order OWNER to soglad;

CREATE INDEX user_address_user_id_index
  ON public.user_address USING BTREE (user_id) TABLESPACE soglad;


CREATE TABLE public.order_goods (
    order_id,
    goods_id,
)

CREATE TABLE public.order_promotion (
    order_id,
    promotion_id,
)