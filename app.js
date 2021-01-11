const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./utils/config.js");
const scoresRouter = require("./controllers/scores");
const usersRouter = require("./controllers/users");

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(scoresRouter);
app.use(usersRouter);

module.exports = app;
