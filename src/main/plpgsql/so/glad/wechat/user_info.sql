CREATE TABLE IF NOT EXISTS wechat.user_info
(
  unionid    CHARACTER VARYING(255) NOT NULL,
  member_id  BIGINT NOT NULL,
  nickname   CHARACTER VARYING(255) NOT NULL,
  sex        INTEGER NOT NULL DEFAULT 1,
  headimgurl CHARACTER VARYING(255) NOT NULL DEFAULT '',
  city       CHARACTER VARYING(255) NOT NULL DEFAULT '',
  province   CHARACTER VARYING(255) NOT NULL DEFAULT '',
  country    CHARACTER VARYING(255) NOT NULL DEFAULT '',
  language   CHARACTER VARYING(255) NOT NULL DEFAULT '',
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT current_timestamp,
  updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT current_timestamp,
  CONSTRAINT user_info_pkey PRIMARY KEY (unionid),
  CONSTRAINT user_info_member_id_unique UNIQUE (member_id)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE wechat.user_info OWNER TO soglad;