const { DataTypes } = require("sequelize");
const dbConfig = require('../db/dbConfig');
const dbConnector = require('../db/dbConnector');

class UserModel {
  constructor() {
    this._user = dbConnector.define("users", {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    }, {
      underscored: true,
    });
  }

  async getAllUsers() {
    try {
      const users = await this._user.findAll();
      return users;
    } catch (error) {
      console.error('Failed to retrieve users:', error);
      throw error;
    }
  }

  async getUserById(userId) {
    try {
      const user = await this._user.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      console.error(`Failed to retrieve user with ID ${userId}:`, error);
      throw error;
    }
  }

  async createUser(data) {
    try {
      const user = await this._user.create(data);
      if (!user) {
        throw new Error('User create failed!');
      }
      return user.dataValues;
    } catch (error) {
      console.error(`Failed to create user:`, error);
      throw error;
    }
  }

  async updateUser(userId, data) {
    try {
      const user = await this._user.update(data, {
        where: { 
          id: userId
        }
      });
      if (!user) {
        throw new Error('User update failed!');
      }
      return true;
    } catch (error) {
      console.error(`Failed to update user:`, error);
      throw error;
    }
  }

  async deleteUser(userId) {
    try {
      const result = await this._user.destroy({ where: { id: userId } });
      if (!result) {
        throw new Error('User delete failed!');
      }
      return true;
    } catch (error) {
      console.error(`Failed to delete user:`, error);
      throw error;
    }
  }
}

module.exports = UserModel;