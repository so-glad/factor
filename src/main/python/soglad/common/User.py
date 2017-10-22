from sqlalchemy import Column, String, Boolean
from ...soglad import UpdatableData


class User(UpdatableData):
    __tablename__ = 'user'

    username = Column(String)
    password = Column(String)
    alias = Column(String)
    avatar = Column(String)
    email = Column(String)
    email_verified = Column(Boolean, nullable=False, default=False)
    mobile = Column(String)
    mobile_verified = Column(Boolean, nullable=False, default=False)
