CREATE SEQUENCE basics.table_user_id_seq
    INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE basics.table_user_id_seq OWNER TO soglad;

CREATE TABLE basics.user
(
    id bigint NOT NULL DEFAULT nextval('member'::character varying),
    username character varying(255) NOT NULL,
    password character varying(255),
    salt character varying(255),
    enabled boolean NOT NULL DEFAULT true,
    status character varying(255),
    alias character varying(255),
    avatar character varying(255),
    gender character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified boolean NOT NULL DEFAULT false,
    mobile character varying(255),
    mobile_verified boolean NOT NULL DEFAULT false,
    remember_token character varying(255) DEFAULT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT user_pkey PRIMARY KEY (id),
    CONSTRAINT user_email_unique UNIQUE (email),
    CONSTRAINT user_mobile_unique UNIQUE (mobile),
    CONSTRAINT user_username_unique UNIQUE (username)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE basics.member OWNER to soglad;

CREATE SEQUENCE basics.table_user_group_id_seq
    INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE basics.table_user_group_id_seq OWNER TO soglad;

CREATE TABLE basics.user_group
(
    id bigint NOT NULL DEFAULT nextval("basics.table_user_group_id_seq"),
    name character varying(255),
    code character varying(255),
    enabled boolean NOT NULL DEFAULT true,
    parent_id bigint,
    comment character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT user_group_pkey PRIMARY KEY (id),
    CONSTRAINT user_group_code_unique UNIQUE (code),
    CONSTRAINT user_group_parent_id_foreign FOREIGN KEY (parent_id)
        REFERENCES basics.user_group (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE basics.user_group OWNER to soglad;


CREATE SEQUENCE basics.table_role_id_seq
    INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE basics.table_role_id_seq OWNER TO soglad;

CREATE TABLE basics.role
(
    id bigint NOT NULL DEFAULT nextval('basics.table_role_id_seq'),
    name character varying(255) NOT NULL,
    code character varying(255),
    enabled boolean NOT NULL DEFAULT true,
    role bigint,
    comment character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT role_pkey PRIMARY KEY (id),
    CONSTRAINT role_code_unique UNIQUE (code),
    CONSTRAINT parent_role FOREIGN KEY (role)
    REFERENCES basics.role (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE basics.role OWNER to soglad;
