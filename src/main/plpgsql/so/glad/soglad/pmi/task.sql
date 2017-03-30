CREATE SEQUENCE pmi.table_task_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE pmi.table_task_id_seq OWNER TO soglad;

CREATE TABLE pmi.task
(
  id           BIGINT                 NOT NULL DEFAULT nextval('pmi.table_task_id_seq' :: CHARACTER VARYING),
  name         CHARACTER VARYING(255) NOT NULL,
  code         CHARACTER VARYING(255),
  enabled      BOOLEAN                NOT NULL DEFAULT TRUE,
  description  TEXT,
  project      BIGINT,
  parent       BIGINT,
  dependencies JSON, #tasks id ARRAY 需要哪些任务完成后才能做
  dependents:JSON, #tasks id array哪些任务需要它完成后才能做
  expect_start datetime,
  expect_end   DATETIME,
  expect_range INT,
  actual_start DATETIME,
  actual_end   DATETIME,
  actual_range INT,
  progress     INT,
  completed    BOOLEAN,
  creator      BIGINT,
  assignee     BIGINT,
  reporter     JSON,
  comment      CHARACTER VARYING(255),
  created_at   TIMESTAMP WITHOUT TIME ZONE,
  updated_at   TIMESTAMP WITHOUT TIME ZONE,
  CONSTRAINT task_pkey PRIMARY KEY (id),
  CONSTRAINT task_code_unique UNIQUE (code)
)
WITH (OIDS = FALSE
) TABLESPACE soglad;

ALTER TABLE pmi.task
  OWNER TO soglad;