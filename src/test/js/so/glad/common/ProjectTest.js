'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from 'chai';

import context from '../context';


chai.should();

const Project = context.module('model.common.Project');

describe('Project model test', () => {
    it('Project constructor', () => {
        Project.should.have.property('create');
        Project.should.have.property('findOne');
        Project.should.have.property('findOrCreate');
        Project.should.have.property('findAll');
        Project.should.have.property('update');
        Project.should.have.property('destroy');
    });

    it('Create project', () => {
        return Project.create({name: 'Topup', sign: 'TPU', comment: '', types: 'api'})
            .then(project => {
                project.should.have.property('id');
                project.id.should.not.equal(0);
            });
    });

    it('Retrieve and update project', () => {
        return Project.findOne({where: {sign: 'TPU'}})
            .then(project => {
                project.should.have.property('name');
                project.name.should.equal('Topup');
                project.should.have.property('types');
                project.types.should.equal('api');
                return project.update({name: 'Zeofast'});
            }).then(updatedProject => {
                updatedProject.name.should.equal('Zeofast');
            });
    });

    it('Retrieve and delete project', () => {
        return Project.findOne({where: {sign: 'TPU'}})
            .then(project => project.destroy())
            .then(result => result.length.should.equal(0));
    });
});