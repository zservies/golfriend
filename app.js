const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// const config = require('./utils/config.js');




// mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('WELCOME TO THE PROJECT');
})

module.exports = app;