'use strict';

/**
 * @author palmtale
 * @since 2017/5/16.
 */


import Sequelize from 'sequelize';

import ModelClass from './ModelClass';

export default class OAuthUserClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        OAuthUserClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey});
    };

    get name() {
        return 'oauth_user';
    }

    get belongsToDefine() {
        return OAuthUserClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'oauth_user',

            timestamps: true,

            paranoid: false,

            underscored: true
        };
    }

    get fieldsDefine() {
        return {
            providerUserKey: {
                type: Sequelize.STRING,
                field: 'provider_user_key',
                primaryKey: true
            },
            username: {
                type: Sequelize.STRING,
                field: 'username'
            },
            revoked: {
                type: Sequelize.BOOLEAN,
                field: 'revoked',
                defaultValue: false
            },
            clientUserKeys: {
                type: Sequelize.JSON,
                field: 'client_user_keys',
            },
            payload: {
                type: Sequelize.JSON,
                field: 'payload'
            }
        };
    }

    constructor(provider, options) {
        super(provider, options);
    }
}