const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./api/users");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

const dbo = require("./database/connection");

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Connection at port ${port}`);
});
