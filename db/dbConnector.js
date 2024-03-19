// const mysql = require('mysql');
// const dbConfig = require('./dbConfig');
// const pool = mysql.createPool(dbConfig);

// module.exports = {
//     query: (queryText, params, callback) => {
//         return pool.query(queryText, params, callback);
//     }
// };

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