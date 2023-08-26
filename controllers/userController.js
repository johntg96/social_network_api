const User = require('../models/User');

module.exports = {
  // get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error getting all users' });
    }
  },

  // create a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while creating a user.' });
    }
  },

  async updateUser(req, res) {
    try {
      res.status(201).json({ message: 'updateThought method fired!' });
    } catch {
      res.status(500).json({ message: 'Internal Server Error updating a thought' });
    }
  },

  async deleteUser(req, res) {
    try {
      res.status(201).json({ message: 'deleteThought method fired!' });
    } catch {
      res.status(500).json({ message: 'Internal Server Error deleting a thought' });
    }
  }
};
