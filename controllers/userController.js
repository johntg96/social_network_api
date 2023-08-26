const User = require('../models/User');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error getting all users' });
    }
  },
};
