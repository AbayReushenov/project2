'use strict';
// Динамическая типизация
console.log(typeof(String(null)));
console.log(String(null));
        /* string
        null */
console.log(typeof(String(4)));
console.log(String(4));    
        /* string
        4 */
// Конкатенация , при сложении со строкой все превращается в строку
console.log(typeof(5 + ''));
console.log(5 + '');         
        /* string
        5 */
console.log(typeof(null + ''));
console.log(null + '');         
        /* string
            null*/  
// пример с конкатенацией
const num = 654;

console.log('https://vk.com/' + num); // устаревший метод
// =>> https://vk.com/654
//---------------------------------------------

const fontSize = 26 + 'px'; // на выходе строка

console.log(typeof(fontSize));
console.log(fontSize);
     /* string
        26px */
//---------------------------------------------

//  Number(); ==> to number

// 1  
const Size = '44';

console.log(Number(Size));
console.log(typeof(Number(Size)));
        /* 44
        number */
console.log(Size);
console.log(typeof(Size));
        /* 44
        string */
console.log(Number(Size) * 20 + 20 -25);
console.log(typeof(Number(Size) * 20 + 20 -25));
        /* 875
        number */
// 2-й способ
// + ==>> унарный плюс
console.log(+'5');
console.log(typeof(+"5"));
            /* 5
            number */
// 3- ментод: parseInt("стринговая еденица", числовая система 2-16 );
//  const parsed = parseInt(x, base);
//Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.



const fontSize = 26 + 'px'; // на выходе строка

console.log(typeof(parseInt(fontSize, 10)));
console.log(parseInt(fontSize, 10));
            /* number
            26 */
console.log(typeof(parseInt("26 px", 16)));
console.log(parseInt("26 px", 16));
            /* number
              38     ==> 26 в 16-тиричной системе равныв 10-р.с. 38 = 2*16 + 6*1 */
//

function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0; }
  return parsed * 100;
}

console.log(roughScale(' 0xF', 16));
// expected output: 1500

console.log(roughScale('321', 2));
// expected output: 0

        /* 1500
        0 */
//-------------------------------------
// Унарный рлюс при вводе данных с экрана
// клиент всегда вводит в строковое выражение
let answer = +prompt("Helllo", '');

// to boolean
//1 способ
// 0 => false
// '' => false // пустая строка , не пробел!!!
// null => false
// undefined => false
// NaN => false
// example

let switcher = null;
// switcher = 1;
if (switcher) {
    console.log("Working...");  // => Working...

    }
    else {
        console.log("Not working..."); // // switcher = 1; => Not working...
    }

// to boolean
//2 способ
console.log(typeof(Boolean('4')));
console.log(Boolean('4'));
        /* boolean
        true */

console.log(typeof(Boolean('')));
console.log(Boolean(''));
        /* boolean
        false */

console.log(typeof(Boolean('-1000.8945')));
console.log(Boolean('-1000.8945'));
        /* boolean
        true */

// to boolean
//3 способ // двойное отрицание : !!
console.log(typeof(!!'-1000.8945'));
console.log(!!'-1000.8945');
        /* boolean
        true */
console.log(typeof(!!NaN));
console.log(!!NaN);
        /* boolean
        false */
console.log(typeof(!!10));
console.log(!!10);
        /* boolean
        true */
console.log(typeof(!!''));
console.log(!!'');
            /* boolean
            false */

