const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../database/connection");

const objectID = require("mongodb").ObjectId;

recordRoutes.route("/user/add").post(function (req, response) {
  let db_connect = dbo.getDatabase();
  let myObj = {
    email: req.body.email,
    first_name: req.body.fname,
    last_name: req.body.lname,
    password: req.body.password,
  };
  db_connect.collection("users").insertOne(myObj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = recordRoutes;
