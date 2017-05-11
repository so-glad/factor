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

ALTER TABLE public.oauth_client
    ALTER COLUMN grant_types TYPE integer ;
COMMENT ON COLUMN public.oauth_client.grant_types
    IS 'Each binary bit express a boolean value of a type. 16:refresh_token 8:implicit 4:client_credentials 2:password 1:authorization_code';
-- Table: public.oauth_auth_code

-- DROP TABLE public.oauth_auth_code;

-- This is a timeliness entity, would be better store in mem.
CREATE TABLE public.oauth_code
(
  id         CHARACTER VARYING(100) NOT NULL,
  scopes     TEXT,
  revoked    BOOLEAN                NOT NULL DEFAULT FALSE,
  expires_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL,
  user_id    BIGINT                 NOT NULL,
  client_id  BIGINT                 NOT NULL,
  timestamp TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT oauth_code_pkey PRIMARY KEY (id),
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
CREATE TABLE public.oauth_access_token (
  id         CHARACTER VARYING(100)      NOT NULL,
  name       CHARACTER VARYING(255),
  scopes     TEXT,
  revoked    BOOLEAN                     NOT NULL DEFAULT FALSE,
  expires_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL,
  user_id    BIGINT,
  client_id  BIGINT                      NOT NULL,
  timestamp TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT oauth_access_token_pkey PRIMARY KEY (id),
  CONSTRAINT oauth_access_token_user_id_foreign FOREIGN KEY (user_id)
  REFERENCES public.user (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT oauth_access_token_client_id_foreign FOREIGN KEY (client_id)
  REFERENCES public.oauth_client (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.oauth_access_token OWNER TO soglad;

-- Index: oauth_access_token_user_id_index

-- DROP INDEX public.oauth_access_token_user_id_index;

CREATE INDEX oauth_access_token_user_id_index
  ON public.oauth_access_token USING BTREE (user_id)
TABLESPACE soglad;

-- Index: oauth_access_token_client_id_index

-- DROP INDEX public.oauth_access_token_client_id_index;

CREATE INDEX oauth_access_token_client_id_index
  ON public.oauth_access_token USING BTREE (client_id)
TABLESPACE soglad;

-- Table: public.oauth_refresh_token

-- DROP TABLE public.oauth_refresh_token;

-- This is a timeliness entity, would be better store in mem.

CREATE TABLE public.oauth_refresh_token
(
  id              CHARACTER VARYING(100) NOT NULL,
  access_token_id CHARACTER VARYING(100) NOT NULL,
  revoked         BOOLEAN                NOT NULL DEFAULT FALSE,
  expires_at      TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL,
  timestamp TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT oauth_refresh_token_pkey PRIMARY KEY (id),
  CONSTRAINT oauth_refresh_token_access_token_id_foreign FOREIGN KEY (access_token_id)
  REFERENCES public.oauth_access_token (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.oauth_refresh_token
  OWNER TO soglad;

-- Index: oauth_refresh_token_access_token_id_index

-- DROP INDEX public.oauth_refresh_token_access_token_id_index;

CREATE INDEX oauth_refresh_token_access_token_id_index
  ON public.oauth_refresh_token USING BTREE (access_token_id)
TABLESPACE soglad;

CREATE TABLE public.oauth_provider
(
    type          CHARACTER VARYING(255) NOT NULL,
    client_id     CHARACTER VARYING(255) NOT NULL,
    client_secret CHARACTER VARYING(255) NOT NULL,
    revoked       BOOLEAN                NOT NULL DEFAULT FALSE,
    name          CHARACTER VARYING(255),
    redirect_url  CHARACTER VARYING(255),
    authorize_url CHARACTER VARYING(255) NOT NULL,
    token_url     CHARACTER VARYING(255) NOT NULL,
    created_at    TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    updated_at    TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    CONSTRAINT oauth_provider_type_client_id_unique UNIQUE (type, client_id) USING INDEX TABLESPACE soglad
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE public.oauth_provider OWNER to soglad;
COMMENT ON TABLE public.oauth_provider
    IS 'Config, Expressed which provider we connected, via their clientId, client secrete';
