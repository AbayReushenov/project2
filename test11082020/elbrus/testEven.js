//https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats are considered UNeven for this kata.

function testEven(n) {
    return ( n/2 - Math.floor(n/2)) === 0 ? true : false
  }
  
  console.log( testEven(0.2))
  console.log( testEven(21))
  console.log(testEven(8))
  console.log(testEven(-12))
//   false
// false
// true
// true