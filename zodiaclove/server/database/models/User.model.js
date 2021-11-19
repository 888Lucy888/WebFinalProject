const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const UserSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hobbies: Array,
  //birth: { type: String, required: true },
  //sign: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
