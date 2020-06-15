"use strict";

function first(a) {
    //что-то сделать
    setTimeout(function() { 
        console.log(a); 
        b = a + b;
        console.log(b);
    }, 500);
} 

function second(b) {
    console.log(b);
}
let a = 10, b = 20;
/* first(a);
second(b); */
//
function pravilny_vizov(argumentos, callback) {
    argumentos;
    callback();
}

pravilny_vizov(first(a), function() {
    second(b);
});

function learnJs(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
learnJs('JavaScript', function() {
    console.log('Я прошел данный урок!');
});

setTimeout(function() { 
    callback();
    }, 500);

// -------------    
function learnJs(lang, callback) {
    setTimeout(function() { 
        console.log(`Я  по прежнему учу: ${lang}`);
        callback();
        }, 500);

    console.log(`Я учу: ${lang}`);
    callback();
}
learnJs('JavaScript', function() {
    console.log('Я прошел данный урок!');
});
/*     
Я учу: JavaScript
Я прошел данный урок!
Я  по прежнему учу: JavaScript
Я прошел данный урок! */











//
// определяем нашу функцию с аргументом callback
function some_function(arg1, arg2, callback) {
    let summa = arg1 + arg2;
    console.log('О чем это? 1'); 
    console.log(`arg1 = ${arg1} arg2 = ${arg2} сумма = ${summa}`);
    console.log('----'); 
    setTimeout(function() { 

        console.log('О чем это?'); 
        let summa = arg1 + arg2 + 1000;
        console.log(`arg1 = ${arg1} arg2 = ${arg2} сумма = ${summa}`);
        //var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
        callback(my_number);
        }, 1000);
    // переменная, генерирующая случайное число в интервале между arg1 и arg2
    var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
    var my_number2 = arg1 + arg2 + 2000;
    var summa2 = summa;
    // теперь всё готово и  мы вызываем callback, куда передаём наш результат
    callback(my_number);
}
// вызываем функцию
some_function(5, 15, function (num) {
    // эта анонимная функция выполнится после вызова callback-функции
    console.log("callback called! " + num);
});

// WebDev с нуля. Канал Алекса Лущенко
// True JS 24. Callback функции
// https://github.com/luschenko/TrueJS/blob/master/%2324/js/script.js

function first(y){
    console.log('First');
    console.log(a1);
    console.log(a1+b1);
    y();
    setTimeout(function() { 
        console.log('О чем это?'); 
        b1 = a1 + b1;
        console.log(b1);
    }, 500);
    console.log('2 First');
    console.log(1000);
    console.log(b1);
 }

function second(a,b){
    console.log('Second');
    console.log(2);
    console.log(a);
    a--;
    b++;
    console.log(a);
    console.log(b);
}

let a1 = -10, b1 = 15;
first(function() {
    second(a1, b1);
});

    
//second(4,7);

//
// 
function second2(arg1, arg2, callback) {
    setTimeout(function() { 
        console.log('-TimeOut------*---'); 
        arg1++;
        arg2 = arg2 + 1000;
        let s2 = arg1 + arg2;
        callback(s2);
                            }, 1000);
    console.log('----/11/---------/***/---'); 
    var my_number = arg1 + arg2 ;
    callback(my_number);
}

second2(5, 15, function (num) {
    console.log('=second top ===============*======='); 
    console.log("callback called! " + num);
    console.log('=second end ===*====*=======*====='); 
    setTimeout(function() { 
        console.log('-6645456TimeOut------*---'); 
         }, 1000);
});

