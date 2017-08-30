// Dependencies
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

var path = require('path');

var bodyParser = require('body-parser');

// parse application/c-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse application/json
app.use(bodyParser.json())

// parse various different custom JSON tyes as JSON
app.use(bodyParser.json({ type: 'application/*+json'}))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html'}))




var friend = [{
        "name": "Graham",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }

]



app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});



// Listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);;
  });