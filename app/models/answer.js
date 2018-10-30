const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  },
  createdAt: { type: Date, default: Date.now },
});

mongoose.model('Answer', AnswerSchema);

