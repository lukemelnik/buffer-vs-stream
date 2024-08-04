const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("../trap.mp4");
const writeStream = createWriteStream("./copy.mp4");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

readStream.on("end", () => {
  writeStream.end();
});

readStream.on("error", (error) => {
  console.log("oops, an error occurred");
});
