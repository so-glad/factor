CREATE TABLE public.mobile_region_operator (
  mobile             CHARACTER VARYING(255) NOT NULL,
  region_id          BIGINT                 NOT NULL,
  mobile_operator_id BIGINT                 NOT NULL,
  comment            CHARACTER VARYING(255) NOT NULL DEFAULT '',
  created_at         TIMESTAMP(0) WITHOUT TIME ZONE  DEFAULT current_timestamp,
  updated_at         TIMESTAMP(0) WITHOUT TIME ZONE  DEFAULT current_timestamp,
  CONSTRAINT mobile_region_operator_pkey PRIMARY KEY (mobile),
  CONSTRAINT mobile_region_operator_region_id_foreign FOREIGN KEY (region_id)
  REFERENCES public.region (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT mobile_region_operator_mobile_operator_id_foreign FOREIGN KEY (mobile_operator_id)
  REFERENCES public.mobile_operator (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.mobile_region_operator OWNER TO soglad;

CREATE INDEX mobile_region_operator_region_id_index
  ON public.mobile_region_operator USING BTREE (region_id) TABLESPACE soglad;
CREATE INDEX mobile_region_operator_mobile_operator_id_index
  ON public.mobile_region_operator USING BTREE (mobile_operator_id) TABLESPACE soglad;