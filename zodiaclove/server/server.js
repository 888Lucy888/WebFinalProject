const express = require("express");
const app = express();
const cors = require("cors");
const users = require("routes/User");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(users);

app.listen(port, () => {
  console.log(`Connection at port ${port}`);
});
