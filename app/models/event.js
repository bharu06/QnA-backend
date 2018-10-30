const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventCode: String,
  eventName: String,
  userId: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', EventSchema);
