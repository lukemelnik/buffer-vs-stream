const fs = require("fs");
const http = require("http");
const file = "./trap.mp4";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "video/mp4" });
    fs.createReadStream(file).pipe(res).on("error", console.error);
  })
  .listen(3025, () => console.log("listening on port 3025"));
