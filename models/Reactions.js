const mongoose = require('mongoose');

const reactionsSchema = new mongoose.Schema({
  reactionType: { 
    type: String, 
    enum: ['like', 'dislike', 'love'], 
    required: true 
  },
  thought: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Thought', required: true 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Users', 
    required: true 
  },
});

const Reactions = mongoose.model('Reactions', reactionsSchema);

module.exports = Reactions;
