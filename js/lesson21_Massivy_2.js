"use strict";

const str = prompt(", ");
const producty = str.split(", "); // расщепление строки ввода по ключу ", " (запятая и пробел)
console.log(producty);
/* [" efw,fre", "wqrfe", "f", "we", "", "", "   q", "f,,"]
0: " efw,fre"
1: "wqrfe"
2: "f"
3: "we"
4: ""
5: ""
6: "   q"
7: "f,,"
length: 8 */
producty.sort(); //сортировка (метод сортировки) данных массива
console.log(producty.join('; ')); // соединение массива в один элемент с разделителем  "; " (точка с запятой и пробел)
/* (6) ["fdf", "adas", "dsad", "asdddas", "adsdas", "ddsads"]
script.js:16 fdf; adas; dsad; asdddas; adsdas; ddsads */

// после сортировки
      /* ["рпол шгр б ", "щшрршощ ", "щзшошщзо", "зщшошощз", "Ajj", "ee", "Ekjjk", "ahhaha", "11", "55", "66", "03"]
        0: "03"
        1: "11"
        2: "55"
        3: "66"
        4: "Ajj"
        5: "Ekjjk"
        6: "ahhaha"
        7: "ee"
        8: "зщшошощз"
        9: "рпол шгр б "
        10: "щзшошщзо"
        11: "щшрршощ "
        length: 12 */

const arr = [1000, 230, 32, 456, 64, 9, 89,77];
console.log(arr);
arr.sort(); // метод .sort() сортирут как строки!
console.log(arr);
//
/* [
    1000, 230, 32,
     456,  64,  9,
      89,  77
  ]
  [
    1000, 230, 32,
     456,  64, 77,
      89,   9
  ] */
  const arr = [1000, 2 , 32, 456, 64, 9, 89,77];
  console.log(arr);
  arr.sort(copmareNums); // в метод .sort() добавим callback функцию сортировки чисел
  console.log(arr);
  function copmareNums(a, b) {
      return a - b;
  }
/*   [
  1000, 2, 32, 456,
    64, 9, 89,  77
]
[
   2,  9,  32,   64,
  77, 89, 456, 1000
]
   */