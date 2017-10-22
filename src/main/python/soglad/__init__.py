
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, BigInteger, DateTime, Boolean

engine = None

SerializableData = None

RecordableData = None
AuditableData = None

UpdatableData = None


def config_engine(url):
    engine = create_engine(url)
    Base = declarative_base(bind=engine, name="Soglad")
    SerializableData = type.__init__(Base, (), dict(id=Column(BigInteger, primary_key=True)))
    RecordableData = type.__init__(SerializableData, (), dict(timestamp=Column(DateTime, nullable=False)))
    AuditableData = type.__init__(RecordableData, (), dict(auditor=Column(BigInteger, nullable=False)))
    UpdatableData = type.__init__(SerializableData, (), dict(
        revoked=Column(Boolean, nullable=False, default=False),
        created_at=Column(DateTime, nullable=False),
        updated_at=Column(DateTime, nullable=False)
    ))