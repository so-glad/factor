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
const OAuthCode = context.module('model.common.OAuthCode');

describe('OAuthCode model test', () => {
    it('OAuthCode constructor', () => {
        OAuthCode.should.have.property('create');
        OAuthCode.should.have.property('findOne');
        OAuthCode.should.have.property('findOrCreate');
        OAuthCode.should.have.property('findAll');
        OAuthCode.should.have.property('update');
        OAuthCode.should.have.property('destroy');
    });

    it('Create oauth code for user 1 and client 1000001', () => {
        return Promise.all([
            User.findOrCreate({
                where: {username:'palmtale'},
                defaults: {password: 'fortest', alias: 'Palm Tale'}
            }),
            OAuthClient.findOrCreate({
                where: {id: 1000001},
                defaults: {secret:'TestClientSecret', name:'TestClient', redirect: 'https://test.glad.so/redirect1', grantTypes: 10}
            })
        ]).then(result => {
            const user = result[0][0];
            const client = result[1][0];
            return OAuthCode.create({code: '48329432', scope: 'user', expiresAt: new Date(),redirectUri: 'https://test.glad.so/redirect2', user_id: user.id, client_id: client.id});
        }).then(code => {
            code.scope.should.equal('user');
            return Promise.all([code.getUser(), code.getClient()]);
        }).then(result => {
            result[0].username.should.equal('palmtale');
            result[1].name.should.equal('TestClient');
        });
    });

    it('Retrieve an oauth code and update secret', () => {
        return OAuthCode.findOne({where: {code: '48329432'}})
            .then(code => {
                code.redirectUri.should.equal('https://test.glad.so/redirect2');
                return code.update({scope: '*', redirectUri: 'https://test.glad.so/redirect3'})
            }).then(code => {
                code.scope.should.equal('*');
                code.redirectUri.should.equal('https://test.glad.so/redirect3');
            })
    });

    it('Retrieve an oauth code and delete', () => {
        return OAuthCode.findOne({where: {code: '48329432'}})
            .then(code => Promise.all([code.destroy(), code.getUser(), code.getClient()]))
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