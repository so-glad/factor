CREATE SEQUENCE public.table_user_agent_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_user_agent_id_seq OWNER TO soglad;

-- Table: public.user_agent;

-- DROP TABLE public.user_agent;

CREATE TABLE public.user_agent
(
  id         BIGINT                      NOT NULL DEFAULT nextval('public.table_user_agent_id_seq'::CHARACTER VARYING),
  alias      VARCHAR(255)                DEFAULT NULL,
  content    VARCHAR(255)                NOT NULL,
  "timestamp" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT user_agent_pkey PRIMARY KEY (id),
  CONSTRAINT user_agent_content_unique UNIQUE (content)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.user_agent OWNER TO soglad;

CREATE INDEX user_agent_content_index
  ON public.user_agent USING BTREE (content) TABLESPACE soglad;

CREATE INDEX user_agent_alias_index
  ON public.user_agent USING BTREE (alias) TABLESPACE soglad;
