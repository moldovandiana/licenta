/*"use strict";

// create express server
var express = require("express");

var app = express();

var bodyParser = require('body-parser');

var mysql = require(mysql);

var port = process.env.PORT || 3001; // to pass json data

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); // pass json data to query

app.get('/', function (req, res) {
  res.send("hello world");
}); // listen on eviorement port or 3001

app.listen(3001, function () {
  return console.log('running on port 3001 ${port}');
});*/