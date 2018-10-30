const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'workout';

function findWorkouts(callback){
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
       
        const db = client.db(dbName);
      
        const collection = db.collection('workouts');
      //   Find some documents
        collection.find({}).toArray(function(err, docs) {
          assert.equal(err, null);
          console.log("Found the following records");
          console.log(docs)
          callback(null, docs)
        });
       
        client.close();
    });
}

module.exports = findWorkouts


