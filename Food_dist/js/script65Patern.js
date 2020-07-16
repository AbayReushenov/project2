'use strict';

// new RegExp('patern', 'flags');

// /patern/flags

// const ans = prompt('What is yourname?');

// const nashPatern = /n/i; //  'n'

// console.log(ans.search(nashPatern));
//0 - 1-я
//1 - 2-я
//-1 - нет буквы

//флаги
// i -  любой регистр
// g -  все вхождения (для search не действует)
// m - многострочный режим


// console.log(ans.match(nashPatern));
// /n/ig; 
// ANNN =>
// (3) ["N", "N", "N"]

// /n/i
//"N", index: 1, input: "ANNNIUYTG", groups: undefined]

//const pass = prompt('Password');
// console.log(pass.replace(/./g, '*')); // => ****

// console.log(pass.replace(/\./g, '*')); // =>  kug * jygh* ytf

// console.log('12-12-56'.replace(/-/g, ':')); // =>  12:12:56


//------
// const ans = prompt('What is yourname?');

// const nashPatern = /n/ig ; //  'n'

// console.log(nashPatern.test(ans));
// => true / false при условии нахождения патерна в выражении
// Ann => true
// Abay => false
//
// ищем классы
// digits (цифры) = \d
// words (буквы) = \w
// spaces (пробелы) = \s
// не числа = \D
// не буквы = \W
// 


// const ans = prompt('Put in numbers, please.');
// const nashPatern = /\d/g; // digital
// console.log(ans.match(nashPatern));
// // (3) ["9", "7", "8"]

// const ans = 'My name is  R2f4';
// console.log(ans.match(/\w\d\w\d/i));
// ["R2F4", index: 12, input: "My name is  R2F4", groups: undefined]
// ["R2f4", index: 12, input: "My name is  R2f4", groups: undefined]


const ans = 'My name is  R2f4';
console.log(ans.match(/\W/)); // не буква
//[" ", index: 2, input: "My name is  R2f4", groups: undefined]
// найден пробел, порядок index = 2 (3-й слева)

const ans2 = 'My name is  R2f4';
console.log(ans2.match(/\W/g)); // не буква
//(4) [" ", " ", " ", " "]

const ans3 = 'My name is  R2f4';
console.log(ans3.match(/\D/g)); // не буква
//(14) ["M", "y", " ", "n", "a", "m", "e", " ", "i", "s", " ", " ", "R", "f"]
