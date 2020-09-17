let basel = [2, 4, 4, 4, 8, 8, 4, 12, 12, 14],
    keynum = []

// console.log(basel.some(4))

for (let i = 0; i < basel.length; i++) {

    if (!keynum.includes(basel[i])) {
        keynum.push(basel[i])
    }
}

console.log(keynum)


const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true