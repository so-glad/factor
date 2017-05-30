'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from "chai";

import context from "../context";
import OAuthAccessClass from '../../lib/common/OAuthAccess';

chai.should();

const User = context.module('model.common.User');
const OAuthProvider = context.module('model.common.OAuthProvider');

OAuthAccessClass.addBelongTo(User.delegate, 'user', 'user_id');
OAuthAccessClass.addBelongTo(OAuthProvider.delegate, 'providerClient', 'client_id');
const OAuthAccess = new OAuthAccessClass(context.persistence.common, {schema: 'test'});

describe('OAuthAccess model test', () => {
    it('OAuthAccess constructor', () => {
        OAuthAccess.should.have.property('create');
        OAuthAccess.should.have.property('findOne');
        OAuthAccess.should.have.property('findOrCreate');
        OAuthAccess.should.have.property('findAll');
        OAuthAccess.should.have.property('update');
        OAuthAccess.should.have.property('destroy');
    });

    it('Create oauth access on github', () => {
        return Promise.all([
            User.findOrCreate({where: {username: 'palmtale'}, defaults: {password:'Weibo', alias:'PalmTale'}}),
            OAuthProvider.findOrCreate({where: {type:'github', clientId: '1234567'}, defaults: {type: 'github',
                clientId: '1234567', clientSecret: 'client secret',
                name: 'Palmtale', redirectUrl: 'http://test.glad.so/redirect',
                authorizeUrl: 'hhttps://github.com/login/oauth/authorize',
                tokenUrl: 'https://github.com/login/oauth/token',
                userUrl: 'https://api.github.com/user'}})
        ]).then(results => {
            const user = results[0][0];
            const provider = results[1][0];
            return OAuthAccess.create({
                type:'github', action: 'login', scope:'user', state: 'testState',
                accessToken: 'githubAccessToken', refreshToken: 'githubRefreshToken', accessTime: 3900,
                refreshTime: 3900, userKey: 'col', user_id: user.id, client_id: provider.clientId
            });
        }).then(access => {
            access.type.should.equal('github');
            access.accessToken.should.equal('githubAccessToken');
            return Promise.all([access.getUser(), access.getProviderClient()]);
        }).then(results => {
            const user = results[0];
            // const provider = results[1];
            user.username.should.equal('palmtale');
            // provider.client_id.should.equal('1234567');
        });
    });

    it('Retrieve the oauth provider of github used on web and delete', () => {
        return OAuthAccess.findOne({where: {type:'github', action: 'login', scope:'user', state: 'testState',}})
            .then(access => Promise.all([access.destroy(), OAuthProvider.findOne({where: {type:'github', clientId:'1234567'}}).then(provider=> provider.destroy())]))
            .then(result => result[0].length.should.equal(0) && result[1].length.should.equal(0));
    });
});