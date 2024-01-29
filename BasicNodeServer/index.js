const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const root = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  res.statusCode = 200;

  switch(req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end("");
      break;
    case "/about":
      res.setHeader("Content-Type", "text/plain");
      res.end("About Page\n");
      break;
    case "/contact":
      res.setHeader("Content-Type", "text/plain");
      res.end("Contact Page\n");
      break;
    default:
      res.setHeader("Content-Type", "text/plain");
      res.end("404 Page\n");
      break;
  }
  // res.setHeader("Content-Type", "text/plain");
  // res.end("Hello Wor\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
