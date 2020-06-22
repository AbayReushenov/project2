'use strict';

var a = 'e';
var b = 'b';
if (a < b) { // true
  console.log(a + ' меньше чем ' + b);
} else if (a > b) {
  console.log(a + ' больше чем ' + b);
} else {
  console.log(a + ' и ' + b + ' равны.');
}
//
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;
console.log(single, double, backticks);
// => single-quoted double-quoted backticks
function sum(a, b) {
  return a + b;
}
console.log(`1 + 2 = ${sum(1, 2)}.`);
console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
/* Одинарные и двойные кавычки работают, по сути, одинаково, а если использовать обратные кавычки, то в такую строку мы сможем вставлять произвольные выражения, обернув их в ${…}: */
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList);
console.log(guestList); // список гостей, состоящий из нескольких строк
//Ещё одно преимущество обратных кавычек — они могут занимать более одной строки
let guestList2 = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList2);
console.log(guestList2); // список гостей, состоящий из нескольких строк
//
// перевод строки добавлен с помощью символа перевода строки
let str1 = "Hello\nWorld";

// многострочная строка, созданная с использованием обратных кавычек
let str2 = `Hello
World`;

console.log(str1 == str2); // true
console.log(str1 == str2); // true
//------
/* \n	Перевод строки
\r	Возврат каретки: самостоятельно не используется. В текстовых файлах Windows для перевода строки используется комбинация символов \r\n.
\', \"	Кавычки
\\	Обратный слеш
\t	Знак табуляции
\b, \f, \v	Backspace, Form Feed и Vertical Tab — оставлены для обратной совместимости, сейчас не используются.
\xXX	Символ с шестнадцатеричным юникодным кодом XX, например, '\x7A' — то же самое, что 'z'.
\uXXXX	Символ в кодировке UTF-16 с шестнадцатеричным кодом XXXX, например, \u00A9 — юникодное представление знака копирайта, ©. Код должен состоять ровно из 4 шестнадцатеричных цифр.
\u{X…XXXXXX} (от 1 до 6 шестнадцатеричных цифр)	Символ в кодировке UTF-32 с шестнадцатеричным кодом от U+0000 до U+10FFFF. Некоторые редкие символы кодируются двумя 16-битными словами и занимают 4 байта. Так можно вставлять символы с длинным кодом.
Примеры с Юникодом:
 */
// ©
console.log( "\u00A9" );
// Длинные юникодные коды
// 佫, редкий китайский иероглиф
console.log( "\u{20331}" );
// 😍, лицо с улыбкой и глазами в форме сердец
console.log( "\u{1F60D}" );
console.log("\u00A9" ,"\u{20331}", "\u{1F60D}" );
console.log( 'I\'m the Walrus!' ); // I'm the Walrus!
console.log( `I'm the Walrus!` ); // I'm the Walrus!)
//
let str = `Hello`;
// получаем первый символ
console.log( str[0] ); // H
console.log( str.charAt(0) ); // H
// получаем последний символ
console.log( str[str.length - 1] ); // o
   /* H
      H
      o
 */
let str = 'Hi';
//str[0] = 'h'; // ошибка
//console.log( str[0] ); // не работает
/* Можно создать новую строку и записать её в ту же самую переменную вместо старой.
Например:
 */
let str = 'Hi';
str = 'h' + str[1]; // заменяем строку
console.log( str ); // hi
//-
/* Методы toLowerCase() и toUpperCase() меняют регистр символов:
 */
console.log( 'Interface'.toUpperCase() ); // INTERFACE
console.log( 'Interface'.toLowerCase() ); // interface
/* Если мы захотим перевести в нижний регистр какой-то конкретный символ:
 */
console.log( 'Interface'[0].toLowerCase() ); // 'i'
   /* INTERFACE
      interface
      i
 */
/* 
Поиск подстроки
Существует несколько способов поиска подстроки.

str.indexOf
Первый метод — str.indexOf(substr, pos).

Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений.

Например:
 */
let str = 'Widget with id';
console.log( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
console.log( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
console.log( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
    /* 0
      -1
      1 */
/* Необязательный второй аргумент позволяет начать поиск с определённой позиции.
Например, первое вхождение "id" — на позиции 1. Для того, чтобы найти следующее, начнём поиск с позиции 2: */
let str = 'Widget with id';
console.log( str.indexOf('id', 2) ); // 12
/* Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле. Каждый раз, получив очередную позицию, начинаем новый поиск со следующей:
 */
let str = 'Ослик Иа-Иа посмотрел на виадук';
let target = 'Иа'; // цель поиска
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  console.log( `Найдено тут: ${foundPos}` );
  pos = foundPos + 1; // продолжаем со следующей позиции
}
/* Тот же алгоритм можно записать и короче: */
let str = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log( `Найдено тут: ${pos}` );
}
// Другие методы
 /* метод	                выбирает…	                        отрицательные значения
    slice(start, end)   	от start до end (не включая end)	можно передавать отрицательные значения
    substring(start, end)	между start и end	                о/значения равнозначны 0
    substr(start, length)	length символов, начиная от start	знач. start мб отрицательным
 */
let str = "stringify";
// gi, получаем 2 символа, начиная с позиции 4 с конца строки
console.log( str.substr(-4, 2) );
// -----
// str.substring(start [, end])
/* Возвращает часть строки между start и end.
Это — почти то же, что и slice, но можно задавать start больше end.
Например:
 */
let str = "stringify";
// для substring эти два примера — одинаковы
console.log( str.substring(2, 6) ); // "ring"
console.log( str.substring(6, 2) ); // "ring"
// …но не для slice:
console.log( str.slice(2, 6) ); // "ring" (то же самое)
console.log( str.slice(6, 2) ); // "" (пустая строка)
/* Отрицательные значения substring, в отличие от slice, не поддерживает, они интерпретируются как 0. */
/* Получение подстроки
В JavaScript есть 3 метода для получения подстроки: substring, substr и slice.

str.slice(start [, end])
Возвращает часть строки от start до (не включая) end.

Например:
 */
let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
console.log( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
console.log( str.slice(0, 1) );
  /* strin
     s */
/* Если аргумент end отсутствует, slice возвращает символы до конца строки: */                
let str = "stringify";
console.log( str.slice(2) ); // ringify, с позиции 2 и до конца
/* Также для start/end можно задавать отрицательные значения. Это означает, что позиция определена как заданное количество символов с конца строки:
 */
//
//
//---------------------
let str = "stringify";
// начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
console.log( str.slice(-4, -1) ); // gif
//----------------------------
// includes, startsWith, endsWith
/* Более современный метод str.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет.
Это — правильный выбор, если нам необходимо проверить, есть ли совпадение, но позиция не нужна:  */
console.log( "Widget with id".includes("Widget") ); // true
console.log( "Hello".includes("Bye") ); // false
/* Необязательный второй аргумент str.includes позволяет начать поиск с определённой позиции: */
console.log( "Midget".includes("id") ); // true
console.log( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3
/* Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой: */
console.log( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
console.log( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"
//
/* Трюк с побитовым НЕ
Существует старый трюк с использованием побитового оператора НЕ — ~. Он преобразует число в 32-разрядное целое со знаком (signed 32-bit integer). Дробная часть, в случае, если она присутствует, отбрасывается. Затем все биты числа инвертируются.

На практике это означает простую вещь: для 32-разрядных целых чисел значение ~n равно -(n+1). */
console.log( ~2 ); // -3, то же, что -(2+1)
console.log( ~1 ); // -2, то же, что -(1+1)
console.log( ~0 ); // -1, то же, что -(0+1)
console.log( ~-1 ); // 0, то же, что -(-1+1)
   /* -3
      -2
      -1
       0 */
//-------
/* str.lastIndexOf(substr, position)
Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.

Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки или начинающееся до (включительно) определённой позиции.

При проверке indexOf в условии if есть небольшое неудобство. Такое условие не будет работать:
 */
let str = "Widget with id";
if (str.indexOf("Widget")) {
    console.log("Совпадение есть"); // не работает
}
/* Мы ищем подстроку "Widget", и она здесь есть, прямо на позиции 0. Но console.log не показывается, т. к. str.indexOf("Widget") возвращает 0, и if решает, что тест не пройден.

Поэтому надо делать проверку на -1: */
let str = "Widget with id";
if (str.indexOf("Widget") != -1) {
    console.log("Совпадение есть"); // теперь работает
}

