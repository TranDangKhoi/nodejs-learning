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
