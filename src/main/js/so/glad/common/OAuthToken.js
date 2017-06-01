'use strict';

/**
 * @author palmtale
 * @since 2017/5/3.
 */

import Sequelize from 'sequelize';


import ModelClass from '../ModelClass';

export default class OAuthTokenClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        OAuthTokenClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'OAuthToken';
    }

    get belongsToDefine() {
        return OAuthTokenClass.belongsToDefines;
    };

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'oauth_token',

            timestamps: true,

            createdAt: 'timestamp',

            updatedAt: false,

            paranoid: false,

            underscored: true,

            defaultScope: {where: {revoked: false}}
        };
    }

    get fieldsDefine() {
        return {
            accessToken: {
                type: Sequelize.STRING,
                primaryKey: true,
                autoIncrement: false,
                defaultValue: Sequelize.DEFAULT,
                field: 'access_token'
            },
            expiresAt: {
                type: Sequelize.DATE,
                field: 'expires_at',
                defaultValue: Sequelize.NOW
            },
            refreshToken: {
                type: Sequelize.STRING,
                unique: 'oauth_token_refresh_token_unique',
                defaultValue: Sequelize.DEFAULT,
                field: 'refresh_token'
            },
            remindAt: {
                type: Sequelize.DATE,
                field: 'remind_at',
                defaultValue: Sequelize.NOW
            },
            scope: {
                type: Sequelize.STRING,
                field: 'scope',
                defaultValue: '*'
            },
            revoked: {
                type: Sequelize.BOOLEAN,
                field: 'revoked',
                defaultValue: false
            }
        };
    }

    constructor(provider, options) {
        super(provider, options);
    }
}