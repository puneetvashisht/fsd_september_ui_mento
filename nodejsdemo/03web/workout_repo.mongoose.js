// var mongodb = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
const Workouts = require('./schemas/workout')
const mongoose = require('mongoose');
const assert = require('assert');

mongoose.connect('mongodb://localhost/workout');



function findWorkouts(callback){


  Workouts.find({}, function (err, docs) {
    callback(null, docs)
  });
    // connect((err, client)=>{
    //   console.log("Connected successfully to server");
    //   const db = client.db(dbName);
    //   const collection = db.collection('workouts');
    //   //   Find some documents
    //     collection.find({}).toArray(function(err, docs) {
    //       assert.equal(err, null);
    //       console.log("Found the following records");
    //       console.log(docs)
    //       client.close();
    //       callback(null, docs)
    //     });
    // })

}

function insertWorkout( workout ,callback){

  const instance = new Workouts();
  instance.workoutTitle = workout.workoutTitle;
  instance.workoutNotes = workout.workoutNotes;
  instance.caloriesBurntPerMin = workout.caloriesBurntPerMin;
  instance.save(function (err) {
    console.log(err)
    console.log("Inserted workout document into the collection");
      callback();
  });

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