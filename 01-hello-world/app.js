const http = require("http");
// Có thể convert sang ES module nhưng cần package.json, nên nếu dùng import thì phải npm init và nhét type="module" vào
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world!");
});
server.listen(port, () =>
  console.log(
    `server started on
port ${port}; ` + "press Ctrl-C to terminate...."
  )
);
