'use strict';

/**
 * @author palmtale
 * @since 2017/5/28.
 */


import Sequelize from 'sequelize';


import ModelClass from '../ModelClass';

export default class ProjectClass extends ModelClass {

    get name() {
        return 'Project';
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'project',

            timestamps: true,

            paranoid: false,

            underscored: true,

            defaultScope: {where: {revoked: false}}
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
                field: 'name'
            },
            sign: {
                type: Sequelize.STRING,
                field: 'sign'
            },
            types: {
                type: Sequelize.STRING,
                field: 'types',
                allowNull: false,
                defaultValue: 'web'
            },
            revoked: {
                type: Sequelize.BOOLEAN,
                field: 'revoked',
                defaultValue: false
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