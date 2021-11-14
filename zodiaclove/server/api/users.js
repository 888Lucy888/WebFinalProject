const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../database/connection");

const objectID = require("mongodb").ObjectId;

recordRoutes.route("/users/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myObj = {
    person_name: req.body.name,
    person_last_name: req.body.last_name,
    person_email: req.body.email,
    person_password: req.body.password,
  };
  db_connect.connection("users").insertOne(myObj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = recordRoutes;
