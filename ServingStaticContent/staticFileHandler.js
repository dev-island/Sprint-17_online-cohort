const fs = require("fs");
const staticFileHandler = (req, res, filePath, contentType) => {
  fs.readFile(filePath, (err, content) => {
    console.log(err)
    if (err) {
      res.writeHead(500);
      res.end(`Sorry, check with the site admin for error: ${err.code}`);
    } else {
      res.writeHead(200, { "Content-Type": contentType }); // indicate the request was successful
      res.end(content, "utf-8");
    }
  });
};

module.exports = staticFileHandler;