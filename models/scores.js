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
  courseRating: {
    type: Number,
    required: false,
  },
  courseSlope: {
    type: Number,
    required: false,
  },
  coursePar: {
    type: Number,
    required: true,
  },
});

scoresSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Scores", scoresSchema);
