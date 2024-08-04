const { Readable } = require("stream");

const famous_quotes = [
  "The only way to do great work is to love what you do.",
  "Be the change that you wish to see in the world.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "That's one small step for a man, one giant leap for mankind.",
  "Life is not about finding yourself. Life is about creating yourself.",
  "The mind is everything. What you think you become.",
  "It always seems impossible until it's done.",
  "Only those who dare to fail greatly can ever truly succeed.",
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  "The journey of a thousand miles begins with a single step.",
];

class StreamFromArray extends Readable {
  constructor(array) {
    super({ encoding: "UTF-8" });
    this.array = array;
    this.index = 0;
  }
  _read() {
    if (this.index <= this.array.length) {
      const chunk = this.array[this.index];
      this.push(chunk);
      this.index += 1;
    } else {
      this.push(null);
    }
  }
}

const quoteStream = new StreamFromArray(famous_quotes);

quoteStream.on("data", (chunk) => console.log(chunk));
quoteStream.on("end", () => console.log("all done."));
