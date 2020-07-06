'use strict';

const num = new Number(3);

const num2= new Function(3);

// alert(num);

// alert(num2);

//

function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello = function() {
        console.log(`Hello! ${this.name}. How are you?`);
    };
}

const ivan = new User('Ivan', 58);

// функция User стала конструктором
// она создает новый объект

const abay = new User('Abay', 45); 

console.log(ivan, abay);
// => User {name: "Ivan", age: 58, human: true} 
// => User {name: "Abay", age: 45, human: true}

ivan.hello();
abay.hello();

// script.js:18 Hello! Ivan. How are you?
// script.js:18 Hello! Abay. How are you?

// .prototype method

User.prototype.exit = function() {
    console.log(`User ${this.name} get out.`);
};

console.log(ivan, abay);

ivan.exit();
abay.exit();
// script.js:42 User Ivan get out.
// script.js:42 User Abay get out.


// new in ES6 => CLASS

class User2 {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    }
    hello() {
        console.log(`Salut! ${this.name}. Ca va?`);
    }

    exit() {
            console.log(`Ou de ${this.name}?`);
    }
}

const ivanES6 = new User2('IvanES6', 50);
const abayES6 = new User2('AbayES6', 40); 
const ivanT = new User('Ivan T', 50);
const abayU = new User('Abay U', 40); 

console.log(ivanES6, abayES6);

ivanES6.exit();
abayES6.exit();
ivanES6.hello();
abayES6.hello();

ivanT.exit();
abayU.exit();
ivanT.hello();
abayU.hello();

