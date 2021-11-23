const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = 8080;
const mongoose = require("mongoose");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
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

const UserRoute = require("./routes/User");
app.use("/users", UserRoute);

const MatchRoute = require("./routes/Match");
app.use("/matches", MatchRoute);

app.listen(port, () => {
  console.log(`Connection at port ${port}`);
});
