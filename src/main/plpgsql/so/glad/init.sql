CREATE USER soglad WITH
	LOGIN
	NOSUPERUSER
	NOCREATEDB
	NOCREATEROLE
	INHERIT
	REPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'soglad';

CREATE TABLESPACE soglad
  OWNER soglad
  LOCATION '/mnt/lib/postgres/tablespaces/soglad';

ALTER TABLESPACE soglad
  OWNER TO soglad;

CREATE DATABASE common
    WITH 
    OWNER = soglad
    ENCODING = 'UTF8'
    TABLESPACE = soglad
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE common IS 'The common database';

CREATE DATABASE pmi
    WITH 
    OWNER = soglad
    ENCODING = 'UTF8'
    TABLESPACE = soglad
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE common IS 'The pmi database';


CREATE DATABASE wechat
    WITH 
    OWNER = soglad
    ENCODING = 'UTF8'
    TABLESPACE = soglad
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE common IS 'The wechat database';