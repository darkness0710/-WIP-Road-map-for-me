const db = require('../db/dbConnector');
const UserModel = require('../model/user.model');
const { param } = require('../routes/user');
const userModel = new UserModel();

module.exports = {
  getUsers: async (req, res, next) => {
    res.status(200).json({ 
      success: true,
      msg: "List users",
      data: await userModel.getAllUsers() 
    });
  },
  getUser: async (req, res, next) => {
    const userId = req.params.id;
    res.status(200).json({
      success: true,
      msg: `Show user_id ${userId}`,
      data: await userModel.getUserById(userId) 
    })
  },
  createUser: async (req, res, next) => {
    const { username, email, password } = req.body;
    const user  = await userModel.createUser({ username, email, password });
    res.status(200).json({
      success: true,
      msg: "Create user",
      data: user 
    });
  },
  updateUser: async (req, res, next) => {
    const userId = req.params.id;
    const { username, email, password } = req.body;
    await userModel.updateUser(userId, { username, email, password });
    res.status(200).json({
      success: true,
      msg: `Update user ${req.params.id}`,
      data: await userModel.getUserById(userId) 
    })
  },
  deleteUser: async (req, res, next) => {
    const userId = req.params.id;
    res.status(200).json({
      success: true,
      msg: `Delete user ${req.params.id}`,
      data: userModel.deleteUser(userId)
    })
  },
};
