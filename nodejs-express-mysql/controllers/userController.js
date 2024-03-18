const db = require('../db/dbConnector');

module.exports = {
  getUsers: (req, res, next) => {
    db.query('SELECT * FROM users', (error, data, fields) => {
      console.log(error);
      if (error) {
        res.status(500).send('Error fetching users from database');
        return;
      }
      res.status(200).json({ success: true, msg: "List users", data: data });
    });
  },
  getUser: (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show user ${req.params.id}`, data: {} })
  },
  createUser: (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create user ${req.params.id}`, data: {} })
  },
  updateUser: (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update user ${req.params.id}`, data: {} })
  },
  deleteUser: (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete user ${req.params.id}`, data: {} })
  },
};
