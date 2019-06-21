const router = require("express").Router();

const Questions = require("../api/questions-model");

// GET ALL QUESTIONS

router.get("/", (req, res) => {
  Questions.find()
    .then(questions => {
      res.status(200).json(questions);
    })
    .catch(err => {
      res.status(500).json({ error: "The questions could not be retrieved." });
    });
});

//Temporary
router.get("/questionTopics", (req, res) => {
  console.log(req.query)
  const topic_ids = req.query.topicIds
  console.log(topic_ids)
  Questions.getQbyT(topic_ids)
    .then(questions => {
      res.status(200).json(questions);
    })
    .catch(err => {
      res.status(500).json({ error: "The questions could not be retrieved." });
    });
});

// GET QUESTION BY ID

router.get("/:id", (req, res) => {
  const questionId = req.params.id;
  Questions.findById(questionId)
    .then(question => {
      // if a question with an ID field exists (since an empty answer array was being returned even if 'question' didn't exist)
      if (question.id) {
        res.status(200).json(question);
      } else {
        res
          .status(404)
          .json({ error: "Whoops. This question could not be found." });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "Uh oh. This question's information could not be retrieved."
      });
    });
});

//GET QUESTION BY TOPIC

router.get("/topic/:id", (req, res) => {
  const topicId = req.params.id;
  console.log(topicId)
  Questions.getQuestionsByTopic(topicId)
    .then(questions => {
      // if a question with an ID field exists (since an empty answer array was being returned even if 'question' didn't exist)
      if (questions) {
        res.status(200).json(questions);
      } else {
        res
          .status(404)
          .json({ error: "Whoops. This question could not be found." });
      }
    })
    .catch(({message}) => {
      res.status(500).json({
        error: message
      });
    });
});

// POST QUESTION

router.post("/", (req, res) => {
  const question = req.body;
  if (!question || !question.user_id || !question.title || !question.question) {
    res.status(400).json({
      error:
        "Whoops! You must submit a question with a user_id, title, and question field."
    });
  } else {
    Questions.add(question, "id")
      .then(question => {
        res.status(200).json(question);
      })
      .catch(err => {
        res.status(500).json({
          error:
            "Uh oh. There was an error while posting the question to the database."
        });
      });
  }
});

// UPDATE QUESTION

router.put("/:id", (req, res) => {
  const question = req.body;
  const questionId = req.params.id;

  if (!question || !question.user_id || !question.title || !question.question) {
    res.status(400).json({
      error:
        "Whoops! You must submit a question with a user_id, title, and question field."
    });
  } else {
    Questions.update(questionId, question)
      .then(count => {
        if (count > 0) {
          res.status(200).json({
            message: `${count} ${count > 1 ? "questions" : "question"} updated!`
          });
        } else {
          res.status(404).json({ error: "This question could not be found." });
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: "There was an error while updating the question." });
      });
  }
});

// DELETE QUESTION

router.delete("/:id", (req, res) => {
  const questionId = req.params.id;
  Questions.remove(questionId)
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: `${count} ${count > 1 ? "questions" : "question"} deleted!`
        });
      } else {
        res
          .status(404)
          .json({ error: "Whoops. This question could not be found." });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "Uh oh. There was an error while deleting the question."
      });
    });
});

module.exports = router;
