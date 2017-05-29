'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from 'chai';

import context from '../context';

chai.should();

const UserAgent = context.module('model.common.UserAgent');

describe('UserAgent model test', () => {
    it('UserAgent constructor', () => {
        UserAgent.should.have.property('create');
        UserAgent.should.have.property('findOne');
        UserAgent.should.have.property('findOrCreate');
        UserAgent.should.have.property('findAll');
        UserAgent.should.have.property('update');
        UserAgent.should.have.property('destroy');
    });

    it('Create user agent', () => {
        return UserAgent.create({alias: 'iPhone6Plus', content: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'})
            .then(userAgent => {
                userAgent.should.have.property('id');
                userAgent.id.should.not.equal(0);
            });
    });

    it('Retrieve and delete user agent', () => {
        return UserAgent.findOne({where: {content: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'}})
            .then(userAgent => userAgent.destroy())
            .then(result => result.length.should.equal(0));
    });
});