//DOKUMENTATION: https://www.youtube.com/watch?v=L72fhGm1tfE
//Autoserver: 15:00
//request response

const express = require("express");
//Node JS path module to deal with filepaths
const path = require("path");
const bodyParser = require("body-parser");

var cors = require("cors");
const { get } = require("http");

//Init Express
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let surveys = {};

//SENDING DATA TO SERVER
app.post("/doasurvey", (req, res) => {
  if (req.body.email in surveys) {
    //WELCHE EMAIL IST DAS?
    surveys[req.body.email] = []; // Resettet die bestehenden Daten
    surveys[req.body.email].push(req.body.data);
    // console.log(surveys);
  } else {
    surveys[req.body.email] = [];
    surveys[req.body.email].push(req.body.data);
    console.log(surveys);
  }
  res.end();
});

//Create endpoints/route handelers
//req is there to get something out of the server
app.get("/:email/surveys", (req, res) => {
  if (surveys[req.params.email] === undefined) {
    res.json([]);
  } else {
    res.json(surveys[req.params.email]);
  }
});

app.get("/", (req, res) => {
  res.send("SERVER AT PORT 5000");
  // res.send("<h1>Hello World!!!!</h1>");
});

//PORT
const port = process.env.PORT || 5000;
app.listen(port);
console.log("APP IS LISTENIN ON PORT " + port + ": http://localhost:5000/");
