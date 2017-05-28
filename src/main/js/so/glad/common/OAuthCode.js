'use strict';

/**
 * @author palmtale
 * @since 2017/5/3.
 */

import Sequelize from 'sequelize';


import ModelClass from './ModelClass';

export default class OAuthCodeClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        OAuthCodeClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey});
    };

    get name() {
        return 'OAuthCode';
    }

    get belongsToDefine() {
        return OAuthCodeClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'oauth_code',

            timestamps: true,

            createdAt: 'timestamp',

            updatedAt: false,

            paranoid: false,

            underscored: true
        };
    }

    get fieldsDefine() {
        return {
            code: {
                type: Sequelize.STRING,
                primaryKey: true,
                autoIncrement: false,
                defaultValue: Sequelize.DEFAULT,
                field: 'code'
            },
            scope: {
                type: Sequelize.STRING,
                field: 'scope',
                default: '*'
            },
            redirectUri: {
                type: Sequelize.STRING,
                field: 'redirect_uri'
            },
            revoked: {
                type: Sequelize.BOOLEAN,
                field: 'revoked',
                defaultValue: false
            },
            expiresAt: {
                type: Sequelize.DATE,
                field: 'expires_at'
            }
        };
    }

    constructor(provider, options) {
        super(provider, options);
    }
}