CREATE SEQUENCE wechat.table_test_bonus_store_id_seq
INCREMENT 1 START 1 MINVALUE 1
MAXVALUE 9223372036854775807 CACHE 1;

ALTER SEQUENCE wechat.table_test_bonus_store_id_seq OWNER TO soglad;

CREATE TABLE IF NOT EXISTS wechat.test_bonus_store
(
  id         BIGINT NOT NULL DEFAULT nextval('wechat.table_test_bonus_store_id_seq' :: CHARACTER VARYING),
  member_id  BIGINT NOT NULL,
  openid     CHARACTER VARYING(255)NOT NULL,
  earned     DECIMAL(18,2) NOT NULL DEFAULT 0.00,
  closed     DECIMAL(18,2) NOT NULL DEFAULT 0.00,
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT current_timestamp,
  updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT current_timestamp,
  CONSTRAINT test_bonus_store_pkey PRIMARY KEY (id),
  CONSTRAINT test_bonus_store_member_id_unique UNIQUE (member_id),
  CONSTRAINT test_bonus_store_openid_unique UNIQUE (openid)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.test_bonus_store OWNER TO soglad;

CREATE SEQUENCE wechat.table_test_bonus_closed_id_seq
INCREMENT 1 START 1 MINVALUE 1
MAXVALUE 9223372036854775807 CACHE 1;

ALTER SEQUENCE wechat.table_test_bonus_closed_id_seq OWNER TO soglad;

CREATE TABLE IF NOT EXISTS wechat.test_bonus_closed
(
  id          BIGINT NOT NULL DEFAULT nextval('wechat.table_test_bonus_closed_id_seq' :: CHARACTER VARYING),
  member_id   BIGINT NOT NULL ,
  openid      CHARACTER VARYING(255) NOT NULL ,
  staff_id    BIGINT,
  staff_email CHARACTER VARYING(255),
  amount      DECIMAL(18,2),
  comment     CHARACTER VARYING(255),
  "timestamp" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT test_bonus_closed_pkey PRIMARY KEY (id)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE wechat.test_bonus_closed OWNER TO soglad;