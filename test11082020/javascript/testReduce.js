const numbers = [0, 1, 2, 3, 4, 5, 6]
const numbers3 = [10, 21, 22, 33, 44, 55, -666]

const sum = numbers.reduce(
    function(acc, n) {
      return acc + n;
    },
    100 // значение накопительной переменной на первой ступени итерации
)

console.log(sum) // 121

const sum2 = massive => massive.reduce((acc,dop) => acc + dop)

console.log(sum2(numbers)) // 21

function printprops(o) {
    return o.reduce((a, b) => (a + b))
}
console.log(printprops(numbers))


function summ(arr) {
    return arr.reduce((a, b) => (a + b))
    }
console.log(summ(numbers3))

// 121
// 21
// 21
// -481

