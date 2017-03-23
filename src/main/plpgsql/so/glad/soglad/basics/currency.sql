CREATE SEQUENCE public.table_currency_id_seq
    INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_currency_id_seq OWNER TO soglad;

-- Table: public.currency

-- DROP TABLE public.currency;

CREATE TABLE public.currency
(
  id bigint NOT NULL DEFAULT nextval('public.table_currency_id_seq'::CHARACTER VARYING),
  name character varying(255) NOT NULL,
  code character varying(255) NOT NULL,
  enabled boolean NOT NULL DEFAULT true,
  symbol character varying(255) NOT NULL,
  comment character varying(255) NOT NULL DEFAULT 'currency',
  created_at timestamp(0) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp(0) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT currency_pkey PRIMARY KEY (id),
  CONSTRAINT currency_code_unique UNIQUE (code)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.currency OWNER to soglad;

INSERT INTO public.currency("name", code, symbol) VALUES
  ('dollar','USD','$'),
  ('renminbi','CNY','¥'),
  ('euro','EUR','€'),
  ('pound','GBP','£'),
  ('hongkong','HKD','HK$'),
  ('pataca','MOP','MOP$'),
  ('taiwan','TWD','NT$'),
  ('rouble','SUR','₽'),
  ('yen','JPY','¥'),
  ('won','KRW','₩'),
  ('baht','THB','฿'),
  ('dong','VND','₫')
