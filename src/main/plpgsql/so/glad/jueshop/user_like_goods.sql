CREATE TABLE public.user_like_goods (
    id           BIGINT                 NOT NULL DEFAULT nextval('public.table_goods_attribute_id_seq' :: CHARACTER VARYING),
    user_id      BIGINT
    goods_id     BIGINT
    sort         INT                    NOT NULL DEFAULT 1,
    created_at   TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT   goods_attribute_pkey PRIMARY KEY (id),
    CONSTRAINT   goods_attribute_goods_id_foreign FOREIGN KEY (goods_id)
    REFERENCES   public.goods (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.goods_attribute OWNER TO soglad;

CREATE INDEX goods_attribute_goods_id_index
  ON public.goods_attribute USING BTREE (goods_id) TABLESPACE soglad;