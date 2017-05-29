'use strict';

/**
 * @author palmtale
 * @since 2017/5/28.
 */


import Sequelize from 'sequelize';


import ModelClass from '../../../ModelClass';

export default class CompanyClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        CompanyClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'Company';
    }

    get belongsToDefine() {
        return CompanyClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'company',

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
            identity: {
                type: Sequelize.STRING,
                field: 'identity',
                allowNull: false
            },
            revoked: {
                type: Sequelize.BOOLEAN,
                field: 'revoked',
                allowNull: false,
                defaultValue: false
            },
            name: {
                type: Sequelize.STRING,
                field: 'name',
                allowNull: false
            },
            alias: {
                type: Sequelize.STRING,
                field: 'alias'
            },
            category: {
                type: Sequelize.STRING,
                field: 'category',
                allowNull: false,
                defaultValue: 'LTD'
            },
            capital: {
                type: Sequelize.DECIMAL(20, 2),
                field: 'capital',
                allowNull:false,
                defaultValue: 10000.00
            },
            foundDate: {
                type: Sequelize.DATE,
                field: 'found_date',
                allowNull: false,

            },
            chairman: {
                type: Sequelize.STRING,
                field: 'chairman'
            },
            address: {
                type: Sequelize.STRING,
                field: 'address'
            },
            industry: {
                type: Sequelize.STRING,
                field: 'industry',
                allowNull: false,
                defaultValue: ''
            },
            size: {
                type: Sequelize.INTEGER,
                field: 'size',
                allowNull: false,
                defaultValue: 50
            },
            business: {
                type: Sequelize.STRING,
                field: 'business'
            },
            summary: {
                type: Sequelize.STRING,
                field: 'summary'
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