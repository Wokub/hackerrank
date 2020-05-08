/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const str = s.split('');
    const vow = ['a', 'o', 'e', 'i', 'u'];
    const arr = [];
    const _arr = [];

    str.forEach(char => {
        if (vow.indexOf(char) > -1) {
            arr.push(char);
        }
        else {
            _arr.push(char);
        }
    })

    arr.forEach(el => {
        console.log(el);
    })

    _arr.forEach(el => {
        console.log(el);
    })
}