const mongoose = require('mongoose');
const Event = require("./app/models/event")

const dbName = "qna";
var url = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(url, function(err) {
  if(err) throw err;

  var testEvent = new Event({
    eventName: 'testEvent',
    userid: 1,
    eventCode: "TEST_EVENT"
  });

  console.log("saving")
  testEvent.save(function(err) {
    if(err) {
      console.log("There iserror")
      console.log(err)
    }
    console.log("Closing connection");
    mongoose.connection.close()
  });
});

