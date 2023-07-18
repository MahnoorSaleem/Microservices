// imports
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");


// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// ! SHIPPING OPERATIONS
app.get("/shipping", (req, res) => {
  res.send("GET SHIPPING");
});

app.post("/shipping", (req, res) => {
  console.log(req.body);
  // res.send("POST SHIPPING");
  axios.post("http://billing-service:3000/billing", req.body)
  .then(response => {
    console.log(response.data);
    res.send("POST SHIPPING");
  })
  .catch(error => {
    console.error(error);
    res.status(500).send("Error occurred while sending data to billing-service");
  });
});

app.put("/shipping", (req, res) => {
  res.send("PUT SHIPPING");
});

app.delete("/shipping", (req, res) => {
  res.send("DELETE SHIPPING");
});

app.listen(3002);
