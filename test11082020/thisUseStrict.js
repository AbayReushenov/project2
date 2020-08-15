// зависит от вызова функции.
// В строгом режиме
"use strict"

function myFunc(x) {
    console.log(this)
    console.log(x)
  }

myFunc.call("myString", "hello") 
// myString — первый аргумент функции .call для this
//=>
// myString
// hello


myFunc("hello") 
//=>
//undefined
//hello


// объект не определён: myFunc() — это синтаксический сахар для 
// 
myFunc.call(undefined, "hello")
// undefined
// hello