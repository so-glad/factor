'use strict';

/**
 * @author palmtale
 * @since 2017/5/3.
 */


import Sequelize from 'sequelize';


import ModelClass from './ModelClass';

export default class UserClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        UserClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'User';
    }

    get belongsToDefine() {
        return UserClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'user',

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
            username: {
                type: Sequelize.STRING,
                field: 'username',
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                field: 'password'
            },
            salt: {
                type: Sequelize.STRING,
                field: 'salt'
            },
            revoked: {
                type: Sequelize.BOOLEAN,
                field: 'revoked',
                defaultValue: false
            },
            status: {
                type: Sequelize.STRING,
                field: 'status'
            },
            alias: {
                type: Sequelize.STRING,
                field: 'alias'
            },
            avatar: {
                type: Sequelize.STRING,
                field: 'avatar'
            },
            email: {
                type: Sequelize.STRING,
                field: 'email',
                unique: true,
                defaultValue: ''
            },
            emailVerified: {
                type: Sequelize.BOOLEAN,
                field: 'email_verified',
                defaultValue: false
            },
            mobile: {
                type: Sequelize.STRING,
                field: 'mobile',
                unique: true,
                defaultValue: ''
            },
            mobileVerified: {
                type: Sequelize.BOOLEAN,
                field: 'mobile_verified',
                defaultValue: false
            }
        };
    }

    constructor(provider, options) {
        super(provider, options);
    }
}