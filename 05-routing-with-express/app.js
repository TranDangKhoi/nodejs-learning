import express from "express";
const app = express();
const port = process.env.PORT || 3000;
// custom 404 page
app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Meadowlark Travel");
});
app.get("/about", (req, res) => {
  res.type("text/plain");
  res.send("About Meadowlark Travel");
});
// custom 404 page
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`
  )
);
