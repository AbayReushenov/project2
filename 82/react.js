
// var div,
//     container = document.getElementById('container')
// //console.log(this.container)
// for (var i=0; i<5; i++) {   
// div = document.createElement('div') 
// div.onclick = function() {      
//     console.log(i + 20)    
//     console.log('This is box #' + i)
//    }
//  container.appendChild(div) }

var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
    print: function(delay=1000) {
      setTimeout(() => {
        console.log(this.resorts.join(","))
  }, delay) }
  }
  tahoe.print() // Kirkwood, Squaw, Alpine, Heavenly, Northstar

// const add = (x=5, y=10) => console.log(x+y);
// Запустив для этого кода транспилятор, на выходе мы получим следующий код:
// "use strict";
// var add = function add() {
//   var x = arguments.length <= 0 || arguments[0] === undefined ?
//       5 : arguments[0];
//   var y = arguments.length <= 1 || arguments[1] === undefined ?
//       10 : arguments[1];
//   return console.log(x + y);
// };

//   var tahoe = {
//     resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
//     print: (delay=1000) => {
//       setTimeout(() => {
//         console.log(this.resorts.join(","))
//   }, delay)
//   } }
//   tahoe.print()
  // Невозможно прочитать свойство resorts, принадлежащее undefined

const add1 = (x=5, y=10) => console.log(x+y);
// Запустив для этого кода транспилятор, на выходе мы получим следующий код:
// "use strict";
var add = function add() {
  var x = arguments.length <= 0 || arguments[0] === undefined ?
      5 : arguments[0];
  var y = arguments.length <= 1 || arguments[1] === undefined ?
      10 : arguments[1];
  return console.log(x + y);
};
add()
add(50)
add( 0,150)
add1(50)
add1( null ,250)
add1()
add1(1,4)
//----------
var lordify = regularPerson => {
    console.log(`${regularPerson.firstname} of Canterbury`)
  }
  var regularPerson = {
    firstname: "Bill",
    lastname: "Wilson"
  }
  lordify(regularPerson) // Bill of Canterbury
//   Вместо того чтобы использовать синтаксис точечной нотации для проникнове- ния в объект, можно деструктурировать те значения, которые нам нужно извлечь из элемента regularPerson:
  var lordify2 = ({firstname}) => {
    console.log(`${firstname} of Canterbury`)
  }
  lordify2(regularPerson) // Bill of Canterbury
//--
var [firstResort] = ["Kirkwood", "Squaw", "Alpine"]
console.log(firstResort) // Kirkwood
// Используя соответствие списку с применением запятых, можно также пропустить ненужные значения. Соответствие происходит, когда запятые ставятся вместо тех элементов, которые должны быть пропущены. Применяя тот же самый массив, мож- но получить доступ к последнему значению, заменив первые два значения запятыми:
var [,,thirdResort] = ["Kirkwood", "Squaw", "Alpine"]
console.log(thirdResort) // Alpine


// Расширение объектных литералов является противоположностью деструктуриро- вания. Это процесс реструктурирования или воссоединения. С его помощью можно превратить в объект переменные из глобальной области видимости:
var name = "Tallac"
var elevation = 9738
var funHike = {name,elevation}
console.log(funHike) // {name: "Tallac", elevation: 9738}
// Теперь элементы name и elevation являются ключами объекта funHike.

var name = "Tallac"
var elevation = 9738
var print = function() {
  console.log(`Mt. ${this.name} is ${this.elevation} feet tall`)
}
var funHike = {name,elevation,print}
funHike.print() // Mt. Tallac is 9738 feet tall

