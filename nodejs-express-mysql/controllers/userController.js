module.exports = {
  getUsers: (req, res, next) => {
    res.status(200).json({ success: true, msg: "List users", data: [] });
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
