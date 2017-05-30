CREATE SEQUENCE public.table_oauth_client_id_seq
    INCREMENT 1 START 10000001 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_oauth_client_id_seq OWNER TO soglad;

-- Table: public.oauth_client

-- DROP TABLE public.oauth_client;

CREATE TABLE public.oauth_client (
  id                     BIGINT                 NOT NULL DEFAULT nextval('public.table_oauth_client_id_seq' :: CHARACTER VARYING),
  secret                 CHARACTER VARYING(255) NOT NULL,
  name                   CHARACTER VARYING(255) NOT NULL,
  redirect               TEXT                   NOT NULL,
  grant_types            INT                    NOT NULL DEFAULT 1,
  revoked                BOOLEAN                NOT NULL DEFAULT FALSE,
  user_id                BIGINT,
  created_at             TIMESTAMP WITHOUT TIME ZONE     DEFAULT current_timestamp,
  updated_at             TIMESTAMP WITHOUT TIME ZONE     DEFAULT current_timestamp,
  CONSTRAINT oauth_client_pkey PRIMARY KEY (id),
  CONSTRAINT oauth_client_user_id_foreign FOREIGN KEY (user_id)
  REFERENCES public.user (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.oauth_client OWNER TO soglad;

-- Index: oauth_client_user_id_index

-- DROP INDEX public.oauth_client_user_id_index;

CREATE INDEX oauth_client_user_id_index
  ON public.oauth_client USING BTREE (user_id)
TABLESPACE soglad;

COMMENT ON COLUMN public.oauth_client.grant_types
    IS 'Each binary bit express a boolean value of a type. 16:refresh_token 8:proxy 4:client_credentials 2:password 1:authorization_code';

-- Table: public.oauth_code

-- DROP TABLE public.oauth_code;

-- This is a timeliness entity, would be better store in mem.
CREATE TABLE public.oauth_code
(
  code       CHARACTER VARYING(255) NOT NULL,
  scope      TEXT,
  redirect_uri CHARACTER VARYING(255) NOT NULL,
  revoked    BOOLEAN                NOT NULL DEFAULT FALSE,
  expires_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL,
  user_id    BIGINT                 NOT NULL,
  client_id  BIGINT                 NOT NULL,
  timestamp  TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT oauth_code_pkey PRIMARY KEY (code),
  CONSTRAINT oauth_code_user_id_foreign FOREIGN KEY (user_id)
  REFERENCES public.user (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT oauth_code_client_id_foreign FOREIGN KEY (client_id)
  REFERENCES public.oauth_client (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.oauth_code
  OWNER TO soglad;

-- Index: oauth_code_user_id_index

-- DROP INDEX public.oauth_code_user_id_index;

CREATE INDEX oauth_code_user_id_index
  ON public.oauth_code USING BTREE (user_id)
TABLESPACE soglad;

-- Index: oauth_code_client_id_index

-- DROP INDEX public.oauth_code_client_id_index;

CREATE INDEX oauth_code_client_id_index
  ON public.oauth_code USING BTREE (client_id)
TABLESPACE soglad;

-- This is a timeliness entity, would be better store in mem.
CREATE TABLE public.oauth_token (
  access_token       CHARACTER VARYING(255),
  refresh_token      CHARACTER VARYING(255),
  scope     TEXT,
  revoked    BOOLEAN                     NOT NULL DEFAULT FALSE,
  expires_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL,
  remind_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL,
  user_id    BIGINT,
  client_id  BIGINT                      NOT NULL,
  timestamp TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT oauth_token_access_token_pkey PRIMARY KEY (access_token),
  CONSTRAINT oauth_token_refresh_token_unique UNIQUE (refresh_token),
  CONSTRAINT oauth_token_user_id_foreign FOREIGN KEY (user_id)
  REFERENCES public.user (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT oauth_token_client_id_foreign FOREIGN KEY (client_id)
  REFERENCES public.oauth_client (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.oauth_token OWNER TO soglad;

-- Index: oauth_access_token_user_id_index

-- DROP INDEX public.oauth_access_token_user_id_index;

CREATE INDEX oauth_token_user_id_index
  ON public.oauth_token USING BTREE (user_id)
TABLESPACE soglad;

-- Index: oauth_access_token_client_id_index

-- DROP INDEX public.oauth_access_token_client_id_index;

CREATE INDEX oauth_token_client_id_index
  ON public.oauth_token USING BTREE (client_id)
TABLESPACE soglad;