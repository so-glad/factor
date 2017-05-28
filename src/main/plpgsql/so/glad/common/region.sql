CREATE SEQUENCE public.table_region_id_seq
INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;
ALTER SEQUENCE public.table_region_id_seq
OWNER TO soglad;

-- Table: public.region

-- DROP TABLE public.region;

CREATE TABLE public.region
(
  id         BIGINT                      NOT NULL DEFAULT nextval('public.table_region_id_seq' :: CHARACTER VARYING),
  name       CHARACTER VARYING(255)      NOT NULL,
  code       CHARACTER VARYING(255)      NOT NULL,
  sign       CHARACTER VARYING(255)      NOT NULL,
  revoked    BOOLEAN                     NOT NULL DEFAULT FALSE,
  parent_id  BIGINT,
  sort       INTEGER                     NOT NULL DEFAULT 1,
  comment    CHARACTER VARYING(255)      NOT NULL DEFAULT 'region',
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT current_timestamp,
  CONSTRAINT region_pkey PRIMARY KEY (id),
  CONSTRAINT region_code_unique UNIQUE (code),
  CONSTRAINT region_sign_unique UNIQUE (sign),
  CONSTRAINT region_parent_id_foreign FOREIGN KEY (parent_id)
  REFERENCES public.region (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
) WITH (OIDS = FALSE) TABLESPACE soglad;
ALTER TABLE public.region OWNER TO soglad;

CREATE INDEX region_code_index
  ON public.region USING BTREE (code) TABLESPACE soglad;
CREATE INDEX region_sign_index
  ON public.region USING BTREE (sign) TABLESPACE soglad;

INSERT INTO public.region (name, code, sign, parent_id, sort, comment) VALUES ('中国', '0086000000', 'China', null, 1, '中华人民共和国');
INSERT INTO public.region (name, code, sign, parent_id, sort, comment) VALUES
 ('北京', '0086110000', 'BeiJing', (select id from public.region where sign='China'), 1,'中国北京市'),
 ('天津', '0086120000', 'TianJing', (select id from public.region where sign='China'), 2,'中国天津市'),
 ('河北', '0086130000', 'HeBei', (select id from public.region where sign='China'), 3,'中国河北省'),
 ('山西', '0086140000', 'ShanXi', (select id from public.region where sign='China'),4, '中国山西省'),
 ('内蒙', '0086150000', 'NeiMeng', (select id from public.region where sign='China'),5, '中国内蒙古自治区'),
 ('辽宁', '0086210000', 'LiaoNing', (select id from public.region where sign='China'), 6,'中国辽宁省'),
 ('吉林', '0086220000', 'JinLin', (select id from public.region where sign='China'), 7,'中国吉林省'),
 ('黑龙江', '0086230000', 'HeiLongJiang', (select id from public.region where sign='China'),8, '中国黑龙江省'),
 ('上海', '0086310000', 'ShangHai', (select id from public.region where sign='China'), 9,'中国上海市'),
 ('江苏', '0086320000', 'JiangSu', (select id from public.region where sign='China'), 10,'中国江苏省'),
 ('浙江', '0086330000', 'ZheJiang', (select id from public.region where sign='China'),11, '中国浙江省'),
 ('安徽', '0086340000', 'AnHui', (select id from public.region where sign='China'), 12,'中国安徽省'),
 ('福建', '0086350000', 'FuJian', (select id from public.region where sign='China'), 13, '中国福建省'),
 ('江西', '0086360000', 'JiangXi', (select id from public.region where sign='China'),14, '中国江西省'),
 ('山东', '0086370000', 'ShanDong', (select id from public.region where sign='China'),15, '中国山东省'),
 ('河南', '0086410000', 'HeNan', (select id from public.region where sign='China'), 16,'中国河南省'),
 ('湖北', '0086420000', 'HuBei', (select id from public.region where sign='China'), 17,'中国湖北省'),
 ('湖南', '0086430000', 'HuNan', (select id from public.region where sign='China'), 18,'中国湖南省'),
 ('广东', '0086440000', 'GuangDong', (select id from public.region where sign='China'), 19,'中国广东省'),
 ('广西', '0086450000', 'GuangXi', (select id from public.region where sign='China'), 20,'中国广西壮族自治区'),
 ('海南', '0086460000', 'HaiNan', (select id from public.region where sign='China'), 21,'中国海南省'),
 ('重庆', '0086500000', 'ChongQing', (select id from public.region where sign='China'),22, '中国重庆市'),
 ('四川', '0086510000', 'SiChuan', (select id from public.region where sign='China'), 23,'中国四川省'),
 ('贵州', '0086520000', 'GuiZhou', (select id from public.region where sign='China'),24, '中国贵州省'),
 ('云南', '0086530000', 'YuNan', (select id from public.region where sign='China'), 25,'中国云南省'),
 ('西藏', '0086540000', 'XiZhang', (select id from public.region where sign='China'),26, '中国西藏自治区'),
 ('陕西', '0086610000', 'ShanXii', (select id from public.region where sign='China'), 27,'中国陕西省'),
 ('甘肃', '0086620000', 'GanSu', (select id from public.region where sign='China'), 28,'中国甘肃省'),
 ('青海', '0086630000', 'QingHai', (select id from public.region where sign='China'), 29,'中国青海省'),
 ('宁夏', '0086640000', 'NingXia', (select id from public.region where sign='China'),30, '中国宁夏回族自治区'),
 ('新疆', '0086650000', 'XinJiang', (select id from public.region where sign='China'), 31,'中国新疆维吾尔族自治区');
INSERT INTO public.region (name, code, sign, parent_id, sort, comment) VALUES
('东城区', '0086110100', 'DongCheng', (select id from public.region where sign='BeiJing'),1, '中国北京市东城区'),
('西城区', '0086110200', 'XiCheng', (select id from public.region where sign='BeiJing'),2, '中国北京市西城区'),
('崇文区', '0086110300', 'ChongWen', (select id from public.region where sign='BeiJing'),3, '中国北京市崇文区'),
('呼和浩特', '0086150100', 'HuHeHaoTe', (select id from public.region where sign='NeiMeng'), 1,'中国内蒙古自治区呼和浩特市'),
('包头', '0086150200', 'BaoTou', (select id from public.region where sign='NeiMeng'), 2,'中国内蒙古自治区包头市'),
('乌海', '0086150300', 'WuHai', (select id from public.region where sign='NeiMeng'),3, '中国内蒙古自治区乌海市'),
('巴彦淖尔', '0086152800', 'BaYanNaoEr', (select id from public.region where sign='NeiMeng'),11,'中国内蒙古自治区巴彦淖尔市'),
('沈阳', '0086210100', 'ShenYang', (select id from public.region where sign='LiaoNing'), 1,'中国辽宁省沈阳市'),
('大连', '0086210200', 'DaLian', (select id from public.region where sign='LiaoNing'),2, '中国辽宁省大连市'),
('黄浦区', '0086310100', 'HuangPu', (select id from public.region where sign='ShangHai'), 1,'中国上海市黄浦区'),
('卢湾区', '0086310300', 'LuWan', (select id from public.region where sign='ShangHai'),2, '中国上海市卢湾区'),
('南京', '0086320100', 'NanJing', (select id from public.region where sign='JiangSu'),1, '中国江苏省南京市'),
('无锡', '0086320200', 'WuXi', (select id from public.region where sign='JiangSu'), 2,'中国江苏省无锡市'),
('苏州', '0086320500', 'SuZhou', (select id from public.region where sign='JiangSu'), 5,'中国江苏省苏州市');