// index.js

// set up ========================
var express  = require('express');
var app      = express();                   // create our app w/ express
var mongoose = require('mongoose');         // mongoose for mongodb
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var path = require('path');

// configuration begin =================
mongoose.connect('mongodb://localhost:27017/animated_cards');     // connect to mongoDB database

app.use(express.static(__dirname + '/../public'));                 // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


var layout = path.resolve( __dirname + '/../public/layouts/' ); //Layout path

// configuration ends here=================


// Models begin ====================================
var country = mongoose.model('countries',{
  code : 'string',
  name : 'string'
});

var alphabet = mongoose.model('alphabets',{
  letter : 'string',
  for : 'string'
});
// Models ends here ==================================


//Routes begins=====================================

app.get('/',function(req,res){
  res.sendFile( layout + '/main.html');
});

// Get all country list
app.get('/country/getAll',function(req,res){
  res,
    country.find(function(err, countries){
      if( err ){ // err
        res.json({'message':'Could not retrieve country list'}); // return pretty error message
      }
      res.json(countries); // Return all countries
    });
});
//--------------------------

//Get all alphabets list
app.get('/alphabets/getAll',function(req,res){
    alphabet.find(function(err, alphabets){
      if( err ){ // err
        res.json({'message':'Could not retrieve alphabet lists'}); // return pretty error message
      }
      res.json(alphabets); // Return all alphabets
    });
});



//Routes ends===================================

// listen (start app with node server.js) ======================================
app.listen(3000);
console.log("App listening on port 3000");
