'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import Sequelize from 'sequelize';


import ModelClass from '../../../ModelClass';

export default class UserAddressClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        UserAddressClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'UserAddress';
    }

    get belongsToDefine() {
        return UserAddressClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'user_address',

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
            alias: {
                type: Sequelize.STRING,
                field: 'alias'
            },
            content: {
                type: Sequelize.STRING,
                field: 'content'
            },
            zipCode: {
                type: Sequelize.STRING,
                field: 'zip_code'
            },
            contact: {
                type: Sequelize.STRING,
                field: 'contact'
            },
            telNumber: {
                type: Sequelize.STRING,
                field: 'tel_number'
            },
            sort: {
                type: Sequelize.INTEGER,
                field: 'sort',
                allowNull: false,
                defaultValue: 1
            }
        };
    }

    constructor(provider, options) {
        super(provider, options);
    }
}