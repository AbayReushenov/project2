// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.


//---------вариант 1 ------------------
function divisibleBy1(numbers, divisor) {
    const newNumbers = []
    numbers.map(i => {
       if (i/divisor - Math.floor(i/divisor) === 0) {
       newNumbers.push(i) }
      })
    return newNumbers
 }
 console.log(divisibleBy1([54,54,87,247478,654,69584,0,847,11,12,45.2], 3))
 //[ 54, 54, 87, 654, 0, 12 ]


//----------вариант 2 ------------------
 const divisibleBy2 = (numbers, divisor) => {
   const newNumbers = []
   numbers.map(i => Number.isInteger(i / divisor) ? newNumbers.push(i): null)
   return newNumbers
 }
 console.log(divisibleBy2([54,54,87,247478,654,69584,847,0, 11,12,45.2], 3))
//[ 54, 54, 87, 654, 0, 12 ]
//--- JavaScript method: Number.isInteger(anyNumber) returns true / false
 console.log(Number.isInteger(3.2)) // false


 //-----------Остаток от деления (%)----
 console.log(152 % 3)  // ==> 2
 console.log(153 % 3)  // ==> 0
//----------

//-----Вариант 3--
 const divisibleBy3 = function(numbers, divisor) {
    const newNumbers = []
    for (let i = 0; i < numbers.length; i++) {
       if (numbers[i] % divisor === 0) {
          newNumbers.push(numbers[i])
       }
    }
    return newNumbers
 }
 console.log(divisibleBy3([54,54,87,247478,654,69584,847,0, 11,12,45.2], 3))
 // [ 54, 54, 87, 654, 0, 12 ]


 // вариант 4 
 const divisibleBy4 = (numbers, divisor) => numbers.filter(i => i % divisor === 0)

 console.log(divisibleBy4([54,54,87,247478,654,69584,847,0, 11,12,45.2], 3))
 //[ 54, 54, 87, 654, 0, 12 ]


 //------------------вариант 5 ------------
function divisibleBy5(numbers, divisor) {
   const newNumbers = []
   for (let element of numbers) {
       if ( element % divisor === 0) {
          newNumbers.push(element)
        }
   }
   return newNumbers
}
console.log(divisibleBy5([54,54,87,247478,654,69584,847,0, 11,12,45.2], 3)) 
// [ 54, 54, 87, 654, 0, 12 ]


// вариант 6
function divisibleBy6(numbers, divisor) {
   const newNumbers = []
   for (let v of Object.values(numbers)) {
      if (v % divisor === 0) {
         newNumbers.push(v)
      } 
   }
   return newNumbers
}
console.log(divisibleBy6([54,54,87,247478,654,69584,847,0, 11,12,45.2], 3)) 
// [ 54, 54, 87, 654, 0, 12 ]


// вариант 7 ---- loop  for / in 
function divisibleBy7(numbers, divisor){
   const newNumbers = []
   for (let index in numbers) {
      if (numbers[index] % divisor === 0 ){
         newNumbers.push(numbers[index])
         }
   }
   return newNumbers
}

console.log(divisibleBy7([54,54,87,247478,654,69584,847,0, 11,12,45.2], 3))
// [ 54, 54, 87, 654, 0, 12 ]



// вариант 8    - forEach
const divisibleBy8=(numbers, divisor)=>{
   const newNumbers =  []
   numbers.forEach( item => {
      if (item % divisor === 0) {
         newNumbers.push(item)
      }
   })
   return newNumbers
}
console.log(divisibleBy8([54,54,87,247478,654,69584,847,0, 11,12,45.2], 3))
// [ 54, 54, 87, 654, 0, 12 ]


// var 9
function divisibleBy9(numbers, divisor){
   let newNumbers = [],
       i = 0,
       len = numbers.length
   do
      if (Number.isInteger(numbers[i] / divisor)) {
         newNumbers.push(numbers[i])
      }
   while(++i < len)
   return newNumbers
}   
console.log(divisibleBy9([54,54,87,247478,654,69584,847,0, 11,12,45.2], 3))
//[ 54, 54, 87, 654, 0, 12 ]

// var 10
const divisibleBy0 = function(numbers, divisor) {
   let newNumbers = [],
       i = 0
       len = numbers.length
   while(i < len) {
      (numbers[i] / divisor - Math.floor(numbers[i] / divisor)) === 0 ? newNumbers.push(numbers[i]) : null
      i++
   }
   return newNumbers
}
console.log(divisibleBy0([54,54,87,247478,654,69584,847,0, 11,12,45.2], 3))
// [ 54, 54, 87, 654, 0, 12 ]