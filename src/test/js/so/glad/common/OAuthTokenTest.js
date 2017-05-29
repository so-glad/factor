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
const OAuthToken = context.module('model.common.OAuthToken');

describe('OAuthToken model test', () => {
    it('OAuthToken constructor', () => {
        OAuthToken.should.have.property('create');
        OAuthToken.should.have.property('findOne');
        OAuthToken.should.have.property('findOrCreate');
        OAuthToken.should.have.property('findAll');
        OAuthToken.should.have.property('update');
        OAuthToken.should.have.property('destroy');
    });

    it('Create oauth token for user 1 and client 1000001', () => {
        return Promise.all([
            User.findOrCreate({
                where: {username: 'palmtale'},
                defaults: {password: 'fortest', alias: 'Palm Tale'}
            }),
            OAuthClient.findOrCreate({
                where: {id: 1000001},
                defaults: {secret:'TestClientSecret', name:'TestClient', redirect: 'https://test.glad.so/redirect1', grantTypes: 10}
            })
        ]).then(result => {
            const user = result[0][0];
            const client = result[1][0];
            return OAuthToken.create({accessToken: 'accessToken', expiresAt: new Date(), refreshToken: 'refreshToken',
                remindAt: new Date(), scope: '*', user_id: user.id, client_id: client.id});
        }).then(token => {
            token.scope.should.equal('*');
            return Promise.all([token.getUser(), token.getClient()]);
        }).then(result => {
            result[0].username.should.equal('palmtale');
            result[1].name.should.equal('TestClient');
        });
    });

    it('Retrieve an oauth token and update secret', () => {
        return OAuthToken.findOne({where: {accessToken: 'accessToken'}})
            .then(token => {
                token.refreshToken.should.equal('refreshToken');
                return token.update({scope: 'user', refreshToken: 'refreshToken3'})
            }).then(code => {
                code.scope.should.equal('user');
                code.refreshToken.should.equal('refreshToken3');
            })
    });

    it('Retrieve an oauth token and delete', () => {
        return OAuthToken.findOne({where: {accessToken: 'accessToken'}})
            .then(token => Promise.all([token.destroy(), token.getUser(), token.getClient()]))
            .spread((result, user, client) => {
                result.length.should.equal(0);
                return Promise.all([user.destroy(), client.destroy()]);
            })
            .spread((result1,result2) => {
                result1.length.should.equal(0);
                result2.length.should.equal(0);
            });
    });
});