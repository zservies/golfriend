const Improvement = require("../models/improvement.js");
const improvementRouter = require("express").Router();

improvementRouter.get("/improvement", async (req, res) => {
  const improvementItems = await Improvement.find({});
  res.json(improvementItems);
});

improvementRouter.get("/improvement/:id", async (req, res) => {
  const id = req.params.id;
  const improvementItems = await Improvement.findById(id);
  res.json(improvementItems);
})

improvementRouter.post("/improvement", async (req, res) => {
  const improvement = new Improvement({
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    clubType: req.body.clubType,
  });
  try {
    const savedItem = await improvement.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

improvementRouter.put("/improvement/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const result = await Improvement.findByIdAndUpdate(id, body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

// TODO: Maybe make a way to delete by sending a request rather than a parameter?
improvementRouter.delete("/improvement/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Improvement.findByIdAndDelete(id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = improvementRouter;
