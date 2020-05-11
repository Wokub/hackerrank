"use strict";

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let sum = 0;
  let max = 0;
  let min = 0;

  const numbers = arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });

  for (let i = numbers.length - 1; i > 0; i--) {
    max += numbers[i];
  }

  for (let i = 0; i < numbers.length - 1; i++) {
    min += numbers[i];
  }

  console.log(min, max);
}

function main() {
  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
