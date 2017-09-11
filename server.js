// Dependencies
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var app = express();


var PORT = process.env.PORT || 3000;


// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json 
app.use(bodyParser.json({ type: 'application/*+json'}))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(bodyParser.text({ type: 'text/html'}))


require('./app/routing/api-routing.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function(){
    console.log("App listening pn PORT: " + PORT);
});
