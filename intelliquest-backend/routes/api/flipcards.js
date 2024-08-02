const router = require("express").Router();
const data = require("../../data/flipcards.json"); 

router.get("/", (req, res) => {
  res.json(data);
});

module.exports = router;
