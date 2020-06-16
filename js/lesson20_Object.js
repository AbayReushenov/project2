"use strict";

// первый вариант
const obj = new Object();

// 2 вариант
const svoystva = {
    name: "test",
    widht: 1024,
    height: 1024,
    colors: {
        borders: "black",
        low: "red",
        nor: "grey",
        uiy: "white",
        pouewkjhbfeub: "rouge"
    },
    begemots: "midle",
    fastes: 1066584.65,
    uytg: 654
 };


// console.log(svoystva['colors']['pouewkjhbfeub']);
// rouge
/*  console.log(svoystva['name']);
 console.log(svoystva.name);
 
 delete svoystva['name']; 

 console.log(svoystva); */

/*  for (let key in svoystva) {
     console.log(`Свойство ${key} имеет значение  ${svoystva[key]}`);
    } */
    /*  Свойство name имеет значение  test
    Свойство widht имеет значение  1024
    Свойство height имеет значение  1024
    Свойство colors имеет значение  [object Object]
    Свойство fastes имеет значение  1066584.65
    Свойство begemots имеет значение  midle
    Свойство uytg имеет значение  654 */
    
    /* for (let key of svoystva) { // of не работает!!!!  TypeError: svoystva is not iterable
    console.log(`Свойство ${key} имеет значение  ${svoystva[key]}`);
}  */
//

/* for (let key in svoystva) {
    if (typeof(svoystva[key]) === 'object') {
        for ( let i in svoystva[key]) {
                console.log(`Свойство ${i} имеет значение  ${svoystva[key][i]}`);
                                        } 
     } else {
    console.log(`Свойство ${key} имеет значение  ${svoystva[key]}`);    
    }
} */
/* Свойство name имеет значение  test
Свойство widht имеет значение  1024 
Свойство height имеет значение  1024
Свойство borders имеет значение  black
Свойство low имеет значение  red
Свойство nor имеет значение  grey
Свойство uiy имеет значение  white
Свойство pouewkjhbfeub имеет значение  rouge
Свойство begemots имеет значение  midle
Свойство fastes имеет значение  1066584.65
Свойство uytg имеет значение  654 */

/* let counter = 0;
for (let key in svoystva) {
    if (typeof(svoystva[key]) === 'object') {
        for ( let i in svoystva[key]) {
                console.log(`Свойство ${i} имеет значение  ${svoystva[key][i]}`);
                  // counter++;
                                        } 
     } else {
    console.log(`СВОЙСТВО ${key} имеет значение  ${svoystva[key]}`);  
    counter++;  
    }
} */
/* console.log(counter);
СВОЙСТВО name имеет значение  test
СВОЙСТВО widht имеет значение  1024
СВОЙСТВО height имеет значение  1024
Свойство borders имеет значение  black
Свойство low имеет значение  red
Свойство nor имеет значение  grey
Свойство uiy имеет значение  white
Свойство pouewkjhbfeub имеет значение  rouge
СВОЙСТВО begemots имеет значение  midle
СВОЙСТВО fastes имеет значение  1066584.65
СВОЙСТВО uytg имеет значение  654
6 */
let counter = 0;
for (let key in svoystva) {
    /*     if (typeof(svoystva[key]) === 'object') {
        for ( let i in svoystva[key]) {
                console.log(`Свойство ${i} имеет значение  ${svoystva[key][i]}`);
        //          counter++;
                                        } 
        } else {
    console.log(`СВОЙСТВО ${key} имеет значение  ${svoystva[key]}`);   */
    counter++;  
    }

console.log(counter);
// [Running] node "/Users/reushenov/FrontEnder/Udemy/project2/js/tempCodeRunnerFile.js"
// 7
console.log(Object.keys(svoystva));
/* 7
[
  'name',     'widht',
  'height',   'colors',
  'begemots', 'fastes',
  'uytg'
] */
console.log(Object.keys(svoystva).length);
/* 
7
[
  'name',     'widht',
  'height',   'colors',
  'begemots', 'fastes',
  'uytg'
]
7 
*/
//---------------------------------------------------------
// 2 вариант
const svoystva = {
    name: "test",
    widht: 1024,
    height: 1024,
    colors: {
        borders: "black",
        low: "red",
        nor: "grey",
        uiy: "white",
        pouewkjhbfeub: "rouge"
    },
    begemots: "midle",
    fastes: 1066584.65,
    uytg: 654,
    makeTest: function() {
        console.log("Test");
    }
 };
 svoystva.makeTest();
// => Test
//
//---------------------------------------------------------
// Деструктуризация объекта
const {borders, low, nor, pouewkjhbfeub} = svoystva.colors;
console.log(borders);
console.log(low);
console.log(nor);
console.log(pouewkjhbfeub);
//console.log(uiy);
/*          Test
            black
            red
            grey
            rouge */
//
//---------------------------------------------------------
// Методы из Консоли
/* 
console.dir(String)
VM1575:1 
ƒ String()
arguments: (...)
caller: (...)
fromCharCode: ƒ fromCharCode()
fromCodePoint: ƒ fromCodePoint()
length: 1
name: "String"
prototype: String
anchor: ƒ anchor()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:1:142)]
caller: (...)
length: 0
name: "toUpperCase"
__proto__: ƒ ()
[[Scopes]]: Scopes[0]
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
__proto__: Object
[[PrimitiveValue]]: ""
raw: ƒ raw()
__proto__: ƒ ()
[[Scopes]]: Scopes[0] */
// Пример
/* Syntax
string.toUpperCase() */
let a = "GIuyg  io8h oh nio 8ho  u";
let c = a.toUpperCase();
console.log('a = ', a, '\n', 'c  = ', c, '\n','a to Upp=', a.toUpperCase(), '\n', 'c to Low=', c.toLowerCase());
// =>
/* a =  GIuyg  io8h oh nio 8ho  u 
 c  =  GIUYG  IO8H OH NIO 8HO  U 
 a to Upp= GIUYG  IO8H OH NIO 8HO  U 
 c to Low= giuyg  io8h oh nio 8ho  u
25 25 */