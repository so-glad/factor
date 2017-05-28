CREATE SEQUENCE public.table_project_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_project_id_seq
OWNER TO soglad;


-- Table: public.project

-- DROP TABLE public.project;

CREATE TABLE public.project
(
  id         BIGINT                      NOT NULL DEFAULT nextval('public.table_project_id_seq' :: CHARACTER VARYING),
  name       CHARACTER VARYING(255)      NOT NULL,
  sign       CHARACTER VARYING(255)      NOT NULL,
  types      CHARACTER VARYING(255)[]    NOT NULL DEFAULT {'web'},
  comment    CHARACTER VARYING(255),
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.project OWNER TO soglad;