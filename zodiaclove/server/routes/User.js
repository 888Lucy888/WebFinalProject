const router = require("express").Router();

let UserModel = require("../database/models/User.model");

router.route("/").get((req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/signup").post((req, res) => {
  const name = req.body.name;
  const last_name = req.body.last_name;
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  const hobbies = [""];
  const birth = "";
  const sign = "";

  const newUser = new UserModel({
    name,
    last_name,
    newPassword,
    newEmail,
    hobbies,
    birth,
    sign,
  });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
