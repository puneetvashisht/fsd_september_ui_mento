const express = require('express');
const findWorkouts = require('./workout_repo')


var app = express();


app.get('/workouts', (req, res)=>{

    findWorkouts((err, data)=>{
        res.json(data)
    });
    
})

app.get('/hello', (req, res)=>{
    res.type('html');
    res.write('<h1>Some Content to be rendered by the browser</h1>');
    res.end();
})


app.get('/', (req, res)=>{
    res.json({"success" : true})
})


app.listen(3000, ()=> console.log('Running on port 3000'))