const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const restricted = require("../auth/restricted-middleware.js");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../api/users-router");
const questionsRouter = require("../api/questions-router");
const profileRouter = require("../api/profile-router");
const askerRouter = require("./askers-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
//will display all users (id,username,pw)
//use  /api/users/:id to delete
server.use("/api/users", usersRouter);
//will display all questions
//use /api/questions/:id to delete-edit
<<<<<<< HEAD
server.use("/api/questions", restricted, questionsRouter);
=======
server.use('/api/questions', questionsRouter);
>>>>>>> d1b8a6b545248d7565e855059af8410154416fe7
//will display all profiles
server.use("/api/profile", restricted, profileRouter);

server.use("/api/askers", askerRouter);
server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
