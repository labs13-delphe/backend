const router = require("express").Router();
const Answers = require("./answers-model.js");

// Get All Answers
router.get("/", (req, res) => {
  Answers.find()
    .then(answers => {
      res.status(200).json(answers);
    })
    .catch(err => {
      res.status(500).json({ error: "The answers could not be retrieved." });
    });
});

//Get Ansewers by user
router.get("/:id", (req, res) => {
  console.log(req.body)
  Answers.findUserAnswers(req.params.id)
    .then(answers => {
      res.status(200).json(answers);
    })
    .catch(err => {
      res.status(500).json({ error: "The answers could not be retrieved." });
    });
});

// Post Answer
router.post("/", (req, res) => {
  const answer = req.body;
  if (!answer || !answer.user_id || !answer.question_id || !answer.answer) {
    res.status(400).json({
      error:
        "Whoops! You must submit a answer with a user_id, question_id, and answer field."
    });
  } else {
    Answers.add(answer, "id")
      .then(answer => {
        res.status(200).json(answer);
      })
      .catch(err => {
        res.status(500).json({
          error:
            "Uh oh. There was an error while posting the answer to the database."
        });
      });
  }
});


// Update Answer
router.put("/:id", (req, res) => {
    const answer = req.body;
    const answerId = req.params.id;
  
    if (!answer || !answer.user_id || !answer.question_id || !answer.answer) {
      res.status(400).json({
        error:
          "Whoops! You must submit a answer with a user_id, question_id, and answer field."
      });
    } else {
      Answers.update(answerId, answer)
        .then(count => {
          if (count > 0) {
            res.status(200).json({
              message: `${count} ${count > 1 ? "answers" : "answer"} updated!`
            });
          } else {
            res.status(404).json({ error: "This answer could not be found." });
          }
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: "There was an error while updating the answer." });
        });
    }
  });
  
  // Delete Answer
  
  router.delete("/:id", (req, res) => {
    const answerId = req.params.id;
    Answers.remove(answerId)
      .then(count => {
        if (count > 0) {
          res.status(200).json({
            message: `${count} ${count > 1 ? "answers" : "answer"} deleted!`
          });
        } else {
          res
            .status(404)
            .json({ error: "Whoops. This answer could not be found." });
        }
      })
      .catch(err => {
        res.status(500).json({
          error: "Uh oh. There was an error while deleting the answer."
        });
      });
  });

module.exports = router;
