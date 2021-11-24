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
  var dates = date.split("-");
  const month = parseInt(dates[1]);
  const day = parseInt(dates[2]);

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

router.get("/", function (req, res) {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

router.post("/login", function (req, res) {
  console.log(req.body.email);
  console.log(req.body.password);

  const email = req.body.email;
  const pass = req.body.password;

  UserModel.findOne({ email: email, password: pass })
    .lean()
    .exec(function (err, users) {
      console.log(JSON.stringify(users));
      return res.end(JSON.stringify(users));
    });
});

router.post("/update", function (req, res) {
  const name = req.body.name;
  const last_name = req.body.last_name;
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  const hobbies = req.body.hobbies;
  const birth = req.body.bd;
  const bio = req.body.bio;
  const gender = req.body.gender;
  const sign = getSign(birth);

  UserModel.findOneAndUpdate(
    { email: newEmail },
    {
      name: name,
      last_name: last_name,
      password: newPassword,
      hobbies: hobbies,
      bio: bio,
      birth: birth,
      sign: sign,
      gender: gender,
    }
  );

  //Add then catch functions
});

router.get("/signup", function (req, res) {
  res.send("Something");
});

router.post("/signup", function (req, res) {
  console.log("Entered signup post");

  const name = req.body.name;
  const last_name = req.body.last_name;
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  const hobbies = req.body.hobbies;
  const birth = req.body.bd;
  const bio = req.body.bio;
  const gender = req.body.gender;
  const sign = getSign(birth);

  const newUser = new UserModel({
    name: name,
    last_name: last_name,
    password: newPassword,
    email: newEmail,
    hobbies: hobbies,
    bio: bio,
    birth: birth,
    sign: sign,
    gender: gender,
  });

  UserModel.find({ email: newEmail }, function (err, docs) {
    if (err) {
      console.error("User already exists with this email");
      res.json({ code: 1, message: "User already exists with this email" });
    } else {
      newUser
        .save()
        .then(() => {
          console.log("User added");
          res.json({ code: 0, message: "User added" });
        })
        .catch((err) => res.json({ code: 1, message: err.message }));
    }
  });
});

router.post("/match", function (req, res) {
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
