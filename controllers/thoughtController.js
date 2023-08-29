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

  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      res.json(newThought);
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error creating a thought' });
    }
  },


  async updateThought(req, res) {
    try {
      const thoughtId = req.params.thoughtId;
      const updatedThoughtData = req.body;

      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        updatedThoughtData,
        { new: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      res.status(200).json({ message: 'Thought updated successfully', updatedThought });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error updating a thought' });
    }
  },


  async deleteThought(req, res) {
    try {
      const thoughtId = req.params.thoughtId;
      const deletedThought = await Thought.findByIdAndDelete(thoughtId);

      if (!deletedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      res.status(200).json();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error deleting a thought' });
    }
  },
};