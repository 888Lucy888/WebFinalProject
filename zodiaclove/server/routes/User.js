const express = require("express");
const User = require("../database/connection");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const newUser = new User({
    name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    email: req.body.email,
  });

  try {
    await newUser.save();
  } catch {
    console.error("Error saving");
  }

  res.redirect("/");
});

//router.get("/login", async (req, res) => {});
