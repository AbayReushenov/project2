'use strict';

/* 
•	Какое будет выведено значение: let x = 5; console.log( x++ ); ?

•	Чему равно такое выражение: [ ] + false - null + true ?

•	Что выведет этот код: let y = 1; let x = y = 2; console.log(x); ?

•	Чему равна сумма [ ] + 1 + 2?

•	Что выведет этот код: console.log( "1"[0] )?

•	Чему равно 2 && 1 && null && 0 && undefined ?

•	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

•	Что выведет этот код: console.log( null || 2 && 3 || 4 ); ?

•	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

•	Что выведет этот код: console.log( +"Infinity" ); ?

•	Верно ли сравнение: "Ёжик" > "яблоко"?

•	Чему равно 0 || "" || 2 || undefined || true || falsе ?
 */

let x = 5; 
console.log( x++ ); // 5 
x++;
console.log( x++ ); // 7
console.log( x );  // 8
console.log( ++x ); //9

console.log([ ] + false - null + true ); // NaN 
// при второй операции "-" от строки отнимают null => выходит ошибка NaN

 console.log(typeof([ ] + false - null + true )); // number
console.log([ ] + false); // false // пустой массив представляется пустой строкой "" , который при конкатенации с любым другим типом становится строкой

console.log([] + false); // false
console.log('' + false); // false
console.log(typeof([ ] + false)); // string





let y = 1; 
let x = y = 2; 
console.log(x);  //2
//присвоение едет справа налево < - - - - 


console.log([ ] + 1 + 2);  // 12
// конкатенация => строка


console.log( "1"[0] ); // 1
// массив сторки под номером 0

console.log(2 && 1 && null && 0 && undefined); // null
// ? верно ли ?
// оператор  И запинается на лжи, 
// ИЛИ запинается на правде
// идет слева направо
// как только дойдет до null будет  =>false 

//  -----

let a = NaN, 
b = true;

console.log(!!( a && b ) === (a && b));
// false
// !! превращает любое выражение в Boolean


// ---
console.log( null || 2 && 3 || 4 ); // 3
//
// логическое И имеет приоретет выше ИЛИ
// 2 && 3 => оба выражения равны и возвращается последнее выражение =3



// -------
a = [1, 2, 3]; b = [1, 2, 3]; // Правда ли что a == b ?
console.log(Boolean(a == b)); //false
console.log(a == b);
console.log(Boolean(a === b));
         /* false
            false 
            false */

console.log( +"Infinity" );  // Infinity
console.log(typeof(+"Infinity") );  // number

console.log( "Infinity" );  // Infinity
console.log(typeof("Infinity") ); // string

console.log( +"Infinity+" );  // NaN
console.log( +"489 dsg dsg" );  // NaN
console.log( +"  489 " );  // 489
console.log( +"  489 ." );  // NaN

console.log("Ёжик" > "яблоко"); // false
console.log("Eжик" > "яблоко"); // false
console.log("яжик" > "яблоко"); // true
console.log("южик" > "яблоко"); // false
console.log("Ёжик" > "ЁжииААА"); // true


console.log(0 || "" || 2 || undefined || true || falsе);   // 2
// ИЛИ запинается на правде
// выражение доходит до 
// 2 и далее не считает
console.log(!!(0 || "" || 2 || undefined || true || falsе));  // true   

console.log(0 || "" || 2 || undefined || true || 1); // 2
// расчет идет слева направо
console.log(1 || "" || 2 || undefined || true || NaN); // 1
// расчет идет слева направо