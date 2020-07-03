'use strict';
// let now = new Date();
// console.log( now );
// // 0 соответствует 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// console.log( Jan01_1970 );

// // теперь добавим 24 часа и получим 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log( Jan02_1970 );
// по Гринвичу
// 2020-07-03T08:55:19.427Z
// 1970-01-01T00:00:00.000Z
// 1970-01-02T00:00:00.000Z

let now = new Date('2020/07/08'), // время UTC (- 3 часа)
    nowdote = new Date("2020.07.08"), // время UTC (- 3 часа)
    nowdefis = new Date('2020-07-08'), // дефис дает местное время
    nowzapytaya = new Date(`2020,07,08`), // время UTC (- 3 часа)
    nowNumbers = new Date(2020,7,8); // время UTC (- 3 часа) 
    // номер 7 это August
    // 2020-07-07T21:00:00.000Z
    // 2020-07-07T21:00:00.000Z
    // 2020-07-08T00:00:00.000Z
    // 2020-07-07T21:00:00.000Z
    // 2020-08-07T21:00:00.000Z

console.log( now );
console.log( nowdote);
console.log( nowdefis );
console.log( nowzapytaya );
console.log( nowNumbers);
//2020-07-07T21:00:00.000Z
//взможны варианты разграничителей
// .
// - 
// /
//перевод в UTC дату - 3 часа

const now2 = new Date(0),
      now3 = new Date();
console.log( now2 );
console.log( now3 );
// получить год
console.log(now2.getFullYear()); // 1970
console.log(now3.getFullYear()); //2020
console.log(now3.getDate() ); // 3  - ?
// 1970-01-01T00:00:00.000Z
// 2020-07-03T11:54:41.127Z
// 1970
// 2020
// 3
console.log(now3.getFullYear()); // 2020
console.log(now3.getMonth()); // 6 (июль, начала с 0)
console.log(now3.getDate()); // 3 (3 число)
console.log(now3.getDay()); // 5 (пятница)
console.log(now3.getHours()); // 15 часов в Москве
console.log(now3.getUTCHours()); // 12 часов в Гринвиче
console.log(now3.getMinutes()); // 26 минут
console.log(now3.getSeconds()); // 
console.log(now3.getMilliseconds());// 490 миллисек
// 1593777686490 миллисекунд
//
const now4 = new Date(1593777686490);
console.log( now4 );
console.log(now4.getMilliseconds()); 
console.log(now4.getTime()); 
// 2020-07-03T12:01:26.490Z
// 490
// 1593777686490

// Установить данные временти
const now10 = new Date(0),
      now11 = new Date();
console.log(now10.setHours(20, 59)); // 1970-01-01T17:59:00.000Z
// можно поменять также минуты
console.log(now10);
console.log(now11.setHours(20));
console.log(now11);
console.log(now11.setHours(44));
console.log(now11);
//
// 64740000
// 1970-01-01T17:59:00.000Z
// 1593798838787
// 2020-07-03T17:53:58.787Z
// 1593885238787
// 2020-07-04T17:53:58.787Z

// в браузере
// 61200000
// script.js:76 Thu Jan 01 1970 20:00:00 GMT+0300 (Москва, стандартное время)
// script.js:77 1593798449075
// script.js:78 Fri Jul 03 2020 20:47:29 GMT+0300 (Москва, стандартное время)

// в консоле vs code (UTC time)
// 61200000
// 1970-01-01T17:00:00.000Z
// 1593798403735
// 2020-07-03T17:46:43.735Z

const now20 = new Date('2020-04-12');

let  now21 = Date.parse('2020-04-12T13:51:50.417-07:00');
// число в миллисекундах

const now21a = new Date(now21);


console.log(now20);
console.log(now21);
console.log( new Date(now21));
console.log( now21a);

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(ms); // 1327611110417 (таймстамп)
console.log(new Date(ms));

// 2020-04-12T00:00:00.000Z
// 1586724710417
// 2020-04-12T20:51:50.417Z
// 2020-04-12T20:51:50.417Z
// 1327611110417
// 2012-01-26T20:51:50.417Z

'use strict';
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл длился ${end - start} миллисекунд`);