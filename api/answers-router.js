const router = require("express").Router();
const Answers = require("./answers-model.js");

// Get all answers
router.get("/", (req, res) => {
    Answers.find()
      .then(answers => {
        res.status(200).json(answers);
      })
      .catch(err => {
        res.status(500).json({ error: "The answers could not be retrieved." });
      });
  });


  module.exports = router;
