const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about-page.html");
});

app.get("/photo-gallery", (req, res) => {
  res.sendFile(__dirname + "/views/photo-gallery-page.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works-page.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/404-page.html");
});
app.listen(port, () => {});
