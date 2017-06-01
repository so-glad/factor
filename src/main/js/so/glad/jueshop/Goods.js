'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import Sequelize from 'sequelize';
import ModelClass from '../ModelClass'

export default class GoodsClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        GoodsClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'Goods';
    }

    get belongsToDefine() {
        return GoodsClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'goods',

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
            serialNumber: {
                type: Sequelize.STRING,
                field: 'serial_number',
                allowNull: false
            },
            slogan: {
                type: Sequelize.STRING,
                field: 'slogan',
                allowNull: false
            },
            imageUrl: {
                type: Sequelize.STRING,
                field: 'image_url'
            },
            price: {
                type: Sequelize.DECIMAL(20, 2),
                field: 'price',
                allowNull: false,
                defaultValue: 999999999999999999.99
            },
            inSale: {
                type: Sequelize.BOOLEAN,
                field: 'in_sale',
                allowNull: false,
                defaultValue: false
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