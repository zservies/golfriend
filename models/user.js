const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Scores = require("./scores");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: String,
  passwordHash: String,
  scores: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Scores",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.passwordHash;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = User;
