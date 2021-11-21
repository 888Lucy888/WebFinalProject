const router = require("express").Router();
const mailer = require("nodemailer");

const mailClient = mailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EPASS,
  },
});

let UserModel = require("../database/models/User.model");

function getSign(date) {
  const month = date.getMonth();
  const day = date.getDay();

  if (month === 1) {
    if (day <= 19) return "Capricorn";
    else return "Aquarius";
  } else if (month === 2) {
    if (day <= 18) return "Aquarius";
    else return "Pisces";
  } else if (month === 3) {
    if (day <= 20) return "Pisces";
    else return "Aries";
  } else if (month === 4) {
    if (day <= 19) return "Aries";
    else return "Taurus";
  } else if (month === 5) {
    if (day <= 20) return "Taurus";
    else return "Gemini";
  } else if (month === 6) {
    if (day <= 20) return "Gemini";
    else return "Cancer";
  } else if (month === 7) {
    if (day <= 22) return "Cancer";
    else return "Leo";
  } else if (month === 8) {
    if (day <= 22) return "Leo";
    else return "Virgo";
  } else if (month === 9) {
    if (day <= 22) return "Virgo";
    else return "Libra";
  } else if (month === 10) {
    if (day <= 22) return "Libra";
    else return "Scorpio";
  } else if (month === 11) {
    if (day <= 21) return "Scorpio";
    else return "Sagittarius";
  } else if (month === 12) {
    if (day <= 22) return "Sagittarius";
    else return "Capricorn";
  }
}

router.route("/").get((req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/signup").post((req, res) => {
  console.log("Entered signup post");

  const name = req.body.name;
  const last_name = req.body.last_name;
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  const hobbies = req.body.hobbies;
  const birth = req.body.bd;
  const gender = req.body.gender;
  const sign = getSign(birth);

  const newUser = new UserModel({
    name: name,
    last_name: last_name,
    password: newPassword,
    email: newEmail,
    hobbies: hobbies,
    birth: birth,
    sign: sign,
    gender: gender,
  });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/match").post((req, res) => {
  const mail2 = req.params.mailTwo;

  var mailto = {
    from: process.env.EMAIL,
    to: mail2,
    subject: "You have a potential match!",
    text: `User ${req.params.mailOne} would like to match with you!`,
  };

  mailClient.sendMail(mailto, (err, inf) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Email sent to ${mail2}`);
    }
  });

  //TODO add match to potential
});

module.exports = router;
