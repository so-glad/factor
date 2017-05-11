CREATE SEQUENCE wechat.table_test_media_id_seq
INCREMENT 1 START 1 MINVALUE 1
MAXVALUE 9223372036854775807 CACHE 1;

ALTER SEQUENCE wechat.table_test_media_id_seq OWNER TO soglad;

CREATE TYPE wechat.MEDIATYPE AS ENUM ('image', 'voice', 'vedio', 'news');
ALTER TYPE wechat.MEDIATYPE OWNER TO soglad;

CREATE TABLE IF NOT EXISTS wechat.test_media
(
  id         BIGINT                 NOT NULL  DEFAULT nextval('wechat.table_test_media_id_seq' :: CHARACTER VARYING),
  type       wechat.MEDIATYPE                 DEFAULT 'image',
  media_id   CHARACTER VARYING(255) NOT NULL,
  for_using  CHARACTER VARYING(255),
  for_id     CHARACTER VARYING(255),
  comment    CHARACTER VARYING(255),
  time_range DATERANGE                        DEFAULT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT current_timestamp,
  updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT current_timestamp,
  CONSTRAINT test_media_pkey PRIMARY KEY (id),
  CONSTRAINT test_media_id_unique UNIQUE (media_id),
  CONSTRAINT test_media_for_unique UNIQUE (for_using, for_id)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE wechat.test_media OWNER TO soglad;