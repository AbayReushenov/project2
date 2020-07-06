'use strict';

// console.log(this);
// // => window
// //Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

// function showThis() {
//     console.log(this);        
//     }
// showThis(); // undefiened - for 'use strict';
// // window - for 'not strict'


// function showThis2(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return this.a + this.b;
//     }
//     console.log(sum());
// }
// showThis2(4, 5);

// undefiened 
// undefiened 
//решается замыканием функции (убираем this из параметров в строке return)
//-1-
// function showThis3(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis3(4, 5);
// undefined
// undefined
// 9

// -2------------------------
//-a
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum(); // {a: 20, b: 15, sum: ƒ}
//-b-
// const obj2 = {
//     a: 24,
//     b: 14,
//     sum: function() {
//         function shout() {
//             console.log(this);
//             // это не метод объекта 
//             // контекст потерян : undefined
//         }
//         shout();
        
//     }
// };
// obj2.sum(); // undefined

// -3------------------------
// через оператор  new

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log("Hello! " + this.name);
//     };
// }
// let ivan = new User('Ivan', 23);
// console.log(ivan); //User {name: "Ivan", id: 23, human: true, hello: ƒ}

// // -4------------------------
// function sayName() {
//     console.log(this);
//     console.log(this.name);
//     }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);
// //              {name: "John"}
// // script.js:84 John
// // script.js:83 {name: "John"}
// // script.js:84 John

// function sayName3(surname) {
//     console.log(this);
//     console.log(this.name + surname);
//     }

// const user3 = {
//     name: 'John'
// };

// // ручная привязка кронтекста
// sayName3.call(user3, 'Smith');
// sayName3.apply(user3, ['Smith']);

// // script.js:83 {name: "John"}
// // script.js:84 JohnSmith
// // script.js:83 {name: "John"}
// // script.js:84 JohnSmith

// // bind - новая функция и под нее пождвязывается контекст
// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));
// // 6
// // 26




// 1) Обычная функция: this = window, но если "use strict" - undefined
// 2)  Контекст (this) у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log('Button');
//     console.log(this);
//     this.style.backgroundColor = 'red';
// } );
// Button
// <button>Test of color</button>

// У стрелочных функций нет контекста вызова!!!
// он его берет у родителя
// разберем \/
const obj = {
    nim: 4,
    skajiNimber: function () {
        const say = () => {
            console.log(this);
            // контекст берется у родителя
            // {nim: 4, skajiNimber: ƒ}
            console.log(this.nim); // => 4
            //  если была бы обычная функция , то была бы ошибка
        };

        say();
    }
};

// вызываем ыункцию
obj.skajiNimber();  // => {nim: 4, skajiNimber: ƒ}

//---------

const double = (a) => {
    return a * 2;
};
console.log(double(3)); // => 6

const double2 = (a) =>  a * 2; // 
console.log(double2(4));  // 8

const double3 = a =>  a * 2; // 
console.log(double3(654));  // 1308

const double43 = (a, b) =>  (a - b) * 2; // 
console.log(double43(654, 600));  // 108


const btn2 = document.querySelector('button');

// ошибка при стрелочной функции
// btn2.addEventListener('click', () => {
//    this.style.backgroundColor = 'black';
//    console.log('6584');
// } );
// script.js:186 Uncaught TypeError: Cannot set property 'backgroundColor' of undefined
//     at HTMLButtonElement.<anonymous> (script.js:186)

// исправляется через event.target
btn2.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'black';
    console.log(e.target);
 } );
