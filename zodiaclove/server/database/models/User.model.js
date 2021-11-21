const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hobbies: String,
  birth: { type: Date, required: true },
  sign: { type: String, required: true },
  gender: String,
  matches: [String],
  potentialMatches: [String],
  rejectedPeople: [String],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
