const express = require("express");

const connectDB = require("./config/database");

const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Deepesh",
    lastName: "Kumar",
    emailID: "deepesh@2003",
    password: "deepesh@1234",
  });

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("error saving file" + err.message);
  }
});

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
