'use strict';

/**
 * @author palmtale
 * @since 2017/5/16.
 */


import Sequelize from 'sequelize';


import ModelClass from '../ModelClass';
 
export default class OAuthAccessClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        OAuthAccessClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey});
    };

    get name() {
        return 'OAuthAccess';
    }

    get belongsToDefine() {
        return OAuthAccessClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'oauth_access',

            timestamps: true,

            createdAt: 'timestamp',

            updatedAt: false,

            paranoid: false,

            underscored: true
        };
    }

    get fieldsDefine() {
        return {
            type: {
                type: Sequelize.STRING,
                field: 'type'
            },
            action: {
                type: Sequelize.STRING,
                field: 'action'
            },
            scope: {
                type: Sequelize.STRING,
                field: 'scope'
            },
            state: {
                type: Sequelize.STRING,
                field: 'state'
            },
            accessToken: {
                type: Sequelize.STRING,
                field: 'access_token'
            },
            accessTime: {
                type: Sequelize.INTEGER,
                field: 'access_time'
            },
            refreshToken: {
                type: Sequelize.STRING,
                field: 'refresh_token'
            },
            refreshTime: {
                type: Sequelize.INTEGER,
                field: 'refresh_time'
            },
            userKey: {
                type: Sequelize.STRING,
                field: 'user_key',
                allowNull: true
            }
        };
    }

    constructor(provider, options) {
        super(provider, options);
    }
}