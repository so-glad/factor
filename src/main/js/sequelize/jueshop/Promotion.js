'use strict';

/**
 * @author palmtale
 * @since 2017/5/30.
 */


import Sequelize from 'sequelize';


import ModelClass from '../ModelClass';

export default class PromotionClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        PromotionClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'PromotionClass';
    }

    get belongsToDefine() {
        return PromotionClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'promotion',

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