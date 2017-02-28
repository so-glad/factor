-- SCHEMA: pmi  project management interface

-- DROP SCHEMA pmi ;

CREATE SCHEMA pmi AUTHORIZATION soglad;

-- FUNCTION: pmi.generate_id(character varying)

-- DROP FUNCTION pmi.generate_id(character varying);

CREATE OR REPLACE FUNCTION pmi.generate_id(tab_name character varying)
    RETURNS bigint
    LANGUAGE 'plpgsql'
    COST 100.0
    VOLATILE NOT LEAKPROOF 
AS $function$

DECLARE
  our_epoch bigint := 1482046573767;
  seq_id bigint;
  now_millis bigint;
  shard_id int := 1;
  result bigint;
BEGIN
  SELECT nextval('pmi.table_' || tab_name || '_id_seq') % 1024 INTO seq_id;
  SELECT FLOOR(EXTRACT(EPOCH FROM clock_timestamp()) * 1000) INTO now_millis;
  result := (now_millis - our_epoch) << 23;
  result := result | (shard_id << 10);
  result := result | (seq_id);
  RETURN result;
END;

$function$;

ALTER FUNCTION pmi.generate_id(character varying) OWNER TO soglad;

CREATE SEQUENCE pmi.table_project_id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE pmi.table_project_id_seq OWNER TO soglad;

CREATE TABLE pmi.project
(
    id bigint NOT NULL DEFAULT pmi.generate_id('project'::character varying),
    name character varying(255) NOT NULL,
    code character varying(255),
    enabled boolean NOT NULL DEFAULT true,
    description text,
    creator bigint,
    sponsor  bigint,
    manager  bigint,
    stakeholders json,
    plan_start datetime,
    plan_end datetime,
    real_start datetime,
    real_end datetime,
    comment character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT project_pkey PRIMARY KEY (id),
    CONSTRAINT project_code_unique UNIQUE (code)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE pmi.project OWNER to soglad;

CREATE SEQUENCE pmi.table_task_id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE pmi.table_task_id_seq OWNER TO soglad;

CREATE TABLE pmi.task
(
    id bigint NOT NULL DEFAULT pmi.generate_id('task'::character varying),
    name character varying(255) NOT NULL,
    code character varying(255),
    enabled boolean NOT NULL DEFAULT true,
    description text,
    project bigint,
    parent bigint,
    dependencies json,#tasks id array 需要哪些任务完成后才能做
    dependents: json, #tasks id array哪些任务需要它完成后才能做
    expect_start datetime,
    expect_end datetime,
    expect_range int,
    actual_start datetime,
    actual_end datetime,
    actual_range int,
    progress int,
    completed boolean,
    creator bigint,
    assignee bigint,
    reporter json, 
    comment character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT task_pkey PRIMARY KEY (id),
    CONSTRAINT task_code_unique UNIQUE (code)
)
WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE pmi.task OWNER to soglad;


CREATE SEQUENCE pmi.table_task_segment_id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE pmi.table_task_segment_id_seq OWNER TO soglad;

CREATE TABLE pmi.task_segment
(
    id bigint NOT NULL DEFAULT pmi.generate_id('task_segment'::character varying),
    task_id bigint,
    start datetime,
    `end` datetime,
    worker_id bigint,
    comment character varying(255)
    CONSTRAINT task_segment_pkey PRIMARY KEY (id)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE pmi.task_segment OWNER to soglad;


CREATE SEQUENCE pmi.table_task_comment_id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE pmi.table_task_comment_id_seq OWNER TO soglad;

CREATE TABLE pmi.task_comment
(
    id bigint NOT NULL DEFAULT pmi.generate_id('task_comment'::character varying),
    task_id bigint,
    enabled boolean NOT NULL DEFAULT true,
    commenter_id bigint,
    comment character varying(255),
    `timestamp` timestamp without time zone,
    CONSTRAINT task_segment_pkey PRIMARY KEY (id)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE pmi.task_action_log OWNER to soglad;

CREATE SEQUENCE pmi.table_task_action_log_id_seq
    INCREMENT 1 START 1 MINVALUE 1
    MAXVALUE 999999999999999999 CACHE 1;

ALTER SEQUENCE pmi.table_task_action_log_id_seq OWNER TO soglad;

CREATE TABLE pmi.task_action_log
(
    id bigint NOT NULL DEFAULT pmi.generate_id('task_action_log'::character varying),
    task_id bigint,
    actor_id bigint,
    comment character varying(255)
    `timestamp` timestamp without time zone,
    CONSTRAINT task_segment_pkey PRIMARY KEY (id)
) WITH (OIDS = FALSE) TABLESPACE soglad;

ALTER TABLE pmi.task_action_log OWNER to soglad;


