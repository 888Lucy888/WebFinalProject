const mongoose = require("mongoose");

mongoose.connect(process.env.ATLAS_URI, {
  useNewURLParser: true,
  useCreateIndex: true,
});

const database = mongoose.connection;

database.on("error", (error) => {
  console.error(error);
});

database.once("open", () => {
  console.log("success");
});

const User = new mongoose.Schema({
  name: String,
  last_name: String,
  password: String,
  email: String,
  birth: Date,
  sign: String,
  hobbies: Array,
});

export default User;
