const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var express = require('express')

 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'workout';
 
// Use connect method to connect to the server
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
  });

    // collection.insertOne({ 
    //     workoutTitle: 'Run for 200 mins',
    //     workoutNotes: '200',
    //     caloriesBurntPerMin: 2300
    // }, (err, result)=>{
    //     console.log(result)
    // })

  client.close();
});