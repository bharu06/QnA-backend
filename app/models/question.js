const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  },
  upvotes: Number,
  createdAt: { type: Date, default: Date.now },
});

mongoose.model('Question', QuestionSchema);

