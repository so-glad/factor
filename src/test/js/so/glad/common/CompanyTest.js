'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from 'chai';

import context from '../context';


chai.should();

const Currency = context.module('model.common.Currency');
const Company = context.module('model.common.Company');

describe('Company model test', () => {
    it('Company constructor', () => {
        Company.should.have.property('create');
        Company.should.have.property('findOne');
        Company.should.have.property('findOrCreate');
        Company.should.have.property('findAll');
        Company.should.have.property('update');
        Company.should.have.property('destroy');
    });

    it('Create company for currency RMB', () => {
        return Currency.findOrCreate({where: {code: 'CNY'}})
            .spread(rmb => {
                return Company.create({identity: '930davc4fda46f1da', name:'臻快网络科技（上海）有限公司', alias: '臻快网络',
                    capital: 10000000.00, foundDate: new Date(),
                    currency_id: rmb.id})
            }).then(company => {
                company.should.have.property('id');
                company.id.should.not.equal(0);
            });
    });

    it('Retrieve and update company', () => {
        return Company.findOne({where: {identity: '930davc4fda46f1da'}})
            .then(company => {
                company.should.have.property('name');
                company.name.should.equal('臻快网络科技（上海）有限公司');
                company.should.have.property('alias');
                company.alias.should.equal('臻快网络');
                return company.update({name: 'ZeoFast'});
            }).then(updatedCom => {
                updatedCom.name.should.equal('ZeoFast');
            });
    });

    it('Retrieve and delete company', () => {
        return Company.findOne({where: {identity: '930davc4fda46f1da'}})
            .then(company => Promise.all([company.destroy(), company.getCurrency()]))
            .spread((result, currency) => {
                result.length.should.equal(0);
                return currency.destroy();
            });
    });
});