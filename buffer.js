const fs = require("fs");
const http = require("http");
const file = "./trap.mp4";

http
  .createServer((req, res) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        console.log("uh oh something went wrong: ", error);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "video/mp4" });
      res.end(data);
    });
  })
  .listen(3024, () => console.log("listening on port 3024"));
