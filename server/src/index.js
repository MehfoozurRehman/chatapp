const express = require("express");
const axios = require("axios");
const cors = require("cors");
const mongoose = require("mongoose");

// api config
const app = express();
const port = 9000;

// middlewares

// db config

// api endpoints

app.get("/", (req, res) => {
  res.json({
    message: "hello welcome to chatapp",
  });
});

// listners

app.listen(port, () => {
  console.log(`api working on ${port}`);
});
