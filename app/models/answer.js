const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Answer', AnswerSchema);

