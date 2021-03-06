// Packages
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config()


// Middleware
const restricted = require("../auth/restricted-middleware.js");

// Routes
const authRouter = require("../auth/auth-router");
const usersRouter = require("../api/users-router");
const questionsRouter = require("../api/questions-router");
const answersRouter = require("./answers-router.js");
const topicsRouter = require("./topics-router.js");


// Server
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use('/api/questions', questionsRouter);
server.use("/api/answers", answersRouter);
server.use("/api/topics", topicsRouter);

const configureRoutes = require("./stripe/index")
configureRoutes(server);


server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
