const path = require("path");
const staticFileHandler = require("./staticFileHandler");

const handleStaticFiles = (req, response) => {
  const filePath = `./client${req.url.replace("./", "")}`;
  // Get the extension name aka the string after the dot. For example, a url like
  // https://example.com/assets/main.css will result in extension name of css.
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".wav": "audio/wav",
    ".mp4": "video/mp4",
    ".woff": "application/font-woff",
    ".ttf": "application/font-ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".otf": "application/font-otf",
    ".wasm": "application/wasm",
    ".ico": "image/x-icon",
  };
  const contentType = mimeTypes[extname] || "application/octet-stream";
  return staticFileHandler(req, response, filePath, contentType);
};

const handleApi = (response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ message: "Hello from the server" }));
};

const requestListener = (req, response) => {
  // get the relative url for the request. For example, relative url for a request
  // to https://example.com is /.
  const { url } = req;
  console.log(url);
  // Inside the project directory, the static files are located under the
  // /public directory
  if (url === "/") {
    return staticFileHandler(req, response, "./client/index.html", "text/html");
  }

  if (url.includes('api')) {
    return handleApi(response);
  }

  if (url.includes("public")) {
    return handleStaticFiles(req, response);
  }
  return staticFileHandler(req, response, "./client/oops.html", "text/html");
};

module.exports = requestListener;
