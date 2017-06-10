CREATE SEQUENCE public.table_user_address_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_user_address_id_seq
OWNER TO soglad;

-- Table: public.user_address

-- DROP TABLE public.user_address;

CREATE TABLE public.user_address
(
    id         BIGINT                      NOT NULL DEFAULT nextval('public.table_user_address_id_seq' :: CHARACTER VARYING),
    alias      CHARACTER VARYING(255),
    content    CHARACTER VARYING(255) NOT NULL,
    zip_code   CHARACTER VARYING(255),
    contact    CHARACTER VARYING(255) NOT NULL,
    tel_number CHARACTER VARYING(255) NOT NULL,
    sort       INTEGER NOT NULL DEFAULT 1,
    revoked    BOOLEAN                     NOT NULL DEFAULT FALSE,
    user_id    BIGINT NOT NULL,
    region_id  BIGINT ,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
    CONSTRAINT user_address_pkey PRIMARY KEY (id)
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.user_address OWNER to soglad;

CREATE INDEX user_address_zip_code_index
  ON public.user_address USING BTREE (zip_code) TABLESPACE soglad;
CREATE INDEX user_address_tel_number_index
  ON public.user_address USING BTREE (tel_number) TABLESPACE soglad;
CREATE INDEX user_address_contact_index
  ON public.user_address USING BTREE (contact) TABLESPACE soglad;
CREATE INDEX user_address_user_id_index
  ON public.user_address USING BTREE (user_id) TABLESPACE soglad;
CREATE INDEX user_address_region_id_index
  ON public.user_address USING BTREE (region_id) TABLESPACE soglad;