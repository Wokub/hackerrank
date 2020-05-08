/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    let arr = [];

    nums.forEach(value => {
        if(value % 2 === 0) arr.push(value * 2);
        else if(value % 2 !== 0) arr.push(value * 3);
    })

    return arr;
}

