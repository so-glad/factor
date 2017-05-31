CREATE SEQUENCE public.table_goods_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_goods_id_seq
OWNER TO soglad;

-- Table: public.goods

-- DROP TABLE public.goods;

CREATE TABLE public.goods
(
    id            BIGINT                 NOT NULL DEFAULT nextval('public.table_goods_id_seq' :: CHARACTER VARYING),
    serial_number CHARACTER VARYING(255) NOT NULL,
    name          CHARACTER VARYING(255) NOT NULL,
    slogan        CHARACTER VARYING(255) NOT NULL,
    image_url     CHARACTER VARYING(255) NOT NULL,
    price         DECIMAL(20, 2) NOT NULL DEFAULT 999999999999999999.99,
    in_sale       BOOLEAN                NOT NULL DEFAULT FALSE,
    revoked       BOOLEAN                NOT NULL DEFAULT FALSE,
    category_id   BIGINT,
    user_id       BIGINT,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    CONSTRAINT goods_pkey PRIMARY KEY (id),
    CONSTRAINT goods_category_id_foreign FOREIGN KEY (category_id)
    REFERENCES public.goods_category (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.goods OWNER to soglad;

CREATE INDEX goods_user_id_index
  ON public.goods USING BTREE (user_id) TABLESPACE soglad;
CREATE INDEX goods_category_id_index
  ON public.goods USING BTREE (category_id) TABLESPACE soglad;