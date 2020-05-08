const array = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]
let sum = 0;

const sockMerchant = (n, arr) => {
    const copy = arr.sort((a, b) => {
        if(a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });

    for(let i = 1; i < n; i++) {
        const first = copy[0];

        if(copy.length === 0) {
            return sum;
        }

        console.log(copy);

        if(first === copy[i]) {
            console.log(first, copy[i], 'Same')
            copy.splice(0, 1);
            copy.splice(i, 1);
            sum++;
            
            sockMerchant(copy.length, copy)
        } else {
            console.log(first, copy[i], 'Diff');
            copy.splice(0, 1);
            sockMerchant(copy.length, copy)
        }
    };
}
console.log(sockMerchant(array.length, array));