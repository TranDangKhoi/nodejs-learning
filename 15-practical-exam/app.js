const express = require("express");
const expressHandlebars = require("express-handlebars").engine;
const bodyParser = require("body-parser");
const multiparty = require("multiparty");
const handlers = require("./lib/handlers");

const port = process.env.PORT || 3000;
const app = express();

app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
    helpers: {
      section: function (name, options) {
        if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      },
    },
  })
);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get("/", handlers.home);

app.get("/apply", handlers.applyForJob);
app.get("/thank-you", handlers.thanks);

app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}` +
      "; press Ctrl-C to terminate."
  );
});
