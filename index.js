var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");
var url = require("url");
SteamAPI = require("steamapi");

var app = express();
app.use("/", express.static("public"), function(req, res, next) {
  next();
});

app.get("/bilder/", function(req, res) {
  fs.readdir("public/bilder", function(err, files) {
    console.log(files);
    res.send(files);
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started");
});