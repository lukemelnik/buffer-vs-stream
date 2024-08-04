const fs = require("fs");

const readStream = fs.createReadStream("../trap.mp4");

readStream.on("data", (chunk) => {
  console.log("little chunk \n", chunk);
});

readStream.on("end", () => {
  console.log("the stream has ended");
});

readStream.on("error", (error) => {
  console.log("oops, an error occurred");
});

readStream.pause();

// control the flow from stdin - any time you hit 'enter' it reads another chunk, because 'enter' submits a chunk from the input.
process.stdin.on("data", (chunk) => {
  if (chunk.toString().trim() === "finish") {
    readStream.resume();
  }
  readStream.read();
});
