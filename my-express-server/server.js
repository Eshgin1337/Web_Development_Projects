const express = require("express");
const app = express();

app.get("/", function (request, response) {
    response.send("<h1>Hello, world!</h1>");
})

app.get("/contact", function (req, res) {
    res.send("You can contact me through: eshgin@mail.ru");
})

app.get("/about", function (req, res) {
    res.send("<h1>Hello everyone!</h1> <br> <h2>My name is Eshqin, I am a developer. Btw, a student as well!</h2>");
})

app.listen(3000, function () {
    console.log("New server started on port 3000.")
});
