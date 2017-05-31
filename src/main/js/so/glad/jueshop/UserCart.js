'use strict';

/**
 * @author palmtale
 * @since 2017/5/30.
 */


import Sequelize from 'sequelize';


import ModelClass from '../ModelClass';

export default class UserCartClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        UserCartClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'UserCart';
    }

    get belongsToDefine() {
        return UserCartClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'user_cart',

            timestamps: true,

            paranoid: false,

            underscored: true,

            defaultScope: {revoked: false}
        };
    }

    get fieldsDefine() {
        return {
            userId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: false,
                defaultValue: Sequelize.DEFAULT,
                field: 'user_id'
            },
            goods: {
                type: Sequelize.JSON,
                field: 'goods'
            }
        };
    }

    constructor(provider, options) {
        super(provider, options);
    }
}