CREATE SEQUENCE pmi.table_task_comment_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

ALTER SEQUENCE pmi.table_task_comment_id_seq OWNER TO soglad;

CREATE TABLE pmi.task_comment
(
  id           BIGINT  NOT NULL DEFAULT nextval('pmi.table_task_comment_id_seq' :: CHARACTER VARYING),
  task_id      BIGINT,
  enabled      BOOLEAN NOT NULL DEFAULT TRUE,
  commenter_id BIGINT,
  comment      CHARACTER VARYING(255),
  ` TIMESTAMP ` TIMESTAMP WITHOUT TIME ZONE,
  CONSTRAINT task_segment_pkey PRIMARY KEY (id)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE pmi.task_comment OWNER TO soglad;