const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const repo = require('./workout_repo')

const repoMongoose = require('./workout_repo.mongoose')



var app = express();
// static content
app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', './views')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors());

app.get('/workouts', (req, res)=>{
    repoMongoose.findWorkouts((err, data)=>{
        res.json(data)
    }); 
})

app.post('/workouts', (req, res)=>{
    var workout = req.body
    console.log(workout)


    repoMongoose.insertWorkout(workout, ()=>{
        res.status(201).json({message: "Inserted a workout to db", id: workout._id})
    })
})

app.delete('/workouts/:workoutid', (req, res)=>{
    console.log(req.params.workoutid)

    repo.removeWorkout(req.params.workoutid, (err, result)=>{
        // console.log(result);
        if(err){
            res.status(404).json({success:false})
        }
        else{
            res.status(202).json({success:true})
        }
        
    })
    
})

app.get('/hello', (req, res)=>{
    res.type('html');
    res.write('<h1>Some Content to be rendered by the browser</h1>');
    res.end();
})


app.get('/ssdynamic', function (req, res) {
    //db logic

    repoMongoose.findWorkouts((err, data)=>{
        // res.json(data)
        res.render('index', { title: data[0].workoutTitle, message: data[0].workoutNotes })
    }); 
    
  })

app.get('/', (req, res)=>{
    res.json({"success" : true})
})


app.listen(3000, ()=> console.log('Running on port 3000'))