'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */
 

import Sequelize from 'sequelize';
import ModelClass from '../ModelClass';

export default class OrderClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        OrderClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'Order';
    }

    get belongsToDefine() {
        return OrderClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'order',

            timestamps: true,

            paranoid: false,

            underscored: true
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
            serialNumber: {
                type: Sequelize.STRING,
                field: 'serial_number',
                allowNull: false
            },
            status: {
                type: Sequelize.STRING,
                field: 'status',
                allowNull: false
            },
            totalPrice: {
                type: Sequelize.DECIMAL(20,2),
                field: 'total_price',
                allowNull: false,
                defaultValue: 9999999999.99
            },
            finalPrice: {
                type: Sequelize.DECIMAL(20,2),
                field: 'final_price',
                allowNull: false,
                defaultValue: 9999999999.99
            },
            paymentStatus: {
                type: Sequelize.STRING,
                field: 'payment_status',
                allowNull: false
            },
            shipmentStatus: {
                type: Sequelize.STRING,
                field: 'shipment_status',
                allowNull: false
            }
        };
    }

    constructor(provider, options) {
        super(provider, options);
    }
}