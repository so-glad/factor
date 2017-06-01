'use strict';

/**
 * @author palmtale
 * @since 2017/6/1.
 */

import Sequelize from 'sequelize';
import ModelClass from '../ModelClass'

export default class GoodsTagClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        GoodsTagClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'GoodsTag';
    }

    get belongsToDefine() {
        return GoodsTagClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'goods_tag',

            timestamps: true,

            paranoid: false,

            underscored: true,

            defaultScope: {where: {revoked: false}}
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
            type: {
                type: Sequelize.STRING,
                field: 'type',
                allowNull: false,
                defaultValue: 'customer'
            },
            revoked: {
                type: Sequelize.BOOLEAN,
                field: 'revoked',
                allowNull: false,
                defaultValue: false
            }
        };
    }

    constructor(provider, options) {
        super(provider, options);
    }
}