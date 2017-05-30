'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from "chai";

import context from "../context";

chai.should();

const User = context.module('model.common.User');
const Region = context.module('model.common.Region');
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
        return Promise.all([
            User.findOrCreate({
                where: {username: 'palmtale'},
                defaults: {password: 'Weibo', alias: 'PalmTale'}
            }).spread(user => user),
            Region.findOrCreate({
                where: {sign: 'Chinas'},
                defaults: {name: '中国', code: '1086000000', comment: '中华人民共和国'}
            }).spread(region => region)])
            .then(result => {
                const user = result[0];
                const region = result[1];
                return UserAddress.create({
                    user_id: user.id,
                    region_id: region.id,
                    alias: 'Home',
                    contact: 'Cartoon',
                    content: '7# Rd.Fast',
                    telNumber: '+8617721017277'
                });
            }).then(userAddress => {
                userAddress.should.have.property('id');
                userAddress.id.should.not.equal(0);
            });
    });

    it('Retrieve a user address and update', () => {
        return UserAddress.findOne({where: {alias: 'Home', contact: 'Cartoon'}})
            .then(userAddress => userAddress.update({telNumber: '17723712377', content: '8# Rd.Cool'}))
            .then(updatedAddress => {
                updatedAddress.content.should.equal('8# Rd.Cool');
                updatedAddress.contact.should.equal('Cartoon');
                updatedAddress.alias.should.equal('Home');
                updatedAddress.telNumber.should.equal('17723712377');
            });
    });

    it('Retrieve a user address and delete', () => {
        return UserAddress.findOne({where: {alias: 'Home', contact: 'Cartoon'}})
            .then(userAddress => Promise.all([userAddress.destroy(), userAddress.getUser(), userAddress.getRegion()]))
            .then(result => {
                result[0].length.should.equal(0);
                result[1].should.have.property('username');
                result[2].should.have.property('code');
                return Promise.all([result[1].destroy(), result[2].destroy()]);
            }).then(result => {
                result[0].length.should.equal(0);
                result[1].length.should.equal(0);
            });
    });
});