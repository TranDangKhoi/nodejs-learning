const express = require("express");
const expbs = require("express-handlebars").engine;
const port = 3000;
const app = express();

app.engine(
  "handlebars",
  expbs({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");

app.get("/headers", (req, res) => {
  res.type("text/plain");
  const headers = Object.entries(req.headers).map(
    ([key, value]) => `${key}: ${value}`
  );
  res.send(headers.join("\n"));
});

app.get("/", (req, res) => {
  res.status(500).render("home");
});
// Cách viết rút gọn
app.get("/errors", (req, res) => {
  res.status(500).render("errors");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
