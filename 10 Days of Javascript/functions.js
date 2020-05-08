/*
 * Create the function factorial here
 */
function factorial(n) {
    if ((n == 0) || (n == 1)) {
        return 1;
    } else {
        let f = (n * factorial(n - 1));
        return f;
    }
}