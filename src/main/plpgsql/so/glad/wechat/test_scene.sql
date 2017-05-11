CREATE SEQUENCE wechat.table_test_scene_id_seq
INCREMENT 1 START 1 MINVALUE 1
MAXVALUE 9223372036854775807 CACHE 1;

ALTER SEQUENCE wechat.table_test_scene_id_seq
OWNER TO soglad;

CREATE TYPE wechat.SCENETYPE AS ENUM ('openid', 'cooperator');
ALTER TYPE wechat.SCENETYPE OWNER TO soglad;

CREATE TABLE IF NOT EXISTS wechat.test_scene
(
  id              BIGINT                      NOT NULL  DEFAULT nextval(
      'wechat.table_test_scene_id_seq' :: CHARACTER VARYING),
  type            wechat.SCENETYPE                      DEFAULT 'openid',
  model_id        BIGINT,
  scene_str       CHARACTER VARYING(255)      NOT NULL,
  ticket          CHARACTER VARYING(255),
  expired_seconds INTEGER,
  url             CHARACTER VARYING(255),
  comment         CHARACTER VARYING(255),
  created_at      TIMESTAMP WITHOUT TIME ZONE NOT NULL  DEFAULT current_timestamp,
  updated_at      TIMESTAMP WITHOUT TIME ZONE NOT NULL  DEFAULT current_timestamp,
  CONSTRAINT test_scene_pkey PRIMARY KEY (id),
  CONSTRAINT test_scene_model_id_unique UNIQUE (type, model_id),
  CONSTRAINT test_scene_str_unique UNIQUE (scene_str),
  CONSTRAINT test_scene_ticket_unique UNIQUE (ticket),
  CONSTRAINT test_scene_url_unique UNIQUE (url)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE wechat.test_scene OWNER TO soglad;

CREATE TABLE IF NOT EXISTS wechat.test_scene_member
(
  openid      CHARACTER VARYING(255)      NOT NULL,
  member_id   BIGINT,
  unionid     CHARACTER VARYING(255) NOT NULL ,
  scene_str   CHARACTER VARYING(255),
  comment     CHARACTER VARYING(255),
  "timestamp" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT test_scene_member_pkey PRIMARY KEY (openid),
  CONSTRAINT test_scene_member_id_unique UNIQUE (member_id),
  CONSTRAINT test_scene_member_unionid_unique UNIQUE (unionid)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE wechat.test_scene_member OWNER TO soglad;
