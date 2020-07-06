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

 //----------
 // Дополнительные материалы с Хабра
 // Обращение к this из функции, которая была объявлена за пределами объекта,
 // а потом назначена в качестве его метода
 var dog = {
    breed: 'Beagles',
    lovesToChase: 'rabbits'
  };
  
  function chase() {
    console.log(this.breed + ' loves chasing ' + this.lovesToChase + '.'); 
  }
  
  dog.foo = chase;
  dog.foo(); // в консоль попадёт Beagles loves chasing rabbits.
  
  // chase(); //так эту функцию лучше не вызывать

// This и вложенные объекты
  var obj1 = {
    hello: function() {
      console.log('Hello world');
      return this;
    },
    obj2: {
        breed: 'dog',
        speak: function(){
              console.log('woof!');
              return this;
          }
      }
  };
   

  console.log(obj1);
  console.log(obj1.hello());  // выводит 'Hello world' и возвращает obj1
  console.log(obj1.obj2);
  console.log(obj1.obj2.speak());  // выводит 'woof!' и возвращает obj2



  //Ключевое слово new и this
  // Ключевое слово this находит применение в функциях-конструкторах
  
  var City = function(city, state) {
    this.city = city || "Phoenix";
    this.state = state || "AZ";
    this.sentence = function() {
      console.log(`I live in ${this.city}, ${this.state}.`);
    };
  };
  
  var phoenix = new City(); // используем параметры по умолчанию
  console.log(phoenix); // выводит в консоль строковое представление объекта
  phoenix.sentence(); // выводит I live in Phoenix, AZ.
  
  var spokane = new City('Spokane', 'WA');
  console.log(spokane); // выводит сам объект
  spokane.sentence(); // выводит I live in Spokane, WA.

  // -------
  function Dog(breed, name, friends){
    this.breed = breed;
    this.name = name;
    this.friends = friends;	
    this.intro = function() {
        console.log(`Hi, my name is ${this.name} and I’m a ${this.breed}`);
        return this;
    }; 
}
  // Создадим новый экземпляр объекта типа Dog
var chester = new Dog('beagle', 'Chester', ['Gracie', 'Josey', 'Barkley']);
chester.intro();        // выводит Hi, my name is Chester and I'm a beagle
console.log(chester);   // выводит Dog {breed: "beagle", name: "Chester", friends: Array(3), intro: ƒ}


// О важности ключевого слова new
// При вызове функции-конструктора с использованием ключевого слова new 
// Функция-конструктор
var Friend = function(name, password, interests, job){
    this.fullName = name;
    this.password = password;
    this.interests = interests;
    this.job = job;
  };
  
function sayHello(){
     // раскомментируйте следующую строчку, чтобы узнать, на что указывает this
     // console.log(this); 
    return `Hi, my name is ${this.fullName} and I'm a ${this.job}. Let's be friends!`;
  }
  
  // Мы можем создать один или несколько экземпляров объекта типа Friend, используя ключевое слово new
  var john = new Friend('John Smith', 'badpassword', ['hiking', 'biking', 'skiing'], 'teacher'); 
  
  console.log(john); 
  
  // Назначим функцию ключу greeting объекта john
  john.greeting = sayHello; 
  
  // Вызовем новый метод объекта
  console.log( john.greeting() ); 
  
  // Помните о том, что sayHello() не стоит вызывать как обычную функцию
  // console.log( sayHello() ) ; // ошибка!