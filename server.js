var express = require ("express");
var bodyParser = require ("body-parser");

var app = express();
var PORT = 3300;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log("You are obviously connected " + PORT);
});

var 