// Ключевое слово static используется в классах для определения статичных методов. Статичные методы функции, принадлежащие объекту класса, но не доступные другим объектам того же класса.

class Repo {
  static getName() {
    return "Repo name is modern-js-cheatsheet"
  }
  getNameOrdinary() {
    return "getNameOrdinary is method of modern-js-cheatsheet"
  }
  static modifyName(){
    return this.getName() + '-added-this'
  }
  useName(){
    // вызывает статический метод в качестве свойства конструктора
    return this.constructor.getName() + 'Hello world!'
  }
  
}


// нам не нужно создавать объект класса Repo
console.log(Repo.getName()) 
// "Repo name is modern-js-cheatsheet"

let r = new Repo();
// console.log(r.getName()) 
// необработанная ошибка TypeError: r.getName не является функцией

const abay = new Repo()
// console.log(abay.getName())
// TypeError: abay.getName is not a function
console.log(abay.getNameOrdinary())
// getNameOrdinary is method of modern-js-cheatsheet

console.log(Repo.modifyName())
// Repo name is modern-js-cheatsheet-added-this

console.log(r.useName()) 
// Repo name is modern-js-cheatsheetHello world!