// imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// set up server
const app = express();
app.use(cors());
// set up bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// import database connection
const db = require("./db.js");

app.listen(4000, err => {
  if (!err) {
    console.log("Server Running");
  } else {
    console.log(err);
  }
});
