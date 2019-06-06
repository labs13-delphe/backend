const router = require("express").Router();
const Topics = require("./topics-model.js");

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
          res
            .status(404)
            .json({
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

module.exports = router;
