const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;
 
const WorkoutsSchema = new Schema({
  workoutTitle: {type:String, minlength: 3},
  workoutNotes: String,
  caloriesBurntPerMin: Number,
  createdDt: { type: Date, default: Date.now },
});

const Workouts = mongoose.model('Workouts', WorkoutsSchema);

module.exports = Workouts