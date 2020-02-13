const router = require("express").Router();
const Items = require("../models/items.js");

router.post("/", (req, res) => {
  Items.create(req.body).then(doc => res.send(doc));
});

router.get("/", (req, res) => {
  Items.find({}).then(docs => res.send(docs));
});

module.exports = router;
