'use strict';
function sum(a, b) {
    return a + b;
}
let sum2 = (a, b) => a + b;
console.log(sum(12, 34), sum2(34, 56));
// 46 90
//
let d = -4, e = 0, f = 6;
function isPositive(number) {
    return number >= 0;
    }
console.log(isPositive(d), isPositive(e), isPositive(f));
//
let d1 = -40, e1 = 10, f1 = 0;
let isPositive2 = number => number >= 0;
console.log(isPositive2(d1), isPositive2(e1), isPositive2(f1));
// false true true
//

function randomNumber() {
    return Math.random();
    }
console.log(randomNumber());
//
let randomNumber2 = () => Math.random();
console.log(randomNumber2());
//
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(3));
// expected output: 0, 1 or 2
console.log(getRandomInt(1));
// expected output: 0
console.log(Math.random());
// expected output: a number between 0 and 1
// -------------------
let getRandomInt2 = max => Math.floor(Math.random() * Math.floor(max));
console.log(getRandomInt2(3));
// expected output: 0, 1 or 2
console.log(getRandomInt2(1));
// expected output: 0
console.log(Math.random());
// expected output: a number between 0 and 1
console.log(Math.random());
console.log(Math.floor(33.262));

