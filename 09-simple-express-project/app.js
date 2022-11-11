const express = require("express");
const expbs = require("express-handlebars").engine;

const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", expbs());
app.set("view engine", "handlebars");

// Routing
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Server is starting at port ${port}`);
});
