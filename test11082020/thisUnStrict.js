// зависит от вызова функции.
function myFunc(x) {
    console.log(this)
    console.log(x)
  }

myFunc.call("myString", "hello") 
// myString — первый аргумент функции .call для this
//=>
// [String: 'myString']
// hello


myFunc("hello") 
//=>
//window
//hello

myFunc.call(undefined, "hello")
// window
// hello