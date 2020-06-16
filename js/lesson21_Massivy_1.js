"use strict";

const arr = [1, 2, 3, 4, 6, 9, 89,, 77];

console.log(arr);
console.log(arr.length);
arr.pop();
arr.pop();
console.log(arr);
console.log(arr.length);
arr.push(Math.round(Math.random()*100));
console.log(arr);
console.log(arr.length);
/* [ 1, 2, 3, 4, 6, 9, 89, <1 empty item>, 77 ]
9
[
  1, 2,  3, 4,
  6, 9, 89
]
7
[
  1, 2,  3,  4,
  6, 9, 89, 10
]
8 */
//------------------------------------------------------------------------------------
// перебор массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
    /* [ 1, 2, 3, 4, 6, 9, 89, <1 empty item>, 77 ]
        9
        [
        1, 2,  3, 4,
        6, 9, 89
        ]
        7
        [
        1, 2,  3,  4,
        6, 9, 89, 77
        ] */
  /* 8
        1
        2
        3
        4
        6
        9
        89
        77 */

const arr = [1, 2, 3, 4, 6, 9, 89,77];
console.log(arr);
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log('-------------------------');
//
/* Оба оператора, и for...in и for...of производят обход объектов. Разница лишь в том, как они это делают.

for...of
Оператор for...of выполняет обход по элементам коллекций (иначе говоря, итерируемых объектов, например, Array, Map, Set, String, arguments, DOM коллекций и т.д.), вызывая на каждом шаге итерации значение, а не ключ.

Оператор for...of для массивов работает аналогично forEach, но имеет преимущества: возможность использовать continue и break для контроля итераций, что невозможно в forEach.
 */
// Обход массива
let arr = [10, 20, 30];

for (let value of arr) {
  value += 13.69;
  console.log(value);
}
         /* 23.689999999999998
            33.69
            43.69 */
// Обход строки
let str = 'cold';

for (let value of str) {
  console.log(value);
}
    /* =>
        c
        o
        l
        d */
// Обход Map
let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of iterable) {
    console.log(entry);
}

for (let [key, value] of iterable) {
    console.log(value);
}
//
     /* [ 'a', 1 ]
        [ 'b', 2 ]
        [ 'c', 3 ]
        1
        2
        3 */
 //
for (let value of arr) { // работает с массивами !!! 
    // ЗДЕСЬ МОЖНО ИСПОЛЬЗОВАТЬ
    // break
    // and
    // continue
    console.log(value);
}
console.log('-------------------------');
//
/* for...in
Цикл for...in проходит через перечисляемые свойства объекта. Он пройдёт по каждому отдельному элементу, вызывая на каждом шаге ключ. Цикл for...in проходит по свойствам в произвольном порядке, поэтому его не следует использовать для Array. */
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log(obj[prop]);
}

// 1 2 3
//
for (let xnachenie in arr) {
    console.log(arr[xnachenie]);
}
        /* 1
        2
        3
        4
        6
        9
        89
        77
        -------------------------
        1
        2
        3
        4
        6
        9
        89
        77
        -------------------------
        1
        2
        3
        4
        6
        9
        89
        77 */

const arr = [1, 2, 3, 4, 6, 9, 89,77];
console.log(arr);
console.log(arr.length);
arr[999] = 0;
console.log(arr);
console.log(arr.length);
/* [
    1, 2,  3,  4,
    6, 9, 89, 77
  ]
  8
  [ 1, 2, 3, 4, 6, 9, 89, 77, <991 empty items>, 0 ]
  1000 */
  const arr = [1, 2, 3, 4, 6,,,, 9, 89,77];
  console.log(arr);
  console.log(arr.length);
  arr.forEach(function(element, poryadok, arr) {
    console.log(`${poryadok}: ${element} внутри массива ${arr}`);
  });
   /*   [ 1, 2, 3, 4, 6, <3 empty items>, 9, 89, 77 ]
        11
        0: 1 внутри массива 1,2,3,4,6,,,,9,89,77
        1: 2 внутри массива 1,2,3,4,6,,,,9,89,77
        2: 3 внутри массива 1,2,3,4,6,,,,9,89,77
        3: 4 внутри массива 1,2,3,4,6,,,,9,89,77
        4: 6 внутри массива 1,2,3,4,6,,,,9,89,77
        8: 9 внутри массива 1,2,3,4,6,,,,9,89,77
        9: 89 внутри массива 1,2,3,4,6,,,,9,89,77
        10: 77 внутри массива 1,2,3,4,6,,,,9,89,77 */
//
 
