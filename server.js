var express = require("express");
var logger = require("morgan");
// var twilio = require('twilio');
let currentSMSDataObject;

// var mongoose = require("mongoose");
var path = require("path");
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
// var axios = require("axios");
// var cheerio = require("cheerio");

// Require all models
// var db = require("./models");

var PORT = process.env.PORT || 8080;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Routes
app.get("/", function (req, res) {
  res.render(path.join(__dirname, "views/pages/search.ejs"));
})
// app.get("/news", function (req, res) {
//   res.render(path.join(__dirname, "views/pages/news.ejs"));
// })

app.get("/search", function (req, res) {
  res.render(path.join(__dirname, "views/pages/search.ejs"));
})

// Connect to the Mongo DB
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/thetargumstewdb";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI);




// Routes
app.get("/", function(req,res) {
  res.render(path.join(__dirname, "views/pages/index.ejs"));
})
app.get("/news", function(req,res) {
  res.render(path.join(__dirname, "views/pages/news.ejs"));
})

app.get("/favorites", function(req,res) {
  res.render(path.join(__dirname, "views/pages/favorite.ejs"));
})

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT)
})


// app.post("/api/sms", function(req, res) {
// currentSMSDataObject = {
// message: req.body.message
// }

// sms = currentSMSDataObject.message



// console.log(req.body)
let sms;
let phone;
// res.send(JSON.parse(sms))
// })
app.post("/api/sms", function(req, res) {
  console.log(req.body)
  console.log(req.body.message)
  sms = req.body.message
  phone = req.body.phone
  // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  // It will do this by sending out the value "true" have a table
  // req.body is available since we're using the body parsing middleware
  
    res.json(true);
    sendSMS()
});

function sendSMS() {
var twilio = require('twilio');
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
var accountSid = 'AC94771f0c446f95d3cb523b2aa5f93e49'; // Your Account SID from www.twilio.com/console
var authToken = '8676208e090854581a2d003b163f9c8b';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: sms,
    to: phone,  // Text this number
    from: '12055832299' // From a valid Twilio number
})
.then((message) => console.log(message.sid));

}