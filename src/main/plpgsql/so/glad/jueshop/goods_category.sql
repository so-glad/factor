CREATE SEQUENCE public.table_goods_category_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_goods_category_id_seq
OWNER TO soglad;

CREATE TABLE public.goods_category
(
    id         BIGINT                      NOT NULL DEFAULT nextval('public.table_goods_category_id_seq' :: CHARACTER VARYING),
    name       CHARACTER VARYING(255),
    sort       INT NOT NULL default 1,
    level      INT NOT NULL default 1,
    category_id BIGINT,
    comment    CHARACTER VARYING(255),
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    CONSTRAINT goods_category_pkey PRIMARY KEY (id),
    CONSTRAINT goods_category_category_id_foreign FOREIGN KEY (category_id)
    REFERENCES public.goods_category (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.goods_category OWNER to soglad;

CREATE INDEX goods_category_category_id_index
  ON public.goods_category USING BTREE (category_id) TABLESPACE soglad;