'use strict';

/**
 * @author palmtale
 * @since 2017/6/10.
 */


import sequelize from './sequelize';
import graphql from './graphql';

exports = module.exports = {
    sequelize: sequelize,
    graphsql: graphql
};

export {sequelize as default, graphql};