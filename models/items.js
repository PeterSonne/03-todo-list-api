const mongoose = require("mongoose");

mongoose.model("items", {
  name: { type: String, required: true },
  done: { type: Boolean, default: false }
});

module.exports = mongoose;
