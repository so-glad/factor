'use strict';

/**
 * @author palmtale
 * @since 2017/5/31.
 */


import Sequelize from 'sequelize';


import ModelClass from '../ModelClass';

export default class GoodsPromotionClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        GoodsPromotionClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'GoodsPromotion';
    }

    get belongsToDefine() {
        return GoodsPromotionClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'goods_promotion',

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