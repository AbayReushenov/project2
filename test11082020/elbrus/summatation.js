// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// Основные определения и данные для арифметической прогрессии сведенные в одну таблицу:

// Определение арифметической прогрессии	an+1 = an + d
// Разность арифметической прогрессии	d =  an+1 - an
// Формула n-го члена  арифметической прогрессии	an = a1+ d · (n - 1)
// Сумма n первых членов  арифметической прогрессии	
// summa = n * (a1 + an) / 2
// an = (a(n-1) + a(n+1) ) /2


var summation = function(num) {
    let result = 0
    for (let i = 1; i<= num; i++ ) {
      result = result + i
      }
    return result
  }
  
  console.log(summation(654))  // 214185

function summation2(num) {
return num * ( 1 + num) / 2
}
console.log(summation2(654))  // 214185

const summation3 = num => {
  let sum = 0,
      i = 1;
  while (i <= num) {
    sum += i
    i++
  }
  return sum
}

console.log(summation3(654))  // 214185

function summatation(x) {
  if (x <= 1) return 1;
return x + summatation(x-1);
}

console.log(summatation(654)) //214185

const summation4 = n => (n <= 1) ? 1 : n + summation4(n-1)

console.log(summation4(654)) //214185