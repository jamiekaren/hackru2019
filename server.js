var express = require("express");
var logger = require("morgan");
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
  res.render(path.join(__dirname, "views/pages/index.ejs"));
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
