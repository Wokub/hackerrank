/*
Complete the following functions in the editor below:
getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length
and width.

The values returned by these functions are printed to stdout by locked stub code in the editor.
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

function getArea(length, width) {
    let area;

    if ((length < 1 && length > 1000) && (width < 1 && width > 1000)) {
        return 0;
    }

    area = parseFloat(length) * parseFloat(width);

    return area;
}

function getPerimeter(length, width) {
    let perimeter;

    perimeter = 2 * (parseFloat(length) + parseFloat(width)); 
    return perimeter;
}


function main() {
    const length = +(readLine());
    const width = +(readLine());
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}