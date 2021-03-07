const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
var exphbs = require("express-handlebars");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1/nodeblog_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//stati midleware
app.use(express.static("public"));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
const main = require("./routes/main");
const posts = require("./routes/posts");
app.use("/", main);
app.use("/posts", posts);

app.listen(port, hostname, () => {
  console.log(`Server çalışıyor, http://${hostname}:${port}/`);
});
