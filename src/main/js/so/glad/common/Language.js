'use strict';

/**
 * @author palmtale
 * @since 2017/5/28.
 */


import Sequelize from 'sequelize';


import ModelClass from '../../../ModelClass';

export default class LanguageClass extends ModelClass {

    static belongsToDefines = [];

    static addBelongTo = (type, as, foreignKey) => {
        LanguageClass.belongsToDefines.push({type: type, as: as, foreignKey: foreignKey})
    };

    get name() {
        return 'Language';
    }

    get belongsToDefine() {
        return LanguageClass.belongsToDefines;
    }

    get defaultOptions() {
        return {
            schema: 'public',

            tableName: 'language',

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
                field: 'name'
            },
            code: {
                type: Sequelize.STRING,
                field: 'code',
                allowNull: false,
                unique: true
            },
            nativeName: {
                type: Sequelize.STRING,
                field: 'native_name',
                allowNull: false,
            },
            revoked: {
                type: Sequelize.BOOLEAN,
                field: 'revoked',
                defaultValue: false
            },
            sort: {
                type: Sequelize.INTEGER,
                field: 'sort',
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