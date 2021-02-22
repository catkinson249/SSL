"use strict"

var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

var express = require("express");
var request = require("request");

let ejs = require("ejs");
const router = express.Router();

var app = express();
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);


var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const session = require("express-session");
app.use(session({ secret: "secret", saveUninitialized: true, resave: true }));
var sess;

router.get('/', function (req, res) {
	sess = req.session;
	res.render('index', { pagename: 'Home', sess: sess });
});



router.get("/about", function (req, res) {
	sess = req.session;
	res.render("about", { pagename: "About", sess: sess });
});

router.get("/profile", function (req, res) {
	sess = req.session;
	if (typeof (sess) == "undefined" || sess.loggedin != true) {
		var errors = ['Not an authenticated user'];
		res.render('index', { pagename: "Home", errors: errors })
	} else {
		res.render('profile', { pagename: "Profile", sess: sess })
	}
})

router.post("/logout", function (req, res) {
	sess = req.session;
	sess.destroy(function (err) {
		res.redirect("/");
	})
})

router.post("/login", function (req, res) {
	// console.log(req.body);

	var errors = [];
	if (req.body.email == "") {
		errors.push("Email is required");
	}

	if (req.body.password == "") {
		errors.push("Password is required");
	}

	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\W+)*(\.\w{2,3})+$/.test(req.body.email)) {
		errors.push("Email invalid");
	}


	if (!/^[a-zA-Z]\w{3,14}$/.test(req.body.password)) {
		errors.push("Password invalid");
	}


	// email mike@aol.com pass abc123
	if(req.body.email != "mike@aol.com")||(req.body.password !="abc123"){
		errors.push("Incorrect email and password");
	}

	sess = req.session;
	sess.loggedin = true;
	session.email = req.body.email;
	res.render('profile', { pagename: 'Home', errors: errors, sess: sess });
})

router.post("/register", function (req, res) {


	// first & last name
	if (/^[a-zA-Z]+[a-zA-Z]$/.test(req.body.name)) {
		errors.push("Names are not valid");
	}

	// address
	if (/^\s*\S+(?:\s+S+){2}$/.test(req.body.address)) {
		errors.push("Address is valid");
	}

	// city
	if (/^[A-Za-z]$/.test(req.body.city)) {
		errors.push("City not valid");
	}

	// state
	if (/^[A-Z]{2}$/.test(req.body.state)) {
		errors.push("State not valid");
	}

	// zip
	if (/^\d{5}$/.test(req.body.zip)) {
		errors.push("Zip not valid");
	}

	if (req.body.age == "") {
		errors.push('Age is required!');
	};

	if (req.body.gender != "male" || req.body.gender != "female") {
		errors.push('Gender is required!');
	}

	if (req.body.bio == "") {
		errors.push('Bio is required!');
	};


	res.render('index', { pagename: 'Home', errors: errors });
})

app.use(express.static("public"));
app.use("/", router);
var server = app.listen("8001")


























