const mongoose = require('mongoose');
const hri = require('human-readable-ids').hri;
const Event = require("../models/event")

const genericError = {status: "error", error: "Unexpected error occurred"}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getEventCode(cb) {
  const eventCode = hri.random().toUpperCase() + getRandomInt(100, 999);
  Event.count({ eventCode }, function (err, c) {
    if(err) return cb(err);
    if(c > 0) return getEventCode(cb);
    cb(null, eventCode);
  });
}

exports.getIndex = function (req, res) {
  res.json({status: "error", error: "Unsupported method"})
};

exports.postIndex = function (req, res) {
  getEventCode(function(err, eventCode) {
    if(err) {
      console.log("There is an error!!!!!!!")
      res.json(genericError);
      return;
    }

    var testEvent = new Event({
      eventName: req.body.eventName,
      userid: 1,
      eventCode: eventCode,
    });

    console.log("saving")
    testEvent.save(function(err) {
      if(err) {
        res.json(genericError);
        return;
      }

      res.json({status: "success"})
    });
  });
};
