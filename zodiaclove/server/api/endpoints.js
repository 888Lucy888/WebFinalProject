const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../database/connection");

const objectID = require("mongodb").ObjectId;

recordRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb("zodiac");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/user/add").post(function (req, response) {
  let db_connect = dbo.getDatabase();
  let myObj = {
    email: req.body.person_email,
    first_name: req.body.person_name,
    last_name: req.body.person_last_name,
    password: req.body.person_password,
  };
  db_connect.collection("users").insertOne(myObj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = recordRoutes;
