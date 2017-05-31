CREATE SEQUENCE public.table_goods_attribute_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_goods_attribute_id_seq
OWNER TO soglad;

CREATE TABLE public.goods_attribute (
    id           BIGINT                 NOT NULL DEFAULT nextval('public.table_goods_attribute_id_seq' :: CHARACTER VARYING),
    name         CHARACTER VARYING(255),
    options      CHARACTER VARYING(255),
    revoked      BOOLEAN NOT NULL DEFAULT FALSE,
    comment      CHARACTER VARYING(255) NOT NULL DEFAULT 'public.goods_attribute',
    goods_id     BIGINT,
    created_at   TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT   goods_attribute_pkey PRIMARY KEY (id),
    CONSTRAINT   goods_attribute_goods_id_foreign FOREIGN KEY (goods_id)
    REFERENCES   public.goods (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.goods_attribute OWNER TO soglad;

CREATE INDEX goods_attribute_goods_id_index
  ON public.goods_attribute USING BTREE (goods_id) TABLESPACE soglad;