'use strict';

/**
 * @author palmtale
 * @since 2017/5/3.
 */

import chai from 'chai';

import context from '../context';


chai.should();

const Role = context.module('model.common.Role');

describe('Role model test', () => {
    it('Role constructor', () => {
        Role.should.have.property('create');
        Role.should.have.property('findOne');
    });

    it('Create role', () => {
        return Role.create({name: 'Some Role', code: 'SMR'})
            .then(role => {
                role.should.have.property('id');
                role.id.should.not.equal(0);
            });
    });

    it('Retrieve and update role', () => {
        return Role.findOne({where: {code: 'SMR'}})
            .then(role => {
                role.should.have.property('name');
                role.name.should.equal('Some Role');
                return role.update({name: 'Updated Role'});
            }).then(role => {
                role.name.should.equal('Updated Role');
            });
    });

    it('Retrieve and delete role', () => {
        return Role.findOne({where: {code: 'SMR'}})
            .then(role => role.destroy())
            .then(result => result.length.should.equal(0));
    });
});