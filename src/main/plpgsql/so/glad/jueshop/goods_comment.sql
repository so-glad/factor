CREATE SEQUENCE public.table_goods_comment_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_goods_comment_id_seq
OWNER TO soglad;

CREATE TABLE public.goods_comment
(
    id          BIGINT                      NOT NULL DEFAULT nextval('public.table_goods_comment_id_seq' :: CHARACTER VARYING),
    score       DECIMAL(2, 1),
    tags        CHARACTER VARYING(255)[],
    content     TEXT DEFAULT '',
    image_urls  CHARACTER VARYING(255)[],
    revoked     BOOLEAN NOT NULL DEFAULT false,
    goods_id    BIGINT,
    user_id     BIGINT,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    CONSTRAINT goods_comment_pkey PRIMARY KEY (id),
    CONSTRAINT goods_comment_goods_id_foreign FOREIGN KEY (goods_id)
    REFERENCES public.goods (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.goods_comment OWNER to soglad;

CREATE INDEX goods_comment_user_id_index
  ON public.goods_comment USING BTREE (user_id) TABLESPACE soglad;
    
CREATE INDEX goods_comment_goods_id_index
  ON public.goods_comment USING BTREE (goods_id) TABLESPACE soglad;    