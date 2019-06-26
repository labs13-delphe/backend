// Packages
const router = require("express").Router();

// Data
const Users = require("./users-model.js");

// Endpoints

router.get("/", async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id/questions", (req, res) => {
  const id = req.params.id;
  Users.findUserQuestions(id)
    .then(user => {
      // if a user with an ID field exists
      if (user.id) {
        res.status(200).json(user);
      } else {
        res
          .status(404)
          .json({ error: "Whoops. This user could not be found." });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "Uh oh. This user's information could not be retrieved."
      });
    });
});

router.delete("/:id", async (req, res) => {
  try {
    const removed = await Users.remove(req.params.id);
    if (removed) {
      res.status(204).json({ success: "User removed" });
    } else {
      res
        .status(404)
        .json({ message: "The User with the specified ID does not exist." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const user = req.body;

  if (user.username) {
    try {
      const inserted = await Users.add(user);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error creating the user" });
    }
  } else {
    res.status(400).json({ message: "Please provide name of the user" });
  }
});

router.put("/:id", async (req, res) => {
  const changes = req.body;

  if (changes.username) {
    try {
      const updated = await Users.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: "That user does not exist"
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error updating the user" });
    }
  } else {
    res.status(400).json({
      message: "Please provide the name of the user"
    });
  }
});


module.exports = router;
