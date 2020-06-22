"use strict";
//------------------------------------------------------------------------------------
function first(){
  // Как будто бы запрос к API
  setTimeout( function(){
    console.log(1);
  }, 500 );
}
function second(){
  console.log(2);
}
first();
second();
// на выходе : 2
//           : 1 
// изменим первую функцию ------------------------------------------------------------
function firstnew(callback){
  // Как будто бы запрос к API
  setTimeout( function(){
      console.log(1);
      callback();
  }, 500 );
  }
function second(){
  console.log(2);
}
firstnew(second);
// рабочий код!!!
// 1   
// 2
      
// Еще один вариант с передачей параметров ---------------------------------------------
function first(x) {
    setTimeout(function() { 
        console.log(x); 
    }, 500);
} 

function second(y) {
    console.log(y);
}

first(1);
second(2); 

// на выходе : 2
//           : 1  
// Для корректнго вывода  ---------------------------------------------------------------
// Сначала - First => 1
// Затем -  Second => 2
// изменяем функцию first(x) на first(x, y, callback)
function first(x, y, callback) {
  setTimeout(function() {
    console.log(x); 
    callback(y);
  }, 500);
}
// second(y) остается без изменений
function second(y) {
  console.log(y);
}
//
// вызов программы
first(1, 2, second);
// на выходе : 1
//           : 2 
//------------------------------------------------------------------------------------
// Еще вариант с различным расположением функции callback в теле первой пргораммы:
// Вариант который бы сработал и без данных усложнений
function learnJs(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
learnJs('JavaScript', function() {
    console.log('Я прошел данный урок!');
});
// ------------------------------------------------------------------------------------
// усложним за счет задержки в функции setTimeout()
setTimeout(function() { 
    callback();
    }, 500);
// ------------------------------------------------------------------------------------
// новая версия 
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

//------------------------------------------------------------------------------------
// 3 уровня выполнения функции callback 
// определяем нашу функцию с аргументами и  callback
function some_function(arg1, arg2, callback) {
    arg1++;
    console.log(`arg1 = ${arg1}`);
    callback(arg1);
    setTimeout(function() { 
        arg2--;
        console.log(`arg2 = ${arg2}`);
        callback(arg2);
        }, 1000);
    // переменная, генерирующая случайное число в интервале между arg1 и arg2
    var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
    // теперь всё готово и  мы вызываем callback, куда передаём наш результат
    console.log(`my_number = ${my_number}`);
    callback(my_number);
}
// вызываем функцию
some_function(1, 5, function (num) {
    // эта анонимная функция выполнится после вызова callback-функции
    console.log("callback called! " + num);
  });

// На выходе имеем:
/*  arg1 = 2
    callback called! 2
    my_number = 4
    callback called! 4
    arg2 = 4
    callback called! 4 */
// --------------------------------------------------------------------------
// Ниже перевод статьи Брэндона Морелли JavaScript: What the heck is a Callback?
// https://ru.hexlet.io/blog/posts/javascript-what-the-heck-is-a-callback
// Мы на Хекслете 
  function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
  }
  function consolelogFinished(){
    console.log('Finished my homework');
  }
  doHomework('math', consolelogFinished);
//
