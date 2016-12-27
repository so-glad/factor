-- SCHEMA: wechat

-- DROP SCHEMA wechat ;
DECLARE wechat_account character varying;
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


CREATE TABLE wechat.user_
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
    CONSTRAINT user__pkey PRIMARY KEY (openid),
    CONSTRAINT user__member_id_unique UNIQUE (member_id),
    CONSTRAINT user__unionid_unique UNIQUE (unionid)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.user_ OWNER to soglad;

CREATE SEQUENCE wechat.table_media__id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE wechat.table_media__id_seq OWNER TO soglad;

CREATE TYPE wechat.mediatype AS ENUM ('Image', 'Audio', 'Vedio');
ALTER TYPE wechat.mediatype OWNER TO soglad;

CREATE TABLE wechat.media_
(
	id bigint NOT NULL DEFAULT generate_id('cooperator'::character varying),
	type wechat.mediatype default 'Image',
    media_id character varying(255) not null,
    for_schema_table character varying(255),
    for_id character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT media__pkey PRIMARY KEY (id),
    CONSTRAINT media__for_unique UNIQUE (for_schema_table, for_id)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.media_ OWNER to soglad;

CREATE SEQUENCE wechat.table_scene__id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE wechat.table_scene__id_seq OWNER TO soglad;

CREATE TYPE wechat.scenetype AS ENUM ('Openid', 'Cooperator');
ALTER TYPE wechat.scenetype OWNER TO soglad;

CREATE TABLE wechat.scene_
(
	id bigint NOT NULL DEFAULT generate_id('cooperator'::character varying),
    type wechat.scenetype default 'Openid', 
    model_id bigint,
    scene_str character varying(255),
    ticket character varying(255),
    expired_seconds integer,
    url character varying(255),
    comment character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT scene__pkey PRIMARY KEY (id),
    CONSTRAINT scene__model_id_unique UNIQUE (type, model_id),
    CONSTRAINT scene__str_unique UNIQUE (scene_str),
    CONSTRAINT scene__ticket_unique UNIQUE (ticket),
    CONSTRAINT scene__url_unique UNIQUE (url)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.scene_ OWNER to soglad;


CREATE TABLE wechat.scene_member_
(
    openid character varying(255) not null,
    member_id bigint,
    unionid character varying(255),
    scene_str character varying(255),
    comment character varying(255),
    "timestamp" timestamp without time zone,
    CONSTRAINT scene_member__pkey PRIMARY KEY (openid),
    CONSTRAINT scene_member__id_unique UNIQUE (member_id),
    CONSTRAINT scene_member__unionid_unique UNIQUE (unionid)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.scene__member OWNER to soglad;

CREATE SEQUENCE wechat.table_bonus_store__id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE wechat.table_bonus_store__id_seq OWNER TO soglad;

CREATE TABLE wechat.bonus_store_
(
	id bigint NOT NULL DEFAULT generate_id('cooperator'::character varying),
    member_id bigint,
    openid character varying(255),
    earned money,
    closed money,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT bonus_store__pkey PRIMARY KEY (id),
    CONSTRAINT bonus_store__member_id_unique UNIQUE (member_id),
    CONSTRAINT bonus_store__openid_unique UNIQUE (openid)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.bonus_store_ OWNER to soglad;

CREATE SEQUENCE wechat.table_bonus_closed__id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE wechat.table_bonus_closed__id_seq OWNER TO soglad;

CREATE TABLE wechat.bonus_closed_
(
	id bigint NOT NULL DEFAULT generate_id('cooperator'::character varying),
    member_id bigint,
    openid character varying(255),
    staff_id bigint,
    staff_email character varying(255),
    amount money,
    comment character varying(255),
    "timestamp" timestamp without time zone,
    CONSTRAINT bonus_closed__pkey PRIMARY KEY (id)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.bonus_closed_ OWNER to soglad;