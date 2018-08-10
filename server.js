var express = require ("express");
var bodyParser = require ("body-parser");
var app = express();
var PORT = 3300;


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: '...'}))
app.use(bodyParser.text());


app.listen(PORT, function(){
    console.log("You are obviously connected " + PORT);
});



// basic route
app.get(`/`, function (req, res){
    res.sendFile(path.joi(__dirname, `home.html`));
});
 
app.get(`/tables`, function (req, res) {
    console.log(`the tables page is being requested`);
    res.sendFile(path.join(__dirname, `app/public/tables.html`));
});


var tables = [{
    name: "miles",
    phone: "1234567890",
    emailL: "miles@miles.com",
    customerID: 1
},
{
    name: "smith",
    phone: "0987654321",
    emailL: "smith@smith.com",
    customerID: 2
},
{
    name: "tom",
    phone: "2134567890",
    emailL: "tom@tom.com",
    customerID: 3
},
{
    name: "mike",
    phone: "1324567890",
    emailL: "mike@mike.com",
    customerID: 4
},
{
    name: "sam",
    phone: "1234576890",
    emailL: "sam@sam.com",
    customerID: 5
},
{
    name: "pam",
    phone: "1234567980",
    emailL: "pam@pam.com",
    customerID: 6
},
{
    name: "sir",
    phone: "1254367890",
    emailL: "sir@sir.com",
    customerID: 7
}
];

