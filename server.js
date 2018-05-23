var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var view = [];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Display reservations

app.get("/api/view", function (req, res) {
  return res.json(view);
});

// Posting reservations

app.post("/api/view", function (req, res) {

  var newRes = req.body;

  console.log(newRes);

  view.push(newRes);

  res.json(newRes);

})


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});