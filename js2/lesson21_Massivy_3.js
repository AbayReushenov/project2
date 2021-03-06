"use strict";

/* Чтобы пройтись по элементам массива:

for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми браузерами.
for (let item of arr) – современный синтаксис только для значений элементов (к индексам нет доступа).
for (let i in arr) – никогда не используйте для массивов! */
/* 
Мы можем использовать массив как двустороннюю очередь, используя следующие операции:

push(...items)добавляет items в конец массива.
pop() удаляет элемент в конце массива и возвращает его.
shift() удаляет элемент в начале массива и возвращает его.
unshift(...items) добавляет items в начало массива. */

/* Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов.

Объявление:
 */
// квадратные скобки (обычно)
let arr = [item1, item2];

// new Array (очень редко)
let arr = new Array(item1, item2);
let arr = new Array(number); //создаёт массив с заданной длиной, но без элементов
/* Массивы по-своему реализуют метод toString, который возвращает список элементов, разделённых запятыми.
Например:
 */
let arr = [1, 2, 3];

console.log( arr ); // 1,2,3
console.log( String(arr) === '1,2,3' ); // true
        /* [ 1, 2, 3 ]
             true */
/*              Массивы могут содержать элементы, которые тоже являются массивами. Это можно использовать для создания многомерных массивов, например, для хранения матриц:
 */
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] ); // 5, центральный элемент
//----- new Array()
/* Существует ещё один вариант синтаксиса для создания массива:

                    */
let arr = new Array("Яблоко", "Груша", "и тд");
console.log( arr[0] ); 
console.log( arr.length ); 
let arr2 = new Array(2); // создастся ли массив [2]?
console.log( arr2[0] ); // undefined! нет элементов.
console.log( arr2.length ); // length 2
      /* Яблоко
      3
      undefined
      2
 */
let arr = [1, 2, 3, 4, 5];
console.log( arr );
arr.length = 2; // укорачиваем до двух элементов
console.log( arr ); // [1, 2]
arr.length = 5; // возвращаем length как было
console.log( arr[3] ); // undefined: значения не восстановились
//Таким образом, самый простой способ очистить массив – это 
arr.length = 0;
console.log( arr );
/* [ 1, 2, 3, 4, 5 ]
[ 1, 2 ]
undefined
[] */
/* Свойство length автоматически обновляется при изменении массива. Если быть точными, это не количество элементов массива, а наибольший цифровой индекс плюс один.

Например, единственный элемент, имеющий большой индекс, даёт большую длину:
 */
let fruits = [];
fruits[123] = "Яблоко";

console.log( fruits.length ); // 124
//
/* Технически, так как массив является объектом, можно использовать и вариант for..in: */
let arr = ["Яблоко", "Апельсин", "Груша"];
for (let key in arr) {
  console.log( arr[key] ); // Яблоко, Апельсин, Груша
}
    /* Яблоко
    Апельсин
    Груша */
/* Но на самом деле это – плохая идея. Существуют скрытые недостатки этого способа:

Цикл for..in выполняет перебор всех свойств объекта, а не только цифровых.

В браузере и других программных средах также существуют так называемые «псевдомассивы» – объекты, которые выглядят, как массив. То есть, у них есть свойство length и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны. Тем не менее, цикл for..in выведет и их. Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие «лишние» свойства могут стать проблемой.

Цикл for..in оптимизирован под произвольные объекты, не массивы, и поэтому в 10-100 раз медленнее. Увеличение скорости выполнения может иметь значение только при возникновении узких мест. Но мы всё же должны представлять разницу.

В общем, не следует использовать цикл for..in для массивов. */
//
/* Перебор элементов
Одним из самых старых способов перебора элементов массива является цикл for по цифровым индексам: */
let arr = ["Яблоко", "Апельсин", "Груша"];
for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}
console.log('---------');
    /* Яблоко
    Апельсин
    Груша */
arr.pop(); // удаляем один элемент с конца
for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}
console.log('---------');
arr.push('Мандарин');
for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}
console.log('---------');
 /* Яблоко
    Апельсин
    Груша
    ---------
    Яблоко
    Апельсин
    ---------
    Яблоко
    Апельсин
    Мандарин
    ---------
 */
arr.shift(); // удаляем первый элемент с начала
for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}
console.log('---------');
/* Яблоко
Апельсин
Груша
---------
Яблоко
Апельсин
---------
Яблоко
Апельсин
Мандарин
---------
Апельсин
Мандарин
--------- */
arr.unshift("Клубника"); // добавляем первый элемент с начала
for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}
console.log('---------');
/* Клубника
Апельсин
Мандарин
--------- */

/* технически мы можем сделать следующее:
 */
let fruits = []; // создаём массив
fruits[99999] = 5; // создаём свойство с индексом, намного превышающим длину массива
fruits.age = 25; // создаём свойство с произвольным именем

/* Варианты неправильного применения массива:
Добавление нечислового свойства, например: */
arr.test = 5;
// Создание «дыр», например: добавление 
let arr[0] = 1; //, затем 
let arr[1000] = 2; // (между ними ничего нет).
//Заполнение массива в обратном порядке, например: 
let arr[1000] = 12;
let arr[999] = 654; //и т.д.
//
//
let fruits = ["Банан"]
let arr = fruits;   // копируется по ссылке (две переменные ссылаются на один и тот же массив)
console.log( arr === fruits ); // true
arr.push("Груша"); // массив меняется по ссылке
console.log( fruits ); // Банан, Груша - теперь два элемента
//
/* Висячая запятая
Список элементов массива, как и список свойств объекта, может оканчиваться запятой: */
let fruits = [
  "Яблоко",
  "Апельсин",
  "Слива",
];
console.log( fruits ); 
// [ 'Яблоко', 'Апельсин', 'Слива' ]
/* «Висячая запятая» упрощает процесс добавления/удаления элементов, так как все строки становятся идентичными. */

// В массиве могут храниться элементы любого типа.
// Например:
// разные типы значений
let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { console.log('привет'); } ];
// получить элемент с индексом 1 (объект) и затем показать его свойство
console.log( arr[1].name ); // Джон
// получить элемент с индексом 3 (функция) и выполнить её 
arr[3](); 
// привет

/* Существует два варианта синтаксиса для создания пустого массива:
 */
let arr = new Array();
let arr = [];
/* Практически всегда используется второй вариант синтаксиса. В скобках мы можем указать начальные значения элементов:
 */
let fruits = ["Яблоко", "Апельсин", "Слива"];
/* Элементы массива нумеруются, начиная с нуля.
Мы можем получить элемент, указав его номер в квадратных скобках: */
console.log(fruits);
console.log( fruits[0] ); // Яблоко
console.log( fruits[1] ); // Апельсин
console.log( fruits[2] ); // Слива
/* Мы можем заменить элемент:
 */
fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]
console.log(fruits);
/* …Или добавить новый к существующему массиву:  */
fruits[3] = 'Лимон'; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]
console.log(fruits);
    /* [ 'Яблоко', 'Апельсин', 'Слива' ]
    Яблоко
    Апельсин
    Слива
    [ 'Яблоко', 'Апельсин', 'Груша' ]
    [ 'Яблоко', 'Апельсин', 'Груша', 'Лимон' ] */

    // -----

    /*  Шпаргалка по методам массива:

Для добавления/удаления элементов:

push (...items) // – добавляет элементы в конец,
pop()  // – извлекает элемент с конца,
shift() // – извлекает элемент с начала,
unshift(...items) // – добавляет элементы в начало.
splice(pos, deleteCount, ...items) // – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
slice(start, end) // – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
concat(...items) // – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
 Для поиска среди элементов: 

indexOf/lastIndexOf(item, pos) // – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
includes(value) // – возвращает true, если в массиве имеется элемент value, в противном случае false.
find/filter(func) // – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
findIndex //похож на find, но возвращает индекс вместо значения.
//Для перебора элементов:

forEach(func) // – вызывает func для каждого элемента. Ничего не возвращает.
Для преобразования массива: 

map(func) // – создаёт новый массив из результатов вызова func для каждого элемента.
sort(func) // – сортирует массив «на месте», а потом возвращает его.
reverse() // – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
split/join // – преобразует строку в массив и обратно.
reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
Дополнительно:

Array.isArray(arr) проверяет, является ли arr массивом.
Обратите внимание, что методы sort, reverse и splice изменяют исходный массив.

Изученных нами методов достаточно в 99% случаев, но существуют и другие.

arr.some(fn)/arr.every(fn) проверяет массив.

Функция fn вызывается для каждого элемента массива аналогично map. Если какие-либо/все результаты вызовов являются true, то метод возвращает true, иначе false.

arr.fill(value, start, end) – заполняет массив повторяющимися value, начиная с индекса start до end.

arr.copyWithin(target, start, end) – копирует свои элементы, начиная со start и заканчивая end, в собственную позицию target (перезаписывает существующие).

Полный список есть в справочнике MDN. 
*/