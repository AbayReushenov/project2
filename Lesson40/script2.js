'use strict';
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл длился ${end - start} миллисекунд`);
// Цикл длился 20 миллисекунд