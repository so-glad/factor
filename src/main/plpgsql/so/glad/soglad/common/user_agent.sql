CREATE SEQUENCE common.table_user_agent_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE common.table_user_agent_id_seq OWNER TO soglad;

-- Table: common.user_agent;

-- DROP TABLE common.user_agent;

CREATE TABLE common.user_agent
(
  id         BIGINT                      NOT NULL DEFAULT nextval('common.table_user_agent_id_seq'::CHARACTER VARYING),
  content    VARCHAR(255)                NOT NULL ,
  "timestamp" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT user_agent_pkey PRIMARY KEY (id),
  CONSTRAINT user_agent_content_unique UNIQUE (content)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE common.user_agent OWNER TO soglad;
