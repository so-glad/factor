CREATE SEQUENCE pmi.table_project_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE pmi.table_project_id_seq OWNER TO soglad;

CREATE TABLE pmi.project
(
  id           BIGINT                 NOT NULL DEFAULT nextval('pmi.table_project_id_seq' :: CHARACTER VARYING),
  name         CHARACTER VARYING(255) NOT NULL,
  code         CHARACTER VARYING(255) NOT NULL,
  enabled      BOOLEAN                NOT NULL DEFAULT TRUE,
  description  TEXT,
  creator      BIGINT,
  sponsor      BIGINT,
  manager      BIGINT,
  stakeholders JSON,
  plan_start   DATETIME,
  plan_end     DATETIME,
  real_start   DATETIME,
  real_end     DATETIME,
  comment      CHARACTER VARYING(255),
  created_at   TIMESTAMP WITHOUT TIME ZONE,
  updated_at   TIMESTAMP WITHOUT TIME ZONE,
  CONSTRAINT project_pkey PRIMARY KEY (id),
  CONSTRAINT project_code_unique UNIQUE (code)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE pmi.project OWNER TO soglad;
