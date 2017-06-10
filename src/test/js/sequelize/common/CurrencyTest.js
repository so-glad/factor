'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from 'chai';

import context from '../context';


chai.should();

const Currency = context.module('model.common.Currency');

describe('Currency model test', () => {
    it('Currency constructor', () => {
        Currency.should.have.property('create');
        Currency.should.have.property('findOne');
        Currency.should.have.property('findOrCreate');
        Currency.should.have.property('findAll');
        Currency.should.have.property('update');
        Currency.should.have.property('destroy');
    });

    it('Create currency', () => {
        return Currency.create({name: 'RenMingBi', code: 'CNY_', symbol: '¥'})
            .then(currency => {
                currency.should.have.property('id');
                currency.id.should.not.equal(0);
            });
    });

    it('Retrieve and update currency', () => {
        return Currency.findOne({where: {code: 'CNY_'}})
            .then(currency => {
                currency.should.have.property('name');
                currency.name.should.equal('RenMingBi');
                currency.should.have.property('symbol');
                currency.symbol.should.equal('¥');
                return currency.update({name: 'Renmingbiya'});
            }).then(updatedRMB => {
                updatedRMB.name.should.equal('Renmingbiya');
            });
    });

    it('Retrieve and delete currency', () => {
        return Currency.findOne({where: {code: 'CNY_'}})
            .then(currency => currency.destroy())
            .then(result => result.length.should.equal(0));
    });
});