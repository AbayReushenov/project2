//Оставшиеся параметры (rest parameters)
//Синтаксис оставшихся параметров функции позволяет представлять неограниченное множество аргументов в виде массива.

// Синтаксис
// function(a, b, ...theArgs) {
//   // ...
// }

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10

//--------
//   Описание
// Если последний именованный аргумент функции имеет префикс ..., он автоматически становится массивом с элементами от 0 до theArgs.length в соответствии с актуальным количеством аргументов, переданных в функцию.

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a); 
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs); 
}

myFun("один", "два", "три", "четыре", "пять", "шесть");

// Console Output:
// a, один
// b, два
// manyMoreArgs, [три, четыре, пять, шесть]


// //----
// Отличия оставшихся параметров от объекта arguments
// Существует три основных отличия оставшихся параметров от объекта arguments:

// оставшиеся параметры включают только те, которым не задано отдельное имя, в то время как объект arguments содержит все аргументы, передаваемые в функцию;
// объект arguments не является массивом, в то время как оставшиеся параметры являются экземпляром Array и методы sort, map, forEach или pop могут непосредственно у них использоваться;
// объект arguments имеет дополнительную функциональность, специфичную только для него (например, свойство callee).

// Деструктуризация оставшихся параметров
// Оставшиеся парамерты могут быть деструктуризованы (только массивы). Это означает, что их данные могут быть заданы как отдельные значения. Смотрите Деструктурирующее присваивание.

function f(...[a, b, c]) {
  return a + b + c;
}

console.log(f(1) );         // NaN (b и c равны undefined)
console.log(f(1, 2, 3) );   // 6
console.log(f(1, 2, 3, 4, 5 , 6, )); // 6 (четвёртый параметр не деструктурирован/*  */


// Теперь мы можем легко получить оставшиеся параметры как обычный массив

function fnew(...args) {
    var normalArray = args;
    var first = normalArray.shift(); // OK, даёт первый аргумент
    return ({normalArray, first});
  }

console.log(fnew(1, 2, 3, 4, 5, 6, 7, ));
//{ normalArray: [ 2, 3, 4, 5, 6, 7 ], first: 1 }

// ----------------------------
// Параметры по умолчанию
//Параметры по умолчанию позволяют задавать формальным параметрам функции значения по умолчанию в случае, если функция вызвана без аргументов, или если параметру явным образом передано значение undefined.
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5

// ----------------------------
// Синтаксис
// function [name]([param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]) {
//    statements
// }

// Чтобы такого не происходило, в теле функции использовался код подобный тому, что находится во второй строчке, где в случае, если функция multiply вызывалась только c одним аргументом, параметру b присваивалось значение 1:

function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;
  return a*b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5
// -------------
// Передача значения undefined в сравнении с передачей других "ложных" значений
// Значение по умолчанию присваивается формальному параметру только если при вызове функции значение для данного параметра не было передано или было явным образом передано undefined. Если формальному параметру при вызове передано любое значение, отличное от undefined, в том числе одно из "ложных" значений, таких как false, 0, "", '', ``, null, NaN, то в этом случае значение по умолчанию присвоено параметру не будет.  Это иллюстрирует следующий пример:

function test(num = 1) {
  console.log(typeof num);
}

// num не прередано, или передано undefined:
console.log(test());          // 'number' (num получил значение 1)
console.log(test(undefined)); // 'number' (и здесь num получил значение 1)

// num передано значение null или другое "ложное" значение:
console.log(test(''));        // 'string' (num получил значение '')
console.log(test(null));      // 'object' (num получил значение null)


// ----------

// Параметры по умолчанию вычисляются в момент вызова функции
// В Javascript параметры по умолчанию вычисляются в момент вызова функции. В отличие от языка Python, при каждом вызове функции создается новое лексическое окружение функции.

function append(value, array = []) {
  array.push(value);
  return array;
}

console.log(append(1)); // [ 1 ]
console.log(append(1), append(2)); // [ 1 ] [ 2 ]
console.log(append(2)); // [2], а не [1, 2]
// [ 1 ]
// [ 1 ] [ 2 ]
// [ 2 ]
//
//Это верно и для функций, и для переменных:
function callSomething(thing = something()) {
  return thing;
 }
 
let numberOfTimesCalled = 0;
 function something() {
   numberOfTimesCalled += 1;
   return numberOfTimesCalled;
 }
 
 console.log(callSomething()); // 1
 console.log(callSomething()); // 2
 console.log(callSomething()); // 3
 console.log(callSomething()); // 4
 console.log(callSomething()); // 5
 console.log(callSomething()); // 6
// 1
// 2
// 3
// 4
// 5
// 6

//----
// Параметры по умолчанию доступны в следующих параметрах по умолчанию
// В параметрах по умолчанию можно использовать значения предыдущих (расположеннных левее в списке) параметров:

function greet(name, greeting, message = greeting + ' ' + name) {
    return [name, greeting, message];
}

console.log(greet('David', 'Hi'));  // ["David", "Hi", "Hi David"]
console.log(greet('David', 'Hi', 'Happy Birthday!'));  // ["David", "Hi", "Happy Birthday!"]


//*******rest operator 
const log = function(A, B , ... rest) {
  console.log(A, B, rest);
}

log('basic', 'rest', 'operator', "usage", "oiuopijp'oij");
//basic rest [ 'operator', 'usage', "oiuopijp'oij" ]

function calcOrDouble(number, basis) {
  basis = basis || 2; // || => или
  // иногда бывают ошибки
  console.log(number * basis);
}  

calcOrDouble(3, 5 ); // 15 
calcOrDouble(3,  ); // 6
//---ыыы---ы-ы-ы-ы-
function calcOrDouble2(number, basis = 2) {
   console.log(number * basis);
}  
calcOrDouble2(3, 10 ); // 30
calcOrDouble2(10,  ); // 20
