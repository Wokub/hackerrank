process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    const firstInteger = readLine();
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = readLine();
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = readLine();
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    
    let intSum = parseInt(i) + parseInt(firstInteger);
    let decSum = parseFloat(d) + parseFloat(firstDecimal);
    let stringSum = s + firstString;

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    
    console.log(intSum);
    console.log(decSum.toFixed(1));
    console.log(stringSum);

}