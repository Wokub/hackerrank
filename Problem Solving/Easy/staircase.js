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

// Complete the staircase function below.
function staircase(n) {
    const arr = [];

    for(let i = 1; i <= n; i++) {
        let crosses = "";
        for(let k = 0; k < n - i; k++) {
            crosses += " ";
        }
        for(let j = 1; j <= i; j++) {
            crosses += "#";
        }
        arr.push(crosses);
    }

    arr.forEach(element => {
        console.log(element);
    })
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
