-- Table: public.user_vine

-- DROP TABLE public.user_vine;

CREATE TABLE public.user_vine
(
    name       CHARACTER VARYING(255) NOT NULL,
    type       CHARACTER VARYING(255) NOT NULL DEFAULT '', 
    for_what   CHARACTER VARYING(255),
    for_id     CHARACTER VARYING(255),
    ticket     CHARACTER VARYING(255),
    url        CHARACTER VARYING(255),
    revoked    BOOLEAN                     NOT NULL DEFAULT FALSE,
    user_id    BIGINT NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    CONSTRAINT user_vine_for_what_for_id_unique UNIQUE KEY (for_what,for_id)
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.user_vine OWNER to soglad;

CREATE INDEX user_vine_user_id_index
  ON public.user_vine USING BTREE (user_id) TABLESPACE soglad;

CREATE INDEX user_vine_ticket_index
  ON public.user_vine USING BTREE (ticket) TABLESPACE soglad;


CREATE TABLE public.vine_user
(
    name       CHARACTER VARYING(255) NOT NULL,
    for_what   CHARACTER VARYING(255),
    for_id     CHARACTER VARYING(255),
    ticket     CHARACTER VARYING(255),
    url        CHARACTER VARYING(255),
    plant_user_id     BIGINT NOT NULL,
    follow_user_id    BIGINT NOT NULL,
    "timestamp" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.vine_user OWNER to soglad;

CREATE INDEX vine_user_follow_user_id_index
  ON public.vine_user USING BTREE (follow_user_id) TABLESPACE soglad;

CREATE INDEX vine_user_plant_user_id_index
  ON public.vine_user USING BTREE (plant_user_id) TABLESPACE soglad;
