const Thought = require('../models/Thought');

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error getting all thoughts' });
    }
  },
};