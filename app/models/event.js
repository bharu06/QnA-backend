const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  eventCode: String,
  eventName: String,
  userId: Number,
  createdAt: { type: Date, default: Date.now },
});

mongoose.model('Event', EventSchema);
