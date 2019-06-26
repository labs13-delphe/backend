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

// Get Answer by ID
router.get("/:id", (req, res) => {
  const answerId = req.params.id;
  Answers.findById(answerId)
    .then(answer => {
      // if a question with an ID field exists (since an empty answer array was being returned even if 'question' didn't exist)
      if (answer.id) {
        res.status(200).json(answer);
      } else {
        res
          .status(404)
          .json({ error: "Whoops. This answer could not be found." });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "Uh oh. This answer's information could not be retrieved."
      });
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
        Answers.find().then(answers => {
          res.status(200).json({
            message: `${count} ${count > 1 ? "answers" : "answer"} updated!`,
            answers
          });
        });
      })
      .catch(({ message }) => {
        res.status(500).json({ error: message });
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


// ===================================

// Get Answers by user
router.get("/users/:id", (req, res) => {
  console.log(req.body)
  Answers.findUserAnswers(req.params.id)
    .then(answers => {
      res.status(200).json(answers);
    })
    .catch(err => {
      res.status(500).json({ error: "The answers could not be retrieved." });
    });
});

// Get Answers by question id
router.get("/questions/:id", (req, res) => {
  console.log(req.body)
  Answers.findByQuestionId(req.params.id)
    .then(answers => {
      res.status(200).json(answers);
    })
    .catch(err => {
      res.status(500).json({ error: "The answers could not be retrieved." });
    });
});



module.exports = router;
