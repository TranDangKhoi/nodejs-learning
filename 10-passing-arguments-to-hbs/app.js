const express = require("express");
const expbs = require("express-handlebars").engine;

const app = express();

app.engine(
  "handlebars",
  expbs({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
// Routing
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Server is starting at port ${port}`);
});
