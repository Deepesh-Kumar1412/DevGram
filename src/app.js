const express = require("express");

const app = express();

app.use(
  "/",
  (req, res, next) => {
    res.send("Welcome to the server");
    next();
  },
  (req, res, next) => {
    res.send("The second response");
  }
);

app.listen(7777, () => {
  console.log("Server is listening");
});
