'use strict';

/**
 * @author palmtale
 * @since 2017/5/29.
 */


import log4js from 'log4js';
import Sequelize from 'sequelize';

import config from '../etc/config';
import Common from '../lib/common/index';
import JueShop from '../lib/jueshop/index'

class Context {

    _persistence = {};

    _models = {};

    get persistence() {
        return this._persistence;
    }

    module = (name, module) => {
        if (module) {
            this._models[name] = module;
            return this;
        } else {
            return this._models[name];
        }
    };

    constructor() {
        log4js.configure(config.log4js, {cwd: config.log4js.cwd});
        for (const key in config.databases){
            const dbConf = config.databases[key];
            const dbLogger = log4js.getLogger(dbConf.logging);
            const provider = new Sequelize(dbConf.name,
                dbConf.username, dbConf.password, {
                    dialect: dbConf.dialect,
                    host: dbConf.host,
                    port: dbConf.port,
                    pool: {
                        max: 8,
                        min: 3,
                        idle: 10000
                    },
                    logging: msg => dbLogger.info.apply(dbLogger, [msg])
                });
            provider.logger = dbLogger;
            this._persistence[key] = provider;
        }

        const common = new Common(this.persistence.common, {schema: 'test'});

        for(const key in common.models) {
            this.module('model.common.' + key, common.models[key])
        }

        const jueshop = new JueShop(this.persistence.jueshop, {schema: 'test', models: common.models});
        for(const key in jueshop.models) {
            this.module('model.jueshop.' + key, jueshop.models[key]);
        }
    }
}

export default new Context();