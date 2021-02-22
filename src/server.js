const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hi world!");
});

module.exports = app;
