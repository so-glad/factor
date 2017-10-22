
from sqlalchemy import Column, String
from ...soglad import UpdatableData


class Currency(UpdatableData):
    __tablename__ = 'currency'

    name = Column(String)
    code = Column(String)
    symbol = Column(String)
    comment = Column(String)

    def __repr__(self):
        return "<Currency(name='%s', fullname='%s', password='%s')>" % \
               (self.name, self.code, self.symbol)
