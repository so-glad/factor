'use strict';

/**
 * @author palmtale
 * @since 2017/6/9.
 */


import Sequelize from 'sequelize';


import ModelClass from '../ModelClass';

export default class CurrencyClass extends ModelClass {

    get name() {
        return 'File';
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'file',

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
                field: 'name',
                allowNull: false
            },
            contentType: {
                type: Sequelize.STRING,
                field: 'content_type',
                allowNull: false,
                defaultValue: 'text/plain'
            },
            contentLength: {
                type: Sequelize.INTEGER,
                field: 'content_length',
                allowNull: false,
                defaultValue: 0
            },
            hashType: {
                type: Sequelize.STRING,
                field: 'hash_type',
                allowNull: false,
                defaultValue: 'sha256'
            },
            hashCode: {
                type: Sequelize.STRING,
                field: 'hash_code',
                allowNull: false
            },
            url: {
                type: Sequelize.STRING,
                field: 'url'
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