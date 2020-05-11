'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
   const LENGTH = arr.length;

    let zeros = 0;
    let positive = 0;
    let negative = 0;

    arr.forEach(element => {
        if(element < 0) {
            negative++;
        } else if(element === 0) {
            zeros++;
        } else {
            positive++;
        }
    });

    console.log((positive/LENGTH).toFixed(5))
    console.log((negative/LENGTH).toFixed(5))
    console.log((zeros/LENGTH).toFixed(5))
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}