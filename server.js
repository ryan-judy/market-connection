var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require("./models/User.js");
var helpers = require("./app/utils/helpers.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

mongoose.connect("mongodb://localhost/market-connection");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/value", function(req, res) {
  res.sendFile(__dirname + "/public/value.html");
});


// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
