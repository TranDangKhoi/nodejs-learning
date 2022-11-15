const express = require("express");
const expbs = require("express-handlebars").engine;
const port = 3000;
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

app.get("/greeting", (req, res) => {
  res.render("greeting", {
    message: "Hello esteemed programmer!",
    style: req.query.style,
    userid: req.cookies.userid,
    username: req.session.username,
  });
});

app.get("/no-layout", (req, res) => res.render("no-layout", { layout: null }));

app.get("/custom-layout", (req, res) => {
  res.render("custom-layout", { layout: "custom" });
});

// Basic form processing
app.get("/thank-you", (req, res) => {
  res.render("thank-you", {});
});
app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.post("/contact", (req, res) => {
  console.log(`received contact from ${req.body.name}<${req.body.email}>`);
  res.redirect(303, "thank-you");
});
app.get("/robust-contact", (req, res) => {
  res.render("robust-contact");
});
app.post("/robust-contact", (req, res) => {
  try {
    // here's where we would try to save contact to database or other
    // persistence mechanism...for now, we'll just simulate an error
    if (req.body.simulateError) throw new Error("error saving contact!");
    console.log(`contact from ${req.body.name} <${req.body.email}>`);
    res.format({
      "text/html": () => res.redirect(303, "/thank-you"),
      "application/json": () => res.json({ success: true }),
    });
  } catch (err) {
    // here's where we would handle any persistence failures
    console.error(
      `error processing contact from ${req.body.name} ` + `<${req.body.email}>`
    );
    res.format({
      "text/html": () => res.redirect(303, "/errors"),
      "application/json": () =>
        res.status(500).json({
          error: "error saving contact information",
        }),
    });
  }
});

app.use((req, res) => res.status(404).render("404"));

app.use((err, req, res, next) => {
  console.error("** SERVER ERROR: " + err.message);
  res
    .status(500)
    .render("error", { message: "you shouldn't have clicked that!" });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
