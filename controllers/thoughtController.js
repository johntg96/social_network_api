const Thought = require('../models/Thought');

module.exports = {
  // get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error getting all thoughts' });
    }
  },

  // Create a new thought
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      res.json(newThought);
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error creating a thought' });
    }
  },

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TO-DO //////
// - write code for updateThought() for PUT /api/thoughts route.
  async updateThought(req, res) {
    try {
      res.status(201).json({ message: 'updateThought method fired!' });
    } catch {
      res.status(500).json({ message: 'Internal Server Error updating a thought' });
    }
  },

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TO-DO //////
// - write code for deleteThought() for DELETE /api/thoughts route.
  async deleteThought(req, res) {
    try {
      res.status(201).json({ message: 'deleteThought method fired!' });
    } catch {
      res.status(500).json({ message: 'Internal Server Error deleting a thought' });
    }
  }
};