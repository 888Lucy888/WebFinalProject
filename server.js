const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.bodyParser());
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//GET method at the beginning   after that only POST

app.listen(3000, ()=>{
    console.log("The server is aaaliiveeee!!")
});

app.route("/route").
    get((req, res)=>{

    })
    .post((req,res) =>{
        var name = req.body.var;
        console.log(name);
        // on index.html use <%=var%>
        res.render(__dirname+"/html/route.html", {name: name});
    })

//SHOW HTML FILE - PARMETERS TRAVEL THROUGH THE URL (Easy to see in clear text in URL)
app.get("/", (req, res) => {
    //res.sendFile(__dirname + "/index.html");
});

//POST ROUTE - ENCRIPTED TRAVEL (More secure than get)
app.post("/", (req, res) => {
    //res.send("Your BMI is " + (weight / (height * height)));
});