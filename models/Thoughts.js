const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { 
    type: String, required: true 
  },
  timestamp: { 
    type: Date, default: Date.now 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Users', required: true 
  },
  reactions: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Reaction' 
  }],
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
