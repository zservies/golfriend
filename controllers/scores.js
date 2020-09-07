const Score = require("../models/scores");
const scoresRouter = require("express").Router();

scoresRouter.get("/scores", async (req, res) => {
  const scores = await Score.find({});
  res.json(scores);
});



// TODO: Calculate shots over/under PAR based on score/PAR submitted.
scoresRouter.post("/scores", async (req, res) => {
  const score = new Score({
    course: req.body.course,
    score: req.body.score,
    courseRating: req.body.courseRating,
    courseSlope: req.body.courseSlope,
    coursePar: req.body.coursePar,
  });

  try {
    const savedScore = await score.save();
    res.status(201).json(savedScore);
  } catch (error) {
    res.status(400).send(error);
  }
});

// TODO: Add ability to edit/delete scores, store courses, etc.

module.exports = scoresRouter;