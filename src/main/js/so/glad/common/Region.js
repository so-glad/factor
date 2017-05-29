'use strict';

/**
 * @author palmtale
 * @since 2017/5/28.
 */


import Sequelize from 'sequelize';


import ModelClass from '../../../ModelClass';

export default class RegionClass extends ModelClass {

    static belongsToDefines = [];

    get name() {
        return 'Region';
    }

    get belongsToDefine() {
        return RegionClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'region',

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
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                field: 'name'
            },
            code: {
                type: Sequelize.STRING,
                field: 'code',
                allowNull: false,
                unique: true
            },
            sign: {
                type: Sequelize.STRING,
                field: 'sign',
                allowNull: false,
                unique: true
            },
            revoked: {
                type: Sequelize.BOOLEAN,
                field: 'revoked',
                allowNull: false,
                defaultValue: false
            },
            sort: {
                type: Sequelize.INTEGER,
                field: 'sort',
                allowNull: false,
                defaultValue: 1
            },
            comment: {
                type: Sequelize.STRING,
                field: 'comment'
            }
        };
    }

    constructor(provider, options) {
        super(provider, options);
    }
}