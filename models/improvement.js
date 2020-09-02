const mongoose = require("mongoose");

const improvementSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  clubType: {
    type: String,
    required: true,
  },
});

improvementSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString(); // Converting ID to string and reassigning to id instead of _id.
    delete returnedObject.__v; // Removing Mongo's automatic versioning for items.
    delete returnedObject._id; // Removing _id after conversion to id.
  }
})
module.exports = mongoose.model("Improvement", improvementSchema);
