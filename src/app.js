const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello from the server server server hlo");
});
app.use("/test", (req, res) => {
  res.send("Hello from the test server");
});
app.use("/secret", (req, res) => {
  res.send("No secret");
});
app.use("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777, () => {
  console.log("Server is listening");
});
