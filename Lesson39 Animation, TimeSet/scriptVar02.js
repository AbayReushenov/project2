//const timeId = setTimeout();

// черезс вызов анонимной функции
const timeId2 = setTimeout(function(text) {
    console.log(text);
}, 2000, "Hello 2 sec");
const timeId3 = setTimeout(function() {
    console.log('Hello world! 3 sec');
}, 3000);
const timeId4 = setTimeout(function(nechto) {
    console.log(nechto);
}, 4000, 'Привет 4 сек.');
const timeId5 = setTimeout(function(votEto) {
    console.log(votEto, " 5 сек");
}, 5000, "Let talk about it ...");
//             Hello 2 sec
// script.js:8 Hello world! 3 sec
// script.js:11 Привет 4 сек.
// script.js:14 Let talk about it ...  5 сек

const timeId6 = setTimeout(logger2, 2000);

function logger2() {
    console.log('text');
}

// Hello 2 sec
// script.js:24 text
// script.js:8 Hello world! 3 sec
// script.js:11 Привет 4 сек.
// script.js:14 Let talk about it ...  5 сек

setTimeout(logger3, 3000); // без идентификатора

function logger3() {
    console.log('text: 3 sec');
}

// script.js:5 Hello 2 sec
// script.js:24 text
// script.js:8 Hello world! 3 sec
// script.js:36 text: 3 sec
// script.js:11 Привет 4 сек.
// script.js:14 Let talk about it ...  5 сек

// timeId6(); -- ошибка!!!

const timeId7 = setTimeout(logger4, 2000);

clearInterval(timeId7); // отмена выполнения

function logger4() {
    console.log('text clear Interval');
}