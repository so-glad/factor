CREATE SEQUENCE public.table_currency_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_currency_id_seq
OWNER TO soglad;

CREATE TABLE public.currency
(
  id         BIGINT                      NOT NULL DEFAULT nextval('public.table_currency_id_seq' :: CHARACTER VARYING),
  name       CHARACTER VARYING(255)      NOT NULL,
  code       CHARACTER VARYING(255)      NOT NULL,
  revoked    BOOLEAN                     NOT NULL DEFAULT FALSE,
  symbol     CHARACTER VARYING(255)      NOT NULL,
  comment    CHARACTER VARYING(255)      NOT NULL DEFAULT 'currency',
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT currency_pkey PRIMARY KEY (id),
  CONSTRAINT currency_code_unique UNIQUE (code)
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.currency OWNER TO soglad;

CREATE INDEX currency_code_index
  ON public.currency USING BTREE (code) TABLESPACE soglad;

INSERT INTO public.currency ("name", code, symbol) VALUES
  ('dollar', 'USD', '$'),
  ('renminbi', 'CNY', '¥'),
  ('euro', 'EUR', '€'),
  ('pound', 'GBP', '£'),
  ('hongkong', 'HKD', 'HK$'),
  ('pataca', 'MOP', 'MOP$'),
  ('taiwan', 'TWD', 'NT$'),
  ('rouble', 'SUR', '₽'),
  ('yen', 'JPY', '¥'),
  ('won', 'KRW', '₩'),
  ('baht', 'THB', '฿'),
  ('dong', 'VND', '₫')
