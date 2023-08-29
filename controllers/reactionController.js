const Reaction = require('../models/Reaction');
const Thought = require('../models/Thought');

module.exports = {
  async getAllReactions(req, res) {
    try {
      const allReactions = await Reaction.find();

      res.status(200).json({ reactions: allReactions });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error getting all reactions' });
    }
  },

  async createReaction(req, res) {
    try {
      const newReactionData = req.body;
      const newReaction = await Reaction.create(newReactionData);

      // Add the new reaction's ID to the associated thought
      await Thought.findByIdAndUpdate(newReaction.thought, {
        $push: { reactions: newReaction._id }
      });

      res.status(201).json({ message: 'Reaction created successfully', newReaction });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error creating a reaction' });
    }
  },

  async updateReaction(req, res) {
    try {
      const reactionId = req.params.reactionId;
      const updatedReactionData = req.body;

      const updatedReaction = await Reaction.findByIdAndUpdate(
        reactionId,
        updatedReactionData,
        { new: true }
      );

      if (!updatedReaction) {
        return res.status(404).json({ message: 'Reaction not found' });
      }

      res.status(200).json({ message: 'Reaction updated successfully', updatedReaction });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error updating a reaction' });
    }
  },

  async deleteReaction(req, res) {
    try {
      const reactionId = req.params.reactionId;

      // find reaction to get thought id
      const reaction = await Reaction.findById(reactionId);

      if (!reaction) {
        return res.status(404).json({ message: 'Reaction not found' });
      }

      // remove reaction id from thought
      await Thought.findByIdAndUpdate(reaction.thought, {
        $pull: { reactions: reactionId }
      });

      // delete reaction
      await Reaction.findByIdAndDelete(reactionId);

      res.status(200).json();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error deleting a reaction' });
    }
  },
};
