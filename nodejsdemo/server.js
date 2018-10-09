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

var employees = [{
    "id": 1,
    "first_name": "Lelah",
    "last_name": "Renfree",
    "email": "lrenfree0@bandcamp.com",
    "gender": "Female",
    "ip_address": "88.131.238.205"
  }, {
    "id": 2,
    "first_name": "Julius",
    "last_name": "Grigaut",
    "email": "jgrigaut1@usatoday.com",
    "gender": "Male",
    "ip_address": "157.25.156.65"
  }, {
    "id": 3,
    "first_name": "Stacey",
    "last_name": "Hilliam",
    "email": "shilliam2@columbia.edu",
    "gender": "Female",
    "ip_address": "4.43.234.191"
  }, {
    "id": 4,
    "first_name": "Madelina",
    "last_name": "Yakob",
    "email": "myakob3@desdev.cn",
    "gender": "Female",
    "ip_address": "0.223.126.173"
  }, {
    "id": 5,
    "first_name": "Vinny",
    "last_name": "Guye",
    "email": "vguye4@weather.com",
    "gender": "Female",
    "ip_address": "42.249.39.49"
  }, {
    "id": 6,
    "first_name": "Benjie",
    "last_name": "Tuxill",
    "email": "btuxill5@sitemeter.com",
    "gender": "Male",
    "ip_address": "57.56.248.101"
  }, {
    "id": 7,
    "first_name": "Briana",
    "last_name": "O' Culligan",
    "email": "boculligan6@mlb.com",
    "gender": "Female",
    "ip_address": "243.104.123.15"
  }, {
    "id": 8,
    "first_name": "Violet",
    "last_name": "Millery",
    "email": "vmillery7@cdbaby.com",
    "gender": "Female",
    "ip_address": "166.50.166.70"
  }, {
    "id": 9,
    "first_name": "Tony",
    "last_name": "Hoofe",
    "email": "thoofe8@google.com.hk",
    "gender": "Male",
    "ip_address": "130.204.9.179"
  }, {
    "id": 10,
    "first_name": "Costa",
    "last_name": "Skipping",
    "email": "cskipping9@netscape.com",
    "gender": "Male",
    "ip_address": "146.230.162.244"
  }]
app.get('/employees', (req,res) => {
    res.json(employees);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))