/*
On the first line, print the sum of firstInteger and the integer representation 
of secondInteger.
On the second line, print the sum of firstDecimal and the floating-point 
representation of secondDecimal.On the third line, print firstString 
concatenated with secondString. 
You must print firstString before secondString.
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function performOperation(secondInteger, secondDecimal, secondString) {

    // Trzeba sparsować do Inta lub Floata
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';

    let intSum = firstInteger + parseInt(secondInteger);
    let decSum = firstDecimal + parseFloat(secondDecimal);
    let stringSum = firstString + secondString;

    console.log(intSum);
   
    console.log(decSum);

    console.log(stringSum);

}


function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();
    
    performOperation(secondInteger, secondDecimal, secondString);
}