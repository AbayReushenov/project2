"use strict";

// console.log(1);

// const fP = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log(2);
    
//     const q = {
//       name: 'N',
//       price: 0.1,
//     };
//     console.log(q);
//     resolve(q);
//   }, 1000);
// });

// fP.then((d) => {
//   const fP2 = new Promise((resolve, reject) => { 
//     setTimeout(() => {
//       console.log(3);
//       console.log(d);
      
//       d.new = true;
//       d.id = {
//         f: 10,
//         h: false
//       };
//      resolve(d);
//     }, 1000);
//   });

//   fP2.then(d2 => {
//     console.log(4);
//     console.log(d2);
//     });
// });

// //метод chain
// const cH = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('2.ch');
    
//     const s2 = {
//       name: 'R',
//       price: 0.002,
//     };
//     console.log(s2);

//     resolve(s2);
//   }, 1000);
// });

// cH.then((z) => {
//   return new Promise((resolve, reject) => { 
//     setTimeout(() => {
//       console.log('3.ch');
//       console.log(z);
//       z.new = false;
//       z.id = {
//        s: 0,
//        h: 'E'
//       };

//     resolve(z);
//     }, 1000);
// }).then(i => {
//   return new Promise((resolve, reject) => {
//     console.log("4.ch");
//     console.log(i);
//     resolve(i);
// }).then((x) => {
//   console.log("5.ch");
//   x.data = 1;
//   console.log(x);
//   return x;
// }).then(y => { 
//   new Promise((resolve, reject) => {
//   console.log(y);
//   resolve(y);
// }).then(j => {
//   return new Promise((resolve, reject) => {
//   console.log(j);
//   resolve(j);
// }).then(o => {
//   return new Promise((resolve, reject) => {
//     console.log('new');
//     console.log(o);
//     reject();
// }).catch(() => {
//   console.error("Error");
// });
// });
// });
// });
// });
// }).finally(() =>{
//   console.log('Finally');
// });

// const test = time => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// };
// // test(1000).then(() => console.log('1000 ms'));
// // test(3000).then(() => console.log('3000 ms'));
// Promise.all([test(1000), test(3000)]).then(() => {
//   console.log("Hello! all"); // 3 sec
// });

// Promise.race([test(1000), test(3000)]).then(() => {
//   console.log("Hello! race"); // 1 sec
// });

// let promise = new Promise(function(resolve, reject) {
//   // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });



// let promiseTes = new Promise(function(resolve, reject) {
//   // эта функция выполнится автоматически, при вызове new Promise

//   // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//   setTimeout(() => resolve("done"), 1000);
// });
// promiseTes.then(() => console.log('ok'));

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise.then(
  result => alert(result), // выведет "done!" через одну секунду
  error => console.error(error) // не будет запущена
);

