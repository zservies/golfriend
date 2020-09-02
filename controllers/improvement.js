const Improvement = require("../models/improvement.js");
const improvementRouter = require("express").Router();

improvementRouter.get("/improvement", async (req, res) => {
  const improvementItems = await Improvement.find({});
  res.json(improvementItems);
});

improvementRouter.post("/improvement", async (req, res) => {
  const improvement = new Improvement({
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    clubType: req.body.clubType,
  });
  try {
    const savedItem = await improvement.save();
    response.status(201).json(savedItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = improvementRouter;
