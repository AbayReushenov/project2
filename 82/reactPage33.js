// Старый синтаксис
sound = 'jkjkj'
var skier = {
    name: name,
    sound: sound,
    powderYell: () => {
//    powderYell: function() { //->тоже работает
        var yell = this.sound.toUpperCase()
        console.log(`${yell} ${yell} ${yell}!!!`)
    },
    speed: function(mph) {
        this.speed = mph
        console.log('speed:', mph)
} }

//skier.sound = "AAA"
skier.speed(35)
skier.powderYell()

// Новый синтаксис
const skierNew = {
    name,
    sound,
    powderYell() {
        let yell = this.sound.toUpperCase()
        console.log(`${yell} ${yell} ${yell}!!!`)
    },
    speed(mph) {
        this.speed = mph
        console.log('speed:', mph)
    }
}
skierNew.speed(35)
skierNew.powderYell()

// speed: 35
// reactPage33.js:9 JKJKJ JKJKJ JKJKJ!!!
// reactPage33.js:30 speed: 35
// reactPage33.js:26 JKJKJ JKJKJ JKJKJ!!!

var peaks = ["Tallac", "Ralston", "Rose"]
var canyons = ["Ward", "Blackwood"]
var tahoe = [...peaks, ...canyons]
/* console.log(tahoe.join(', ')) // Tallac, Ralston, Rose, Ward, Blackwood
var last0 = tahoe.reverse() // реверс поменял все в исходнлм массиве
console.log(tahoe.join(', '))//Blackwood, Ward, Rose, Ralston, Tallac
console.log(last0.join(', ')) //Blackwood, Ward, Rose, Ralston, Tallac

var [element0] = tahoe // назначаем значение первого элемента
console.log(element0) // Blackwood */

console.log(tahoe.join(', ')) // Tallac, Ralston, Rose, Ward, Blackwood
var [element0, element1] = [...tahoe].reverse()
console.log(tahoe.join(', ')) // Tallac, Ralston, Rose, Ward, Blackwood
console.log(element0, element1) // Blackwood Ward (последние 2 элемента)

// var oehat = [...tahoe]
// console.log(oehat.join(', '))
// console.log(tahoe.join(', '))
// Tallac, Ralston, Rose, Ward, Blackwood
// Tallac, Ralston, Rose, Ward, Blackwood

var lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"]
var [first, ...rest] = lakes
console.log(rest.join(", ")) // "Marlette, Fallen Leaf, Cascade"

function directions(...args) {
    var [start, ...remaining] = args
    var [finish, ...stops] = remaining.reverse()
    console.log(`drive through ${args.length} towns`)
    console.log(`start in ${start}`)
    console.log(`the destination is ${finish}`)
    console.log(`stopping ${stops.length} times in between`)
  }
  directions(
      "Truckee",
      "Tahoe City",
      "Sunnyside",
      "Homewood",
      "Tahoma"
  )

  var morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
  }
  var dinner = "mac and cheese"
  var backpackingMeals = {
    ...morning,
    dinner
  }
  console.log(backpackingMeals) 
// {breakfast: "oatmeal",
// lunch: "peanut butter and jelly",
// dinner: "mac and cheese"}

// page 36
  