const Score = require("../models/scores");
const scoresRouter = require("express").Router();
const scoreHelper = require("../utils/score_helper");

scoresRouter.get("/scores", async (req, res) => {
  const scores = await Score.find({});
  res.json(scores);
});

scoresRouter.post("/scores", async (req, res) => {
  const scoreToPar = scoreHelper.scoreToPar(req.body.score, req.body.coursePar); // Calls helper function to calculate shots over/under par.

  const score = new Score({
    course: req.body.course,
    score: req.body.score,
    courseRating: req.body.courseRating,
    courseSlope: req.body.courseSlope,
    coursePar: req.body.coursePar,
    scoreToPar: scoreToPar,
  });

  try {
    const savedScore = await score.save();
    res.status(201).json(savedScore);
  } catch (error) {
    res.status(400).send(error);
  }
});

// TODO: Add ability to edit/delete scores, store courses, etc.
scoresRouter.delete("/scores/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Score.findByIdAndDelete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

// NOTE: Sending current values in request body from UI even if not updated. Basically update entire item every update.
scoresRouter.put("/scores/:id", async (req, res) => {
  const id = req.params.id;
  const scoreToPar = scoreHelper.scoreToPar(req.body.score, req.body.coursePar);
  const score = {
    course: req.body.course,
    score: req.body.score,
    coursePar: req.body.coursePar,
    scoreToPar: scoreToPar,
  };
  try {
    const result = await Score.findByIdAndUpdate(id, score);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = scoresRouter;
