const mysql = require('mysql');
const dbConfig = require('./dbConfig');

const pool = mysql.createPool(dbConfig);

module.exports = {
    query: (queryText, params, callback) => {
        return pool.query(queryText, params, callback);
    }
};
