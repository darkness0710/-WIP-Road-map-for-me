const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require('../db/dbConfig');

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.host
  }
);

module.exports = sequelize;
