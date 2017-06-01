'use strict';

/**
 * @author palmtale
 * @since 2017/5/31.
 */


import Sequelize from 'sequelize';
import ModelClass from '../ModelClass'

export default class PaymentRouterClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        PaymentRouterClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'PaymentRouter';
    }

    get belongsToDefine() {
        return PaymentRouterClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'payment_router',

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
            methodIds: {
                type: Sequelize.STRING,
                field: 'method_ids',
                allowNull: false
            },
            routerAccount: {
                type: Sequelize.STRING,
                field: 'router_account',
                allowNull: false
            },
            routerSecret: {
                type: Sequelize.STRING,
                field: 'router_secret'
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