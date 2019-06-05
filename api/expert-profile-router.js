// Packages
const expertRouter = require("express").Router();
const bcrypt = require("bcryptjs");

// Data
const experts = require("./expert-profile-model.js");

// ========  For endpoints beginning with /api/experts

// Find All Experts
expertRouter.get("/", (req, res) => {
  experts
    .find()
    .then(experts => {
      res.status(200).json(experts);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The experts information could not be retrieved." });
    });
});

// Find expert by user_ID
expertRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  experts
    .findById(id)
    .then(expert => {
      if (expert) {
        res.status(200).json(expert);
      } else {
        res.status(404).json({ error: "This expert could not be found." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "This expert's information could not be retrieved." });
    });
});

// Insert expert information

expertRouter.post("/", (req, res) => {
  const expert = req.body;
  experts
    .insert(expert)
    .then(expert => {
      res.status(200).json(expert);
    })
    .catch(err => {
      res.status(500).json({ error: "expert information could not be posted" });
    });
});

module.exports = expertRouter;
