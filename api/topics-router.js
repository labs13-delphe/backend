const router = require("express").Router();
const Topics = require("./topics-model.js");

// Get All Topics
router.get("/", (req, res) => {
  Topics.find()
    .then(topics => {
      res.status(200).json(topics);
    })
    .catch(err => {
      res.status(500).json({ error: "The topics could not be retrieved." });
    });
});


// Get All Question Topics
router.get("/question", (req, res) => {
  Topics.findQuestionTopics()
    .then(topics => {
      res.status(200).json(topics);
    })
    .catch(err => {
      res.status(500).json({ error: "The question topics could not be retrieved." });
    });
});

// Find Topic by Name through POST request
// Think how a user is found through posting to a login route
router.post("/", (req, res) => {
  let { topic } = req.body;
  if (!topic) {
    res.status(400).json({
      error: "Whoops! Your request must include a topic field."
    });
  } else {
    Topics.findBy({ topic })
      .then(topicID => {
        if (topicID) {
          res.status(200).json(topicID);
        } else {
          res.status(404).json({
            error: "This topic is not in the database (does not have an ID)."
          });
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: "Uh oh! There was an error finding this topic." });
      });
  }
});

// Post Question_Topic
router.post("/question", (req, res) => {
  const record = req.body;
  if (!record || !record.question_id || !record.topic_id) {
    res.status(400).json({
      error:
        "Whoops! You must submit a record with a topic_id and question_id field."
    });
  } else {
    Topics.addQuestionTopic(record, "id")
      .then(record => {
        res.status(200).json(record);
      })
      .catch(err => {
        res.status(500).json({
          error:
            "Uh oh. There was an error while posting the record to the database."
        });
      });
  }
});

// Post Expert_Topic
router.post("/expert", (req, res) => {
  const record = req.body;
  if (!record || !record.user_id || !record.topic_id) {
    res.status(400).json({
      error:
        "Whoops! You must submit a record with a topic_id and user_id field."
    });
  } else {
    Topics.addExpertTopic(record, "id")
      .then(record => {
        res.status(200).json(record);
      })
      .catch(err => {
        res.status(500).json({
          error:
            "Uh oh. There was an error while posting the record to the database."
        });
      });
  }
});

router.get("/expertTopics/:id", (req, res) => {
  const id = req.params.id
  Topics.getExpertTopics(id)
    .then(topics => {
      res.status(200).json(topics);
    })
    .catch(err => {
      res.status(500).json({ error: "The question topics could not be retrieved." });
    });
});

module.exports = router;
