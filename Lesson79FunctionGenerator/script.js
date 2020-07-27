'use strict';



// function* generator() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generator();

// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());

// // { value: 'S', done: false }
// // { value: 'c', done: false }
// // { value: 'r', done: false }
// // { value: 'i', done: false }
// // { value: 'p', done: false }
// // { value: 't', done: false } 
// // { value: undefined, done: true }
// // { value: undefined, done: true }
// // -----------------
// // console.log(str.next().value);
// // console.log(str.next().value);
// // console.log(str.next().value);
// // console.log(str.next().value);
// // console.log(str.next().value);
// // console.log(str.next().value);
// // console.log(str.next().value);
// // console.log(str.next().value);
// // console.log(str.next().value);
// // console.log(str.next().value);
// // S
// // c
// // r
// // i
// // p
// // t
// // undefined
// // undefined
// // undefined
// // undefined

// //------

// function* count(n) {
//     for (let i = 0; i < n; i++){
//         yield i;
//     }
// }

// const counter = count(7);

// // console.log(counter.next().value);
// // console.log(counter.next().value);
// // console.log(counter.next().value);
// // console.log(counter.next().value);
// // console.log(counter.next().value);
// // console.log(counter.next().value);
// // console.log(counter.next().value);
// // console.log(counter.next().value);
// // console.log(counter.next().value);
// // 0
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // undefined
// // undefined

// //-----
// function* string(str1) {
//     for (let i = 0; i < str1.length; i++) {
//         yield str1[i];
//     }
// }

// const word = string("Hello world!");

// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// // H
// // e
// // l
// // l
// // o
 
// // w
// // o
// // r
// // l
// // d
// // !
// // undefined
// // undefined

// // [Done] exited with code=0 in 0.072 seconds

function* count(n) {
    for (let i = 0; i < n; i++){
        yield i;
    }
}

for (let item of count(7)) {
    console.log(item);
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6