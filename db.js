const mongoose = require("mongoose");
require("dotenv");
let env = process.env;

mongoose.connect(
  `mongodb://${env.DATABASE}/todo-list`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    console.log(err ? err : "Connected to Database");
  }
);

module.exports = mongoose;
