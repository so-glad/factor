-- SCHEMA: wechat

-- DROP SCHEMA wechat ;
-- Required to replace '_test' as you wechat account name
CREATE TABLE IF NOT EXISTS wechat.test_user
(
  openid         CHARACTER VARYING(255) NOT NULL,
  member_id      BIGINT NOT NULL,
  unionid        CHARACTER VARYING(255) NOT NULL,
  access_token   CHARACTER VARYING(255),
  refresh_token  CHARACTER VARYING(255),
  refresh_time   TIMESTAMP WITHOUT TIME ZONE,
  access_period  INTEGER,
  remark         CHARACTER VARYING(255),
  groupid        CHARACTER VARYING(255),
  subscribed     BOOLEAN DEFAULT FALSE,
  subscribe_time TIMESTAMP WITHOUT TIME ZONE,
  created_at     TIMESTAMP WITHOUT TIME ZONE DEFAULT current_timestamp,
  updated_at     TIMESTAMP WITHOUT TIME ZONE DEFAULT current_timestamp,
  CONSTRAINT test_user_pkey PRIMARY KEY (openid),
  CONSTRAINT test_user_member_id_unique UNIQUE (member_id),
  CONSTRAINT test_user_unionid_unique UNIQUE (unionid),
  CONSTRAINT test_user_unionid_foreign FOREIGN KEY (unionid)
  REFERENCES wechat.user_info (unionid)  MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE wechat.test_user OWNER TO soglad;