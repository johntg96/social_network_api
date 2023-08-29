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
      const userId = req.params.userId;
      const updatedUserData = req.body; // The updated user data from the request

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        updatedUserData,
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error updating a user' });
    }
  },


  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId);

      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error deleting a user' });
    }
  },
};
