CREATE SEQUENCE public.table_goods_tag_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_goods_tag_id_seq
OWNER TO soglad;

-- Table: public.goods_tag

-- DROP TABLE public.goods_tag;

CREATE TABLE public.goods_tag
(
    id            BIGINT                 NOT NULL DEFAULT nextval('public.table_goods_tag_id_seq' :: CHARACTER VARYING),
    name          CHARACTER VARYING(255) NOT NULL ,
    type          CHARACTER VARYING(255) NOT NULL DEFAULT 'customer',
    revoked       BOOLEAN                NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    CONSTRAINT goods_tag_pkey PRIMARY KEY (id)
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.goods_tag OWNER to soglad;

CREATE INDEX goods_tag_type_index
  ON public.goods_tag USING BTREE (type) TABLESPACE soglad;