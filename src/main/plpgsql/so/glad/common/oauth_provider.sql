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
    CONSTRAINT oauth_provider_pkey PRIMARY KEY (type, client_id)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE public.oauth_provider OWNER to soglad;
COMMENT ON TABLE public.oauth_provider
    IS 'Config, Expressed which provider we connected, via their clientId, client secrete';

-- It's not required to create the table oauth_provider_user but its the structure to 
-- dynamicly create table oauth_[provider_type]_[provider_client_id];
CREATE TABLE public.oauth_provider_user 
(
    type              CHARACTER VARYING(255) NOT NULL,
    client_id         CHARACTER VARYING(255) NOT NULL,
    client_user_key   CHARACTER VARYING(255),
    holder_user_key   CHARACTER VARYING(255),
    provider_user_key CHARACTER VARYING(255),
    user_id      BIGINT,
    revoked       BOOLEAN                NOT NULL DEFAULT FALSE,
    access_token CHARACTER VARYING(255),
    access_time INT,
    refresh_token CHARACTER VARYING(255),
    refresh_time INT,
    scope CHARACTER VARYING(255),
    created_at             TIMESTAMP WITHOUT TIME ZONE     DEFAULT current_timestamp,
    updated_at             TIMESTAMP WITHOUT TIME ZONE     DEFAULT current_timestamp, 
    CONSTRAINT oauth_provider_user_type_foreign FOREIGN KEY (type)
    REFERENCES public.oauth_provider (type) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE,
    CONSTRAINT oauth_provider_user_client_id_foreign FOREIGN KEY (client_id)
    REFERENCES public.oauth_provider (client_id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE,
    CONSTRAINT oauth_provider_user_user_id_foreign FOREIGN KEY (user_id)
    REFERENCES public.user (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
)WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.oauth_client OWNER TO soglad;

CREATE INDEX oauth_provider_user_type_client_id_index
  ON public.oauth_provider_user USING BTREE (type, user_id)
TABLESPACE soglad;

CREATE INDEX oauth_provider_user_user_id_index
  ON public.oauth_provider_user USING BTREE (user_id)
TABLESPACE soglad;