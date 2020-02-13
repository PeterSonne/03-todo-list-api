const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// import database connection
const db = require("./db.js");

app.listen(4000, err => {
  if (!err) {
    console.log("Server Running");
  } else {
    console.log(err);
  }
});
