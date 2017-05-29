'use strict';

/**
 * @author palmtale
 * @since 2017/5/3.
 */


import chai from 'chai';

import RoleClass from '../../../../lib/so/glad/common//Role';
import UserClass from '../../../../lib/so/glad/common//User';
import context from '../context';

chai.should();

const Role = context.module('model.common.Role');
const User = context.module('model.common.User');

describe('User model test', () => {
    it('User constructor', () => {
        User.should.have.property('create');
        User.should.have.property('findOne');
    });

    it('Create User in role member', () => {
        return Role.findOne({where: {code: 'MBR'}})
            .then(role => User.create({
                role_id: role.id,
                username: 'testuser',
                password: 'fakepassword',
                email: 'abcd@efg.hic',
                mobile: '18809880988'
            }))
            .then(user => {
                user.should.have.property('id');
                user.id.should.not.equal(0);
                return user.getRole();
            })
            .then(role => {
                role.code.should.equal('MBR');
            });
    });

    it('Retrieve a user and update role to ADM', () => {
        return Promise.all([
            Role.findOne({where: {code: 'ADM'}}),
            User.findOne({where: {username: 'testuser'}})
        ])
            .then(arr => {
                const role = arr[0];
                const user = arr[1];
                return user.update({role_id: role.id});
            })
            .then(user => user.getRole())
            .then(role => role.code.should.equal('ADM'));
    });

    it('Retrieve a user and delete', () => {
        return User.findOne({where: {username: 'testuser'}})
            .then(user => user.destroy())
            .then(delResult => delResult.length.should.equal(0));
    });
});