const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.get("/", function (req, res) {
    res.render("home.ejs");
});


app.get("/calculator", function (req, res) {
    res.render("calculator.ejs");
})


app.post("/", function (req, res) {
    res.redirect("/calculator");
});


app.post("/calculator", function (req, res) {
    firstDigit = Number(req.body.FirstDigit);
    secondDigit = Number(req.body.SecondDigit);
    sum = firstDigit + secondDigit;
    res.send("The result is: " + sum);
})


app.listen(3000, function (req, res) {
    console.log("New server on port 3000...");
});
