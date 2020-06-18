"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.log(str);
console.log(strObj);
//----
const soldat = {
    health: 400,
    armor: 100,
    sayPrivet: function() {
        console.log("Привет!");
    },
};

const jonh = {
    health: 100
};

jonh.__proto__ = soldat; // метод .__proto__ ==> устаревший метод! Не использовать!

console.log(jonh); //=>>> { health: 100 }
console.log('-------------');
console.log(jonh);
console.log(jonh.armor);
console.log(jonh.health);

 /* -------------
    { health: 100 }
    100
    100 */

// jonh.sayPrivet(); // =>>> Привет!
// -------------------------------------
// New method
//  Вместо: jonh.__proto__ = soldat; 
// используем:
Object.setPrototypeOf(jonh, soldat);
jonh.sayPrivet(); */
  // ==> Привет!
// Еще один способ
const soldat2 = {
    health: 400,
    armor: 100,
    sayPrivet: function() {
        console.log("Привет!");
    },
};

/* const jonh2 = {
    health: 100
}; */

const jonh2 = Object.create(soldat2);
jonh2.sayPrivet(); // ==>>> Привет!


