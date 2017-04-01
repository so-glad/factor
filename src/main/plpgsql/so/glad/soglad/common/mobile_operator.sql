CREATE SEQUENCE common.table_mobile_operator_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE common.table_mobile_operator_id_seq OWNER TO soglad;

-- Table: common.mobile_operator

-- DROP TABLE common.mobile_operator;

CREATE TABLE common.mobile_operator
(
  id         BIGINT                 NOT NULL DEFAULT nextval('common.table_mobile_operator_id_seq' :: CHARACTER VARYING),
  name       CHARACTER VARYING(255) NOT NULL,
  code       CHARACTER VARYING(255) NOT NULL,
  sign       CHARACTER VARYING(255) NOT NULL,
  enabled    BOOLEAN                NOT NULL DEFAULT TRUE,
  comment    CHARACTER VARYING(255),
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT mobile_operator_pkey PRIMARY KEY (id),
  CONSTRAINT mobile_operator_code_unique UNIQUE (code),
  CONSTRAINT mobile_operator_sign_unique UNIQUE (sign)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE common.mobile_operator OWNER TO soglad;

INSERT INTO common.mobile_operator ( name, code, sign, comment) VALUES
  ('中国移动', '46000', 'CMCC', '中国移动通信集团公司'),
  ('中国联通', '46001', 'CNUN', '中国联合网络通信集团有限公司'),
  ('中国电信', '46003', 'CNCT', '中国电信集团公司');