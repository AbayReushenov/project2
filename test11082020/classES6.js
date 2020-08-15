// прочитайте о прототипах и их поведении в JavaScript. До ES6 синтаксис прототипов выглядел следующим образом:

var Person = function(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.stringSentence = function() {
  return "Привет, я " + this.name + " и мне " + this.age;
}

var personNew = new Person('Abay', 53)
console.log(personNew)
//Person { name: 'Abay', age: 53 }


// С синтаксисом классов в ES6:

class PersonES6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  stringSentence() {
    return `Привет, я ${this.name} и мне ${this.age}`;
  }
}

const myPersonES6 = new PersonES6("Manu", 23);
console.log(myPersonES6.age) // 23
console.log(myPersonES6.stringSentence()) // Привет, я Ману и мне 23