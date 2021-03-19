var accountSid = process.env.ACe8965a1f1687a7c5b2e1c9d01b34e54d;
var authToken = process.env.b0fe895d43ccc01042c03aa54fff50ef;

var express = require("express");
var twilio = require("twilio")(accountSid , authToken);
var bodyParser = require("body-parser");
var tel;

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, resp, next) {
    resp.sendFile(__dirname + "/test.html");
})
app.post("/mes", function (req, resp, next) {
    tel = req.body["mes"];
    twilio.messages
    .create({body: "Hi there!" , from: "+15017122661" , to: })
    console.log("sent");
})

app.listen(5002);
console.log("server is running on port 5002");