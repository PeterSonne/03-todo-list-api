const router = require("express").Router();
const Items = require("../models/items.js");

router.post("/", (req, res) => {
  Items.create(req.body)
    .then(doc => res.send(doc))
    .catch(err => console.log(err));
});

router.get("/", (req, res) => {
  Items.find({})
    .then(docs => res.send(docs))
    .catch(err => console.log(err));
});

router.patch("/:id", (req, res) => {
  Items.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(doc => res.send(doc))
    .catch(err => console.log(err));
});

module.exports = router;
