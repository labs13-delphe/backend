// Packages
const askersRouter = require("express").Router();
const bcrypt = require("bcryptjs");

// Data
const askers = require("./askers-model.js");

// ========  For endpoints beginning with /api/askers

// Find All Askers
askersRouter.get("/", (req, res) => {
    askers
      .findAskers()
      .then(askers => {
        res.status(200).json(askers);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: "The askers information could not be retrieved." });
      });
  });
  
  // Find Asker (w/ stories) by ID
  askersRouter.get("/:id", (req, res) => {
    const askerId = req.params.id;
    askers
      .findAskerById(askerId)
      .then(asker => {
        if (asker) {
          res.status(200).json(asker);
        } else {
          res.status(404).json({ error: "This asker could not be found." });
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: "This asker's information could not be retrieved." });
      });
  });
  
  
  
  module.exports = askersRouter;
  