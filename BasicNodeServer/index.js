const http = require("http");
const fs = require("fs");
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
}).listen(80);
