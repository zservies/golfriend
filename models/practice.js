const mongoose = require("mongoose");

const practiceSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  totalBallsHit: {
    type: Number,
    required: true,
  },
  // TODO: This should probably be an array of drills and their descriptions.
  drills: {
    type: String,
    required: false,
  },
  // TODO: This should probably be an array of clubs hit.
  clubsHit: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: true
  }
});

practiceSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString(); // Converting ID to string and reassigning to id instead of _id.
    delete returnedObject.__v; // Removing Mongo's automatic versioning for items.
    delete returnedObject._id; // Removing _id after conversion to id.
  }
})
module.exports = mongoose.model("Practice", practiceSchema);
