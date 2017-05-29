'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from "chai";

import context from "../context";

chai.should();

const OAuthProvider = context.module('model.common.OAuthProvider');

describe('OAuthProvider model test', () => {
    it('OAuthProvider constructor', () => {
        OAuthProvider.should.have.property('create');
        OAuthProvider.should.have.property('findOne');
        OAuthProvider.should.have.property('findOrCreate');
        OAuthProvider.should.have.property('findAll');
        OAuthProvider.should.have.property('update');
        OAuthProvider.should.have.property('destroy');
    });

    it('Create oauth provider after created client/app on github', () => {
        return OAuthProvider.create({
            type: 'github', clientId: '1234567',
            clientSecret: 'client secret',
            name: 'Palmtale', redirectUrl: 'http://test.glad.so/redirect',
            authorizeUrl: 'hhttps://github.com/login/oauth/authorize',
            tokenUrl: 'https://github.com/login/oauth/token',
            userUrl: 'https://api.github.com/user'
        }).then(provider => {
            provider.should.have.property('type');
            provider.type.should.equal('github');
        });
    });

    it('Retrieve the oauth provider of github used on web and update', () => {
        return OAuthProvider.findOne({where: {type: 'github', clientId: '1234567'}})
            .then(provider => {
                provider.clientSecret.should.equal('client secret');
                return provider.update({clientSecret: 'ClientSecret'});
            }).then(updatedProvder => {
                updatedProvder.clientSecret.should.equal('ClientSecret');
            });
    });

    it('Retrieve the oauth provider of github used on web and delete', () => {
        return OAuthProvider.findOne({where: {type: 'github', clientId: '1234567'}})
            .then(provider => provider.destroy())
            .then(result => result.length.should.equal(0));
    });
});