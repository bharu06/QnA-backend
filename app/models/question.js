const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  },
  upvotes: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Question', QuestionSchema);

