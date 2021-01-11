const mongoose = require("mongoose");

const scoresSchema = mongoose.Schema({
  course: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  greensInReg: {
    type: Number,
    required: false,
  },
  noOfFairways: {
    type: Number,
    required: false,
  },
  noOfPutts: {
    type: Number,
    required: false,
  },
  coursePar: {
    type: Number,
    required: true,
  },
  scoreToPar: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// TODO: Add dates to scores.

scoresSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString(); // Converting ID to string and reassigning to id instead of _id.
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Scores", scoresSchema);
