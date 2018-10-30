const MongoClient = require('mongodb').MongoClient;
const dbName = "qna";
var url = `mongodb://localhost:27017/#{dbName}`;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbName);
  // Create events collection
  dbo.createCollection("events", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });


  // Create a test event
  const testEvent = { event_name: "Test Event", userId: 1, eventCode: "TEST_EVENT" };
  dbo.collection("events").insertOne(testEvent, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
