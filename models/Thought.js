const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
