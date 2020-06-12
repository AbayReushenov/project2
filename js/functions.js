/* функция — это "подпрограмма", */
/* Объявляем функцию 'myFunc' */
function myFunc(theObject) {
   theObject.brand = "Toyota";
 }
 
 /*
  * Объявляем переменную 'mycar';
  * создаём и инициализируем новый Object;
  * приравниваем 'mycar' к ссылке на него
  */
 var mycar = {
   brand: "Honda",
   model: "Accord",
   year: 1998
 };

 /* Выведет 'Honda' */
 console.log(mycar.brand);

 /* Передаём ссылку на объект в функцию */
 myFunc(mycar);

 /*
  * Выведет 'Toyota', так как значение свойства 'brand' 
  * было изменено внутри функции.
  */
 console.log(mycar.brand);
 //
// -- 
function showFirstMessage() {
   console.log("Hello World!");
   }
showFirstMessage();
//
// -- 
function showFirstMessage(text) {
   console.log(text);
   }
showFirstMessage("Hello World!");
//
let num = 20;
function showFirstMessage(text) {
   console.log(text);
   num = 10;
   }
showFirstMessage("Hello World!");
console.log(num); // 10
//
let num = 20;
function showFirstMessage(text) {
   console.log(text);
   num = 10;
   }
// showFirstMessage("Hello World!");
console.log(num); // 20
//
let num = 20;
function showFirstMessage(text) {
   console.log(text);
   let num = 10;
   }
showFirstMessage("Hello World!");
console.log(num); // 20
//
// Замыкание
//
let num = 20;
function showFirstMessage(text) {
   console.log(text);
   console.log(num);
 //  let num = 10;
   }
showFirstMessage("Hello World!");
console.log(num); // 20, 20



//
let fun = (a,b) => a + b ;
console.log(fun(1,2));
//
function fun(a,b) {
   return a+b;
};
console.log(fun(1,2));
//
// "Не читаемый код"
function fun(a,b) {
   return a+b;
   console.log("Не читаемый код"); // После return
   };
console.log(fun(1,2));
//
// Читаемый код
function fun(a,b) {
   console.log("Читаемый код");
   return a+b;
   };
console.log(fun(1,2));
//
// возможен вызов функции до ее появления в коде
console.log(abc(1,2,3));
console.log(abc(4,5,6));
console.log(abc(7,8,99855));
function abc(a,b,c) {
    return a + b +c ;
   } // нет ;
    /* 6
      15
      24 */
//
//
// вызов функции после объявления в коде
let abc = (a,b,c) => { return a + b +c ;}; // нужна ;
console.log(abc(10,20,30));
console.log(abc(40,50,60));
console.log(abc(70,80,90));
    /* 60
      150
      240 */
      //
//
//
const calc = (a, b, c, d) => a + b + c + d ;
console.log(calc(10,20,30,25));
//
//
//
const calc = (a, b, c, d) => {
   console.log(a," ", b, " ", c, " ", d);
   return a + b + c + d ;
};
console.log(calc(10,20,30,25));
//10   20   30   25
//85
//

