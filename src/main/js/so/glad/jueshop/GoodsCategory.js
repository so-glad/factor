'use strict';

/**
 * @author palmtale
 * @since 2017/5/30.
 */


import Sequelize from 'sequelize';
import ModelClass from '../ModelClass'

export default class GoodsCategoryClass extends ModelClass {

    get name() {
        return 'GoodsCategory';
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'goods_category',

            timestamps: true,

            paranoid: false,

            underscored: true,

            defaultScope: {order: ['sort']},

        };
    }

    get fieldsDefine() {
        return {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: false,
                defaultValue: Sequelize.DEFAULT,
                field: 'id'
            },
            name: {
                type: Sequelize.STRING,
                field: 'name',
                allowNull: false
            },
            sort: {
                type: Sequelize.INTEGER,
                field: 'sort',
                allowNull: false,
                defaultValue: 1
            },
            level: {
                type: Sequelize.INTEGER,
                field: 'level',
                allowNull: false,
                defaultValue: 1
            },
            comment: {
                type: Sequelize.STRING,
                field: 'comment'
            }
        };
    }

    constructor(provider, options) {
         super(provider, options);
    }
}
