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

app.post("/billing", (req, res) => {
  console.log(req.body);
  res.send("POST BILLING");
});

app.listen(3000, () => {
  console.log("Billing service is running on port 3000, mapped to 5004 via docker compose");
});