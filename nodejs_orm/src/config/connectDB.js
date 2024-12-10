import mysql2 from 'mysql2';
import { Sequelize } from 'sequelize';
import dbConfig from '../config/config.json' assert { type: 'json' };

const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

export default sequelize;
