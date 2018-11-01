var mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'workout';

function connect(callback){
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    if(err){
      callback(err, null);
    }
    callback(null, client)  
});
}

function findWorkouts(callback){
    connect((err, client)=>{
      console.log("Connected successfully to server");
      const db = client.db(dbName);
      const collection = db.collection('workouts');
      //   Find some documents
        collection.find({}).toArray(function(err, docs) {
          assert.equal(err, null);
          console.log("Found the following records");
          console.log(docs)
          client.close();
          callback(null, docs)
        });
    })

}

function insertWorkout( workout ,callback){
  connect((err, client)=>{
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('workouts');
    //   Insert one document
    collection.insertOne(workout, (err, result) =>{
      console.log("Inserted workout document into the collection");
      callback(result);
    })

  })



}

function removeWorkout( workoutid ,callback){
  connect((err, client)=>{
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('workouts')
    //   Insert one document
   collection.deleteOne({_id: new mongodb.ObjectID(workoutid)}, (err, result)=>{
     if(err) throw err;
     console.log(result.deletedCount)
     callback(err, result)
   })

  })
}

module.exports = {findWorkouts, insertWorkout,removeWorkout}