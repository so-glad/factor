'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from "chai";

import context from "../context";


chai.should();
const Region = context.module('model.common.Region');
const Language = context.module('model.common.Language');
const Locale = context.module('model.common.Locale');

describe('Locale model test', () => {
    it('Locale constructor', () => {
        Locale.should.have.property('create');
        Locale.should.have.property('findOne');
        Locale.should.have.property('findOrCreate');
        Locale.should.have.property('findAll');
        Locale.should.have.property('update');
        Locale.should.have.property('destroy');
    });

    it('Find or create Locale zh_CN, region china, language zh', () => {
        return Promise.all([
            Region.findOrCreate({where: {sign:'China'}, defaults: {name:'中国', code:'0086000000', comment: '中华人民共和国'}}),
            Language.findOrCreate({where: {code: 'zh'}, defaults: {name:'Chinese', nativeName:'汉语', comment: '中文'}})
        ]).then(results => {
            const region = results[0][0];
            const language = results[1][0];
            return Locale.create({name:'SimpleChinese', code: 'zh_CN', nativeName:'简体中文', region_id: region.id, language_id: language.id});
        }).then(locale => {
            locale.name.should.equal('SimpleChinese');
            return Promise.all([locale.getRegion(), locale.getLanguage()]);
        }).then(results => {
            const region = results[0];
            const language = results[1];
            region.sign.should.equal('China');
            language.name.should.equal('Chinese');
        });
    });

    it('Retrieve and update locale', () => {
        return Locale.findOne({where: {code: 'zh_CN'}})
            .then(chinese => {
                chinese.should.have.property('name');
                chinese.name.should.equal('SimpleChinese');
                return chinese.update({comment: 'This is Chinese'});
            }).then(updatedChinese => {
                updatedChinese.name.should.equal('SimpleChinese');
                updatedChinese.comment.should.equal('This is Chinese');
            });
    });

    it('Retrieve and delete locale', () => {
        return Locale.findOne({where: {code: 'zh_CN'}})
            .then(locale => Promise.all([locale.destroy(), locale.getRegion(), locale.getLanguage()]))
            .then(result => {
                result[0].length.should.equal(0);
                return Promise.all([result[1].destroy(), result[2].destroy()]);
            }).then(result2 => {
                result2[0].length.should.equal(0);
                result2[1].length.should.equal(0);
            });
    });
});