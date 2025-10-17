const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstname: "Deepesh", lastname: "Kumar" });
});

app.post("/user", (req, res) => {
  res.send("Hello from the post server");
});

app.patch("/user", (req, res) => {
  res.send("Hello from the patch server");
});

app.delete("/user", (req, res) => {
  console.log("Deleted successfully");
  res.send("Hello from the delete server");
});


app.use("/", (req, res) => {
  res.send("Welcome to the server");
});


app.listen(7777, () => {
  console.log("Server is listening");
});
