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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TO-DO //////
// - write code for updateUser() for PUT /api/users route.
  async updateUser(req, res) {
    try {
      res.status(201).json({ message: 'updateThought method fired!' });
    } catch {
      res.status(500).json({ message: 'Internal Server Error updating a thought' });
    }
  },

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TO-DO //////
// - write code for deleteUser() for DELETE /api/users route.
  async deleteUser(req, res) {
    try {
      res.status(201).json({ message: 'deleteThought method fired!' });
    } catch {
      res.status(500).json({ message: 'Internal Server Error deleting a thought' });
    }
  }
};
