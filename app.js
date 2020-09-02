const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// const config = require('./utils/config.js');

// mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

const testData = [
  {
    username: 'test',
    age: 12
  },
  {
    username: 'test2',
    age: 145
  }
]

app.get("/", async (req, res) => {
  res.send(testData);
});

app.post("/improvement", async (req, res) => {
  req.body.forEach(item=>{
    testData.push(item);
  })
  res.send(testData);
})

module.exports = app;
