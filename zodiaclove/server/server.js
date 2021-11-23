const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = 8080;
const mongoose = require("mongoose");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {
  useNewURLParser: true,
});

const database = mongoose.connection;

database.on("error", (error) => {
  console.error(error);
});

database.once("open", () => {
  console.log("success");
});

//Test
app.get("/test", (req, res) => {
  const matches =[
    {
      name:"Joe Banana",
      desc:"Hi I'm hot",
      img:"https://i.pinimg.com/originals/28/d3/83/28d3837232911297b40210071de67297.png",
      sign:"Aries",
      id:"1232"
    },
    {
      name:"Sally",
      desc:"I like painting",
      img:"https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-dp-images-5.jpg",
      sign:"Libra",
      id:"23298"
    }
  ];

  res.json(matches);
})



const UserRoute = require("./routes/User");

app.use("/users", UserRoute);

app.listen(port, () => {
  console.log(`Connection at port ${port}`);
});
