'use strict';

/**
 * @author palmtale
 * @since 2017/5/31.
 */


import Sequelize from 'sequelize';
import ModelClass from '../ModelClass'

export default class PaymentMethodClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        PaymentMethodClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'PaymentMethod';
    }

    get belongsToDefine() {
        return PaymentMethodClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'payment_method',

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
            mode: {
                type: Sequelize.STRING,
                field: 'mode',
                allowNull: false
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