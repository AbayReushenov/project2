'use strict';
// let time;
let asinchrone = function () {
    setTimeout(() => {
    console.log('asinchrone 4000');
        }, 4000);
    };

asinchrone();

fooAsinchrone();

function fooAsinchrone() {
    setTimeout(() => {
        console.log('FOO! 4000');
    }, 4000);
}

foo();

function foo() {
    console.log('FOO!');
 }

console.log(1);

setTimeout(() => {
    foo(); 
}, 4000);

setTimeout(() => {
    console.log("timeout = 40000");
}, 4000);

console.log(2);

//---
asinchrone();

fooAsinchrone();

foo();

var multiply = new Function('x', 'y', 'return x * y');

console.log(multiply(2, 3));