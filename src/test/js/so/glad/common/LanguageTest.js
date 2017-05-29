'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from 'chai';

import context from '../context';


chai.should();

const Language = context.module('model.common.Language');

describe('Language model test', () => {
    it('Language constructor', () => {
        Language.should.have.property('create');
        Language.should.have.property('findOne');
        Language.should.have.property('findOrCreate');
        Language.should.have.property('findAll');
        Language.should.have.property('update');
        Language.should.have.property('destroy');
    });

    it('Find or create Language zh', () => {
        return Language.findOrCreate({where: {code: 'zh'},
            defaults: {name:'Chinese', code:'zh', nativeName: '汉语',comment: '中文'}})
            .spread(language => {
                language.should.have.property('id');
                language.id.should.not.equal(0);
            });
    });

    it('Retrieve and update language', () => {
        return Language.findOne({where: {code: 'zh'}})
            .then(chinese => {
                chinese.should.have.property('name');
                chinese.name.should.equal('Chinese');
                return chinese.update({comment: 'This is Chinese'});
            }).then(updatedChinese => {
                updatedChinese.name.should.equal('Chinese');
            });
    });

    it('Retrieve and delete language', () => {
        return Language.findOne({where: {code: 'zh'}})
            .then(language => language.destroy())
            .then(result => result.length.should.equal(0));
    });
});