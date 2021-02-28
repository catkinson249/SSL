"use strict"
var express = require("express");
var request = require("request");
//MISSING LIBRARY CHECK YOUR ERRORS ON THE CONSOLE
var app = express();
var router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/",function(req, res){

    res.render("index",{pagename:"Home"}); 

})


router.get("/form", function (req, res) {
    var html = res.render("form",{pagename:"Form"}); 
    res.send(html);
})

router.post("/awsdata", function (req, res) {
    var email = req.body.email; // Complete the missing pieces
    res.send('email')
    var password = req.body.password;// Complete the missing pieces
    request(" https://a29vvdusx6.execute-api.us-east-2.amazonaws.com/prod/", { json: true }, (err, response, body) => {
        if (err) { return console.log(err) };
        if (body.Count > 0) {
            res.send("Email: " + email + " Password: " + password+" successfully logged in");
        } else {
           res.send("ERROR! Please try again");
        }
    })
    
})
app.use("/", router);
app.listen("8080");