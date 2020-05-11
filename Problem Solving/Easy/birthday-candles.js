"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  let currentMax = 0;
  let candles = 0;

  const numbers = ar.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > currentMax || numbers[i] === currentMax) {
      currentMax = numbers[i];
      candles++;
    }
  }

  return candles;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arCount = parseInt(readLine(), 10);

  const ar = readLine()
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  let result = birthdayCakeCandles(ar);

  ws.write(result + "\n");

  ws.end();
}
