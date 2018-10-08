const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

// parse application/json
app.use(bodyParser.json())
app.use(cors())

var courses= [
    {"title": "Angular - Nodejs", "summary": "Framework from Google"},
    {"title": "React", "summary": "Library from FB"},
    {"title": "Ember", "summary": "Another open source framework"},
    {"title": "AngularJS", "summary": "Initial release of Angular"},
    {"title": "JS", "summary": "Basic JS"},
    {"title": "Java", "summary": "Age old programming language"}
]

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/courses', (req,res) => {
    res.json(courses);
})

app.post('/courses', (req,res) => {
    var course = req.body;
    console.log(course);
    courses.push(course)
    res.json(courses);
})

app.delete('/courses/:index', (req,res) => {
    var index = req.params.index;
    courses.splice(index, 1);
    res.json(courses);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))