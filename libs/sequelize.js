const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

//No queremos que sincronice, vamos a trabajarlo como en producción.
/* sequelize.sync(); */


module.exports = sequelize;
