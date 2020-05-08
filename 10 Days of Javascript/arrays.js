/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

function getSecondLargest(nums) {
    let duplicates = [];

    for(const n of nums) {
        if(!duplicates.includes(n)) {
          duplicates.push(n);
        }
    }

    duplicates.sort((a, b) => {
        if (a < b) {
        return -1;
        } else if (a > b) {
        return 1;
        } else {
        return 0;
        }
    });

    return duplicates[duplicates.length - 2];
}