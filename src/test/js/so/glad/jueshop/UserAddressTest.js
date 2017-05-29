'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from 'chai';

import context from '../context';

chai.should();

const User = context.module('model.common.User');
const UserAddress = context.module('model.jueshop.UserAddress');

describe('UserAddress model test', () => {
    it('UserAddress constructor', () => {
        UserAddress.should.have.property('create');
        UserAddress.should.have.property('findOne');
        UserAddress.should.have.property('findOrCreate');
        UserAddress.should.have.property('findAll');
        UserAddress.should.have.property('update');
        UserAddress.should.have.property('destroy');
    });

    it('Create User address for user 1', () => {
        throw new Error('Not implement');
    });

    it('Retrieve a user address and update', () => {
        throw new Error('Not implement');
    });

    it('Retrieve a user address and delete', () => {
        throw new Error('Not implement');
    });
});