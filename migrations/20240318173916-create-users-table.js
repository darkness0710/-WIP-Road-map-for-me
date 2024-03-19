"use strict";

// https://github.com/db-migrate/shared/blob/master/data_type.js

module.exports = {
  up: async (query, callback) => {
    await query.createTable("users", {
      id: {
        type: "int",
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: "string",
        allowNull: false,
      },
      email: {
        type: "string",
        allowNull: false,
      },
      password: {
        type: "string",
        allowNull: false,
      },
      updated_at: {
        type: "timestamp",
        allowNull: false,
        defaultValue: new String('now()'),
      },
      created_at: {
        type: "timestamp",
        allowNull: false,
        defaultValue: new String('now()'),
      },
    });
  },

  down: async (query, callback) => {
    await query.dropTable("users");
  },
};
