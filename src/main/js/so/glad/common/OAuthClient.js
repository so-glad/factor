'use strict';

/**
 * @author palmtale
 * @since 2017/5/3.
 */


import Sequelize from 'sequelize';

import ModelClass from './ModelClass';

export default class OAuthClientClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        OAuthClientClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'OAuthClient';
    };

    get belongsToDefine() {
        return OAuthClientClass.belongsToDefines;
    };

    get defaultOptions() {
        return {
            schema: 'oauth',

            tableName: 'oauth_client',

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
            secret: {
                type: Sequelize.STRING,
                field: 'secret',
                unique: true
            },
            name: {
                type: Sequelize.STRING,
                field: 'name',
                unique: true
            },
            redirect: {
                type: Sequelize.STRING,
                field: 'redirect',
                unique: true
            },
            grantTypes: {
                type: Sequelize.INTEGER,
                field: 'grant_types',
                defaultValue: 1
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