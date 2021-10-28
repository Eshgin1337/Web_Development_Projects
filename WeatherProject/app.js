const express = require("express");
const https = require("https")
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});




app.post("/", function (req, res) {
    const query = req.body.city_name;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=97a89f7cf2a41f687354a111d52524f5&units=metric";
    https.get(url, function (response) {
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon_pic = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<h1>The weather in " + query + " is " + temperature + " degrees Celcius.</h1>");
            res.write("<img src=" + icon_pic + ">");
            res.send();
        });
    });
});


app.listen(3000, function () {
    console.log("New website started on port 3000...");
});
