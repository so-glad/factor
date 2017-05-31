-- Table: public.user_vine

-- DROP TABLE public.user_vine;

CREATE TABLE public.user_cart
(
    goods    JSON,
    user_id    BIGINT NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT user_cart_pkey PRIMARY KEY (user_id)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.user_cart OWNER to soglad;