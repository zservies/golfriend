const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./utils/config.js");
const improvementRouter = require("./controllers/improvement");
const scoresRouter = require("./controllers/scores");

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(improvementRouter);
app.use(scoresRouter);

module.exports = app;
