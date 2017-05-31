'use strict';

/**
 * @author palmtale
 * @since 2017/5/31.
 */


import Sequelize from 'sequelize';
import ModelClass from '../ModelClass'

export default class ShipmentMethodClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        ShipmentMethodClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'ShipmentMethod';
    }

    get belongsToDefine() {
        return ShipmentMethodClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'shipment_method',

            timestamps: true,

            paranoid: false,

            underscored: true,

            defaultScope: {revoked: false}
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
            price: {
                type: Sequelize.DECIMAL(20,2),
                field: 'price',
                allowNull: false,
                defaultValue: 9999999999.99
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