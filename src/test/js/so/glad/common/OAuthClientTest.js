'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from 'chai';

import context from '../context';

chai.should();

const User = context.module('model.common.User');
const OAuthClient = context.module('model.common.OAuthClient');

describe('OAuthClient model test', () => {
    it('OAuthClient constructor', () => {
        OAuthClient.should.have.property('create');
        OAuthClient.should.have.property('findOne');
        OAuthClient.should.have.property('findOrCreate');
        OAuthClient.should.have.property('findAll');
        OAuthClient.should.have.property('update');
        OAuthClient.should.have.property('destroy');
    });

    it('Create oauth client for user 1', () => {
        return User.findOrCreate({where: {username: 'palmtale'},
            defaults: {password:'Weibo', alias:'PalmTale'}})
            .spread(user => OAuthClient.create({
                id: 10000001,
                secret: 'testuser',
                name: 'Client Test',
                redirect: 'https://www.glad.so/redirect',
                grantTypes: 10, //in binary 1010.
                user_id: user.id
            }))
            .then(client => {
                client.should.have.property('secret');
                client.secret.should.equal('testuser');
                return client.getUser();
            })
            .then(foundUser => {
                foundUser.username.should.equal('palmtale');
            });
    });

    it('Retrieve an oauth client and update secret', () => {
        OAuthClient.findByPrimary(10000001)
            .then(client => client.update({secret: 'usertest'}))
            .then(updatedClient => {
                updatedClient.secret.should.equal('usertest');
            });
    });

    it('Retrieve an oauth client and delete', () => {
        return OAuthClient.findByPrimary(10000001)
            .then(client => Promise.all([client.destroy(), client.getUser()]))
            .spread((delClientResult,user) => {
                delClientResult.length.should.equal(0);
                return user.destroy();})
            .then(result => result.length.should.equal(0));
    });
});