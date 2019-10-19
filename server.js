var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
// var cheerio = require("cheerio");

// // Require all models
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

app.get("/favorites", function (req, res) {
  res.render(path.join(__dirname, "views/pages/search.ejs"));
})

// Start the server
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

// // A GET route for scraping the echoJS website
// app.get("/scrape", function (req, res) {


// });

// // Connect to the Mongo DB
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/thetargumstewdb";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI);
// mongoose.connect("mongodb://localhost/thetargumstewdb", { useNewUrlParser: true });

// mongoose.connect('mongodb://localhost/thetargumstewdb').then(() => {
// console.log("Connected to Database");
// }).catch((err) => {
//     console.log("Not Connected to Database ERROR! ", err);
// });



// mongoose.connect(MONGODB_URI);



//   // First, we grab the body of the html with axios
//   axios.get("https://www.dailytargum.com/section/news").then(function(response) {

//     db.Article.remove()
//     .then(function(dbArticle) {
//       // View the added result in the console
//       console.log(dbArticle);
//     })
//     .catch(function(err) {
//       // If an error occurred, log it
//       console.log(err);
//     });
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     // var $ = cheerio.load(response.data);

//     // Now, we grab every h2 within an article tag, and do the following:
//     $(".art-left").each(function(i, element) {
//       // Save an empty result object


//       // Add the text and href of every link, and save them as properties of the result object
//       var image = $(element).find(".col-md-4")
//         .find(".image-container")
//         .find("a").find('img').attr('src');
//         var link = $(element).find(".col-md-4")
//         .find(".image-container").find("a")
//         .attr("href")
//       var author = $(element).find(".col-md-8")
//         .find(".dateline")
//         .find("a").text();
//         var abstract = $(element).find(".col-md-8")

//         .find(".article-abstract").text()
//        var timestamp = $(element).find(".col-md-8")
//          .find(".dateline")
//         .find(".time-since").text();
//         var title = $(element).find(".col-md-8")
//         .find(".headline").find("a")
//         .text()

//         var result = {
//             image: image,
//             link: link,
//             author: author,
//             abstract: abstract,
//             timestamp: timestamp,
//             title: title
//         }
// console.log(result)
//       // Create a new Article using the `result` object built from scraping
//       db.Article.create(result)
//         .then(function(dbArticle) {
//           // View the added result in the console
//           console.log(dbArticle);
//         })
//         .catch(function(err) {
//           // If an error occurred, log it
//           console.log(err);
//         });
//     });

//     // Send a message to the client
//     // res.send("Scrape Complete");
//     res.render(path.join(__dirname, "views/pages/news.ejs"));
//   });
// });

// // Route for getting all Articles from the db
// app.get("/articles", function(req, res) {
//   db.Article.find({}).then(function(dbArticle){
//     res.json(dbArticle)
//   })
//   .catch(function(err){
//     res.json(err)
//   })
//   // TODO: Finish the route so it grabs all of the articles
// });

// Route for grabbing a specific Article by id, populate it with it's note
// app.get("/articles/:id", function(req, res) {

//   db.Article.findOne({_id:req.params.id})
//   .populate("note")
//   .then(function(dbArticle){
//     res.json(dbArticle)
//   })
//   .catch(function(err){
//     res.json(err)
//   })
  // TODO
  // ====
  // Finish the route so it finds one article using the req.params.id,
  // and run the populate method with "note",
  // then responds with the article with the note included
// });

// // Route for saving/updating an Article's associated Note
// app.post("/articles/:id", function(req, res) {
// db.Note.create(req.body)
// .then(function(newNote){
//   return db.Article.findOneAndUpdate({_id: req.params.id}, {note: newNote._id}, {new: true})
// })
// .then(function(dbArticle){
//   res.json(dbArticle)
// }).catch(function(err){
//   res.json(err)
// })
  // TODO
  // ====
  // save the new note that gets posted to the Notes collection
//   // then find an article from the req.params.id
//   // and update it's "note" property with the _id of the new note
// });

// app.post("/favorites/:id", function(req, res) {
//   // db.Favorite.create(req.body)
//   // .then(function(newNote){
//   //   return db.Favorite.findOneAndUpdate({_id: req.params.id}, {article: newNote._id}, {new: true})
//   // })
//   // .then(function(dbFavorite){
//   //   res.json(dbFavorite)
//   // }).catch(function(err){
//   //   res.json(err)
//   // })
//   db.Favorite.insert()
//   .then(function() {
//     var favArticle = {article: req.params.id}
//     // View the added result in the console

//     console.log(favArticle);
//   })
//   .catch(function(err) {
//     // If an error occurred, log it
//     console.log(err);
//   });
    // TODO
    // ====
    // save the new note that gets posted to the Notes collection
    // then find an article from the req.params.id
    // and update it's "note" property with the _id of the new note

