CREATE SEQUENCE wechat.table_test_news_id_seq
INCREMENT 1 START 1 MINVALUE 1
MAXVALUE 9223372036854775807 CACHE 1;

ALTER SEQUENCE wechat.table_test_news_id_seq
OWNER TO soglad;

CREATE TABLE IF NOT EXISTS wechat.test_news
(
  id                 BIGINT NOT NULL DEFAULT nextval('wechat.table_test_news_id_seq' :: CHARACTER VARYING),
  thumb_media_id     CHARACTER VARYING(255) NOT NULL,
  thumb_url          CHARACTER VARYING(255) NOT NULL ,
  media_id           CHARACTER VARYING(255) NOT NULL ,
  url                CHARACTER VARYING(255) NOT NULL ,
  digest             CHARACTER VARYING(255) NOT NULL ,
  title              CHARACTER VARYING(255) NOT NULL ,
  author             CHARACTER VARYING(255) NOT NULL ,
  content            TEXT NOT NULL ,
  content_source_url CHARACTER VARYING(255) NOT NULL ,
  show_cover_pic     BOOLEAN NOT NULL ,
  created_at         TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  updated_at         TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT test_news_pkey PRIMARY KEY (id),
  CONSTRAINT test_news_media_unique UNIQUE (media_id)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.test_news OWNER TO soglad;
