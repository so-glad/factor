CREATE SEQUENCE pmi.table_task_segment_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

ALTER SEQUENCE pmi.table_task_segment_id_seq OWNER TO soglad;

CREATE TABLE pmi.task_segment
(
  id        BIGINT NOT NULL DEFAULT pmi.generate_id('task_segment' :: CHARACTER VARYING),
  task_id   BIGINT,
  start     DATETIME,
  ` END ` datetime,
  worker_id BIGINT,
  comment   CHARACTER VARYING(255)
    CONSTRAINT task_segment_pkey PRIMARY KEY (id)
) WITH (OIDS = FALSE
) TABLESPACE soglad;

ALTER TABLE pmi.task_segment
  OWNER TO soglad;