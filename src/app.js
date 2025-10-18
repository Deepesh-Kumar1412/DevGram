const express = require("express");

const connectDB = require("./config/database");

const app = express();

connectDB()
  .then(() => {
    console.log("Database established");
    app.listen(7777, () => {
      console.log("Server is listening");
    });
  })
  .catch((err) => {
    console.error("Database not established");
  });
