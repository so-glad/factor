'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from "chai";

import context from "../context";
import OAuthUserClass from '../../../lib/sequelize/common/OAuthUser';

chai.should();

const User = context.module('model.common.User');
OAuthUserClass.addBelongTo(User.delegate, 'user', 'user_id');
const OAuthUser = new OAuthUserClass(context.persistence.common, {schema: 'test'});


describe('OAuthUser model test', () => {
    it('OAuthUser constructor', () => {
        OAuthUser.should.have.property('create');
        OAuthUser.should.have.property('findOne');
        OAuthUser.should.have.property('findOrCreate');
        OAuthUser.should.have.property('findAll');
        OAuthUser.should.have.property('update');
        OAuthUser.should.have.property('destroy');
    });

    it('Create oauth user for emulate gotten user data from github', () => {
        return User.findOrCreate({where: {username: 'palmtale'}, defaults: {password: 'github', alias: 'PalmTale'}})
            .spread(user =>
                OAuthUser.findOrCreate({where: {$or: [{user_id: user.id}, {username: 'palmtale'}]},
                    defaults: {providerUserKey: 'palmtale', username: 'palmtale',
                        clientUserKeys: {someclientId: 'palmtale'}, payload: {foo: 'foo', bar: 'bar'}}})
            ).spread(oauthUser => {
                oauthUser.should.have.property('providerUserKey');
                oauthUser.providerUserKey.should.equal('palmtale');
            });
    });

    it('Retrieve the oauth user of github and update', () => {
        return OAuthUser.findOne({where: {providerUserKey:'palmtale'}})
            .then(oauthUser => {
                oauthUser.username.should.equal('palmtale');
                return oauthUser.update({clientUserKeys: {anotherClientId: 'cool'}});
            }).then(updatedOUser => {
                updatedOUser.clientUserKeys.should.have.property('anotherClientId');
                updatedOUser.clientUserKeys.anotherClientId.should.equal('cool');
            });
    });

    it('Retrieve the oauth user of github and delete', () => {
        return OAuthUser.findOne({where: {providerUserKey:'palmtale'}})
            .then(oauthUser => oauthUser.destroy())
            .then(result => result.length.should.equal(0));
    });
});