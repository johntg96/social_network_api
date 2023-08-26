const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: String,
    required: true
  },
  reactionBody: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
