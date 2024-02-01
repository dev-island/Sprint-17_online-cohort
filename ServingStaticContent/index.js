const http = require("http");
const fs = require("fs");
const requestListener = require("./requestListener");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
