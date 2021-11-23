const router = require("express").Router();
const mailer = require("nodemailer");

let UserModel = require("../database/models/User.model");

const mailClient = mailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EPASS,
  },
});

router.route("/").get((req, res) => {
  UserModel.find()
    .lean()
    .exec(function (err, users) {
      return res.end(JSON.stringify(users));
    });
});

router.route("/match").post((req, res) => {
  const mail1 = req.body.mailOne;
  const mail2 = req.body.mailTwo;

  var mailto = {
    from: process.env.EMAIL,
    to: mail1,
    subject: "You were accepted <3",
    text: "You match was reciprocated",
  }; //Maybe we can add a compatability here in the mail

  mailClient.sendMail(mailto, (err, inf) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Email sent to ${mail1}`);
    }
  });

  //TODO move the match from the database

  UserModel.findOneAndUpdate(
    { email: mail1 },
    { $addToSet: { matches: mail2 } }
  );
  UserModel.findOneAndUpdate(
    { email: mail1 },
    { $pull: { potentialMatches: mail2 } }
  );
  UserModel.findOneAndUpdate(
    { email: mail2 },
    { $addToSet: { matches: mail1 } }
  );
  UserModel.findOneAndUpdate(
    { email: mail2 },
    { $pull: { potentialMatches: mail1 } }
  );
});

router.route("/match").delete((req, res) => {
  const mail1 = req.params.mailOne;
  const mail2 = req.params.mailTwo;

  var mailto = {
    from: process.env.EMAIL,
    to: mail1,
    subject: "You were rejected </3",
    text: "You match was denied",
  };

  mailClient.sendMail(mailto, (err, inf) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Email sent to ${mail1}`);
    }
  });

  //TODO remove the match from the database

  UserModel.findOneAndUpdate(
    { email: mail1 },
    { $addToSet: { rejectedPeople: mail2 } }
  );
  UserModel.findOneAndUpdate(
    { email: mail1 },
    { $pull: { potentialMatches: mail2 } }
  );
  UserModel.findOneAndUpdate(
    { email: mail2 },
    { $addToSet: { rejectedPeople: mail1 } }
  );
  UserModel.findOneAndUpdate(
    { email: mail2 },
    { $pull: { potentialMatches: mail1 } }
  );
});

module.exports = router;
