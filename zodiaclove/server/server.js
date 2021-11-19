const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {
  useNewURLParser: true,
});

const database = mongoose.connection;

database.on("error", (error) => {
  console.error(error);
});

database.once("open", () => {
  console.log("success");
});

app.listen(port, () => {
  console.log(`Connection at port ${port}`);
});

const UserRoute = require("./routes/User");

app.use("/users", UserRoute);
