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

const sum3 =( massive, first = 0) => massive.reduce((acc,dop) => (acc + dop), first)

console.log(sum3(numbers, 300)) //321
console.log(sum3(numbers, sum3(numbers3,0))) // -460
console.log(sum3(numbers, sum3(numbers3))) // -460


console.log(numbers.reduce( (a, b) => a * b)) // 0

const proizvedenie = massive => massive.reduce((acc,dop) => acc * dop)

const numbers4 = [10, 2.1, 2.2, 3.3, 4.4, 5.5, -6.6]
console.log(proizvedenie(numbers4))  // -24350.9112