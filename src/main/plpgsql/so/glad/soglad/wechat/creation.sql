-- SCHEMA: wechat

-- DROP SCHEMA wechat ;
-- Required to replace '_test' as you wechat account name 
CREATE SCHEMA wechat AUTHORIZATION soglad;

-- FUNCTION: wechat.generate_id(character varying)

-- DROP FUNCTION wechat.generate_id(character varying);

CREATE OR REPLACE FUNCTION wechat.generate_id(tab_name character varying)
    RETURNS bigint
    LANGUAGE 'plpgsql'
    COST 100.0
    VOLATILE NOT LEAKPROOF 
AS $function$

DECLARE
  our_epoch bigint := 1482046573767;
  seq_id bigint;
  now_millis bigint;
  shard_id int := 1;
  result bigint;
BEGIN
  SELECT nextval('wechat.table_' || tab_name || '_id_seq') % 1024 INTO seq_id;
  SELECT FLOOR(EXTRACT(EPOCH FROM clock_timestamp()) * 1000) INTO now_millis;
  result := (now_millis - our_epoch) << 23;
  result := result | (shard_id << 10);
  result := result | (seq_id);
  RETURN result;
END;

$function$;

ALTER FUNCTION wechat.generate_id(character varying) OWNER TO soglad;

CREATE TABLE IF NOT EXISTS wechat.user_info
(
    unionid character varying(255) NOT NULL,
    member_id bigint,
    nickname character varying(255),
    sex integer,
    headimgurl character varying(255),
    city character varying(255),
    province character varying(255),
    country character varying(255),
    language character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT user_info_pkey PRIMARY KEY (unionid),
    CONSTRAINT user_info_member_id_unique UNIQUE (member_id)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.user_info OWNER to soglad;


CREATE TABLE IF NOT EXISTS wechat.user_test
(
    openid character varying(255) NOT NULL,
    member_id bigint,
    unionid character varying(255),
    access_token character varying(255),
    refresh_token character varying(255),
    refresh_time timestamp without time zone,
    access_period integer,
    remark character varying(255),
    groupid character varying(255),
    subscribed boolean default FALSE,
    subscribe_time timestamp without time zone,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT user_test_pkey PRIMARY KEY (openid),
    CONSTRAINT user_test_member_id_unique UNIQUE (member_id),
    CONSTRAINT user_test_unionid_unique UNIQUE (unionid)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.user_test OWNER to soglad;

CREATE SEQUENCE wechat.table_media_test_id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE wechat.table_media_test_id_seq OWNER TO soglad;

CREATE TYPE wechat.mediatype AS ENUM ('image', 'voice', 'vedio', 'news');
ALTER TYPE wechat.mediatype OWNER TO soglad;

CREATE TABLE IF NOT EXISTS wechat.media_test
(
	id bigint NOT NULL DEFAULT wechat.generate_id('media_test'::character varying),
	type wechat.mediatype default 'image',
    media_id character varying(255) not null,
    for_using character varying(255),
    for_id character varying(255),
    comment character varying(255),
    time_range daterange default null,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT media_test_pkey PRIMARY KEY (id),
    CONSTRAINT media_test_id_unique UNIQUE (media_id),
    CONSTRAINT media_test_for_unique UNIQUE (for_using, for_id)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.media_test OWNER to soglad;

CREATE SEQUENCE wechat.table_news_test_id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE wechat.table_news_test_id_seq OWNER TO soglad;

CREATE TABLE IF NOT EXISTS wechat.news_test 
(
    id bigint NOT NULL DEFAULT wechat.generate_id('news_test'::character varying),
    thumb_media_id character varying(255),
    thumb_url character varying(255),
    media_id character varying(255),
    url character varying(255),
    digest character varying(255),
    title character varying(255),
    author character varying(255),
    content text,
    content_source_url character varying(255),
    show_cover_pic boolean,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT news_test_pkey PRIMARY KEY (id),
    CONSTRAINT news_test_media_unique UNIQUE (media_id)
)WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.news_test OWNER to soglad;

CREATE SEQUENCE wechat.table_scene_test_id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE wechat.table_scene_test_id_seq OWNER TO soglad;

CREATE TYPE wechat.scenetype AS ENUM ('openid', 'cooperator');
ALTER TYPE wechat.scenetype OWNER TO soglad;

CREATE TABLE IF NOT EXISTS wechat.scene_test
(
	id bigint NOT NULL DEFAULT wechat.generate_id('scene_test'::character varying),
    type wechat.scenetype default 'openid', 
    model_id bigint,
    scene_str character varying(255),
    ticket character varying(255),
    expired_seconds integer,
    url character varying(255),
    comment character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT scene_test_pkey PRIMARY KEY (id),
    CONSTRAINT scene_test_model_id_unique UNIQUE (type, model_id),
    CONSTRAINT scene_test_str_unique UNIQUE (scene_str),
    CONSTRAINT scene_test_ticket_unique UNIQUE (ticket),
    CONSTRAINT scene_test_url_unique UNIQUE (url)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.scene_test OWNER to soglad;

CREATE TABLE IF NOT EXISTS wechat.scene_member_test
(
    openid character varying(255) not null,
    member_id bigint,
    unionid character varying(255),
    scene_str character varying(255),
    comment character varying(255),
    "timestamp" timestamp without time zone,
    CONSTRAINT scene_member_test_pkey PRIMARY KEY (openid),
    CONSTRAINT scene_member_test_id_unique UNIQUE (member_id),
    CONSTRAINT scene_member_test_unionid_unique UNIQUE (unionid)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.scene_member_test OWNER to soglad;

CREATE SEQUENCE wechat.table_bonus_store_test_id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE wechat.table_bonus_store_test_id_seq OWNER TO soglad;

CREATE TABLE IF NOT EXISTS wechat.bonus_store_test
(
	id bigint NOT NULL DEFAULT wechat.generate_id('bonus_store_test'::character varying),
    member_id bigint,
    openid character varying(255),
    earned money,
    closed money,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT bonus_store_test_pkey PRIMARY KEY (id),
    CONSTRAINT bonus_store_test_member_id_unique UNIQUE (member_id),
    CONSTRAINT bonus_store_test_openid_unique UNIQUE (openid)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.bonus_store_test OWNER to soglad;

CREATE SEQUENCE wechat.table_bonus_closed_test_id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE wechat.table_bonus_closed_test_id_seq OWNER TO soglad;

CREATE TABLE IF NOT EXISTS wechat.bonus_closed_test
(
	id bigint NOT NULL DEFAULT wechat.generate_id('bonus_closed_test'::character varying),
    member_id bigint,
    openid character varying(255),
    staff_id bigint,
    staff_email character varying(255),
    amount money,
    comment character varying(255),
    "timestamp" timestamp without time zone,
    CONSTRAINT bonus_closed_test_pkey PRIMARY KEY (id)
)WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.bonus_closed_test OWNER to soglad;