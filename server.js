require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");


app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
const dbURI = process.env.MONGO_URI;


app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index");
});


app.get("/about", (req, res) => {
  res.render("about");
});


app.listen(PORT, () => {
  console.log("Serveren kjører på port 3000!");
});

app.use(authRoutes);