'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import chai from 'chai';

import context from '../context';


chai.should();

const Region = context.module('model.common.Region');

describe('Region model test', () => {
    it('Region constructor', () => {
        Region.should.have.property('create');
        Region.should.have.property('findOne');
        Region.should.have.property('findOrCreate');
        Region.should.have.property('findAll');
        Region.should.have.property('update');
        Region.should.have.property('destroy');
    });

    it('Find or create region China', () => {
        return Region.findOrCreate({where: {sign: 'China'},
            defaults: {name:'中国', code:'0086000000', sign:'China', comment: '中华人民共和国'}})
            .spread(region => {
                region.should.have.property('id');
                region.id.should.not.equal(0);
            });
    });

    it('Create region under parent region', () => {
        return Region.findOne({where: {sign:'China'}})
            .then(china => {
                return Region.create({name:'上海', code: '0086310000', sign:'Shanghai', sort: 9, parent_id: china.id, comment:'中国上海市'});
            }).then(shanghai => {
                return shanghai.getParent();
            }).then(region => {
                region.sign.should.equal('China');
            });
    });

    it('Retrieve and update region', () => {
        return Region.findOne({where: {sign: 'Shanghai'}})
            .then(shanghai => {
                shanghai.should.have.property('name');
                shanghai.name.should.equal('上海');
                return shanghai.update({name: '北京', code: '0086110000', sign:'Beijing', sort: 1, comment: '中国北京市'});
            }).then(beijing => {
                beijing.name.should.equal('北京');
            });
    });

    it('Retrieve and delete role', () => {
        return Region.findOne({where: {sign: 'Beijing'}})
            .then(region => region.destroy())
            .then(result => result.length.should.equal(0));
    });
});