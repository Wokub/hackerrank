/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let str = '';

    try {
        const arr = s.split('');
        const reversed = arr.reverse();

        reversed.forEach(element => {
            str += element;
        })
    } catch(e) {
        console.log(e.message);
    } finally {
        if(str === '') {
            console.log(s);
        } else {
            console.log(str);
        }
    }
}