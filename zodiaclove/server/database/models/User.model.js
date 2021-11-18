const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const UserSchema = new Schema({
  name: String,
  last_name: String,
  password: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hobbies: Array,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
