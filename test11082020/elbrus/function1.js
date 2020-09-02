function greet() {
    return 'hello world!'
  }
  console.log(greet())
//--
  const greet = () => 'hello world!'
  console.log(greet()) 
//--
  function opposite(number) {
    
    return( 0 - number)
  }
  console.log(opposite(-56))
  console.log(opposite(16984))
  //--
  var summation = function(num) {
    let result = 0
    for (let i = 1; i<= num; i++ ) {
      result = result + i
      }
    return result
  }
  
  console.log(summation(654))
  //---------


function testEven(n) {
    return ( n/2 - Math.floor(n/2)) === 0 ? true : false
  }
  
  console.log( testEven(0.2))
  console.log( testEven(21))
  console.log(testEven(8))
  console.log(testEven(-12))
  
  //---

  function arrayPlusArray(arr1, arr2) {
    return [...arr1,...arr2]
  }
  
  console.log(arrayPlusArray([1,2,3],[-2,-3,4]))
  
  //-----
  function arrayPlusArray(arr1, arr2) {
    return [...arr1,...arr2].reduce((first, next)=> (first + next))
  }
  
  console.log(arrayPlusArray([1,2,3],[-2,-3,4]))
  //------
  function getMinMax(arr){
    let [min, max] = [arr[0],arr[0]]
    arr.map(element => {
       return element > max ? max = element: (element < min ? min = element : null)
    })

    return [min,max]
  }
  
  console.log(getMinMax([1,2,4,-2,420,-44]))
 //------------

 function differenceInAges(ages){
    let [min,max] = [ages[0],ages[0]]
    ages.map(element => {
        return element > max ? max = element:
        (element < min ? min = element : null)}) 

  
    return [min, max, max - min]
  }
  
  console.log(differenceInAges([6,52,20,87,10,56,89]))

  function differenceInAges(ages){
    let list = [ages[0],ages[0],0]
    ages.map(each => each < list[0] ? list[0] = each: (each > list[1] ? list[1] = each:null)) 
    list[2] = list[1] - list[0]
    return list
  }
  
  console.log(differenceInAges([6,52,20,87,10,56,89]))

  //----

  function sumEvenNumbers(input) {
    let a = 0
    input.map(b => (b/2 - Math.floor(b/2)) === 0 ? a = a + b : null)
      return a
  }
  
  console.log(sumEvenNumbers([1,2,3,4,5,6,7,8,9,0,12]))
//-----
  function sumEvenNumbers(input) {
    return input.reduce((first, next) => (first + ((next/2 - Math.floor(next/2)) === 0 ? next : 0)),0)
  }
  
  console.log(sumEvenNumbers([1,2,3,4,5,6,7,8,9,0,12]))
  //--

  function f(c1,y) {
      return ((c1.reduce((i,j) => (i+j),y)) /( c1.length + 1) < y) ? true : false 
  }

 console.log( f([20,20,60,4.5], 20))
 //--
 function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((a,b)=> (a+b), yourPoints) / (classPoints.length + 1) < yourPoints ?
      true : false
    }
    console.log(betterThanAverage([20,20,60,4.5], 30))
//----

function positiveSum(arr){
    return arr.reduce((i,j) => i + (j>0 ?j: 0 ),0)
    }

console.log(positiveSum([1,2,3,4,5,-6,-7,-8,-9,10,-12]))
//--
function squareSum(numbers){
    return numbers.reduce(((i,j) => i + j*j),0)
  }
console.log(squareSum([1,2,3,4,5,-6,-7,-8,-9,10,-12]))
//=> 529
//--------
function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
      }
      return longest
  }
  //------

  console.log([1,2,3,4,5,-6,-7,-8,-9,10,-12].sort())
// [
//   -12, -6, -7, -8, -9,
//   1, 10,  2,  3,  4,
//   5
// ]
//----
var fruits = ["Banana", "Orange", "Apple", "Mango"];
const x = fruits.reverse();
console.log(x)
// [ 'Mango', 'Apple', 'Orange', 'Banana' ]

var numbers= [1012, 740, 77, 0];
const x = numbers.reverse();
console.log(x)
//-----
const x = String(13579684616547)
const y = [...x]
const z = y.map(element => Number(element))
const e = [...z].reverse()
console.log(y)
//['1', '3', '5', '7', '9', '6', '8', '4', '6', '1', '6', '5', '4', '7']
console.log(z)
//[1, 3, 5, 7, 9, 6, 8, 4, 6, 1, 6, 5, 4, 7]
console.log(e)
// [7, 4, 5, 6, 1, 6,4, 8, 6, 9, 7, 5, 3, 1]
//------
function digitize(n) {
  return [...String(n)].map(i=>Number(i)).reverse()
}
console.log(digitize(354561635416514))
//[ 4, 1, 5, 6, 1, 4, 5, 3, 6, 1, 6, 5, 4, 5, 3]
//--------------------------------------------------------

console.log(['1', 8, '4', 6, '1', '6', '5', 4, '7'].map(i=> Number(i)).reduce((a,b)=> (a+b)))
//=> 42
//----------------------------------
function sumMix(x) {
  return x.map(y=>Number(y)).reduce((a,b)=>(a+b))
}
//----------------------
function divisibleBy(numbers, divisor) {
  let newArray = []
  numbers.map(i=> {
    if (i/divisor - Math.floor(i/divisor) === 0) {
      newArray.push(i) }
    })
  return newArray
}
const x =[ 4, 1, 5, 6, 1, 4, 5, 3, 6, 1, 6, 5, 4, 5, 3]

console.log(divisibleBy( x, 3))
//[ 6, 3, 6, 6, 3 ]

// последовательность 30 => 0 через 5
function f() {
  cicl = []
  for (let i = 30; i >=0; i = i - 5){
  cicl.push(i)
  }
  return cicl
}
console.log(f())
// [  30, 25, 20, 15,  10,  5,  0]
//-----------максимальный элемент ----var 1 ----
const maximumArray = function(arraySome){
  let target = arraySome[0]
  for( let i =1 ; i < arraySome.length; i++) {
    target < arraySome[i] ? target = arraySome[i] : null
  }
  return target
}

console.log(maximumArray([7, 4, 5, 6, 1, 6,4, 8, 6, 9, 7, 5, 3, 1]))
// => 9
//-----------максимальный элемент ----var 2 ----
const maximumArray2=arraySome=> arraySome.reduce((x,y)=>(x>y)?x:y)

console.log(maximumArray2([7, 4, 5, 6, 1, 6,4, 8, 6, 9, 7, 5, 3, 1]))
