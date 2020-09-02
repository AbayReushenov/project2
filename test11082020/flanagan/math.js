var nums = [1, 2, 3]
Math.min.apply(Math, nums)    // 1
Math.max.apply(Math, nums)    // 3
Math.min.apply(null, nums)    // 1
Math.max.apply(null, nums)    // 3
// With ES6/ES2016 destructuring assignment it becomes easier
// The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.
const nums = [1, 2, 3]
Math.min(...nums)    // 1
Math.max(...nums)    // 3

// For example, to find the largest number in an array of numbers without using the spread operator, you could use the apply() method to pass the elements of the array to the Math.max() function:


let biggest = Math.max.apply(Math, arrayOfNumbers);



Math.pow(2,53)
Math.round(.6)
Math.ceil(.6)
Math.floor(.6)
Math.abs(-5)
Math.max(x,y,z)
Math.min(x,y,z)
Math.random()
Math.PI
// => 9007199254740992: 2 to the power 53
// => 1.0: round to the nearest integer
// => 1.0: round up to an integer
// => 0.0: round down to an integer
// => 5: absolute value
// Return the largest argument
// Return the smallest argument
// Pseudo-random number x where 0 <= x < 1.0
// π: circumference of a circle / diameter
// e: The base of the natural logarithm
// => 3**0.5: the square root of 3
// => 3**(1/3): the cube root of 3
// Trigonometry: also Math.cos, Math.atan, etc.
// Natural logarithm of 10
Math.E
Math.sqrt(3)
Math.pow(3, 1/3)
Math.sin(0)
Math.log(10)
Math.log(100)/Math.LN10 // Base 10 logarithm of 100
Math.log(512)/Math.LN2 // Base 2 logarithm of 512 Math.exp(3) // Math.E cubed
ES6 defines more functions on the Math object:
Math.cbrt(27) // => 3: cube root
Math.hypot(3, 4) // => 5: square root of sum of squares of all arguments Math.log10(100) // => 2: Base-10 logarithm
Math.log2(1024) // => 10: Base-2 logarithm
// Natural log of (1+x); accurate for very small x
// Math.exp(x)-1; the inverse of Math.log1p()
// -1, 0, or 1 for arguments <, ==, or > 0
// => 6: optimized multiplication of 32-bit integers
Math.log1p(x)
Math.expm1(x)
Math.sign(x)
Math.imul(2,3)
Math.clz32(0xf) // => 28: number of leading zero bits in a 32-bit integer Math.trunc(3.9) // => 3: convert to an integer by truncating fractional part
Math.fround(x)
Math.sinh(x)
Math.asinh(x)
// Round to nearest 32-bit float number
// Hyperbolic sine. Also Math.cosh(), Math.tanh()
// Hyperbolic arcsine. Also Math.acosh(), Math.atanh()

Infinity
Number.POSITIVE_INFINITY
1/0
Number.MAX_VALUE * 2
// A positive number too big to represent
// Same value
// => Infinity
// => Infinity; overflow

-Infinity Number.NEGATIVE_INFINITY -1/0
-Number.MAX_VALUE * 2
NaN
Number.NaN
0/0 Infinity/Infinity
Number.MIN_VALUE/2 -Number.MIN_VALUE/2 -1/Infinity
-0
// A negative number too big to represent
// The same value
// => -Infinity
// => -Infinity
// The not-a-number value
// The same value, written another way
// => NaN
// => NaN
// => 0: underflow
// => -0: negative zero
// -> -0: also negative 0
// The following Number properties are defined in ES6
Number.parseInt()
Number.parseFloat()
Number.isNaN(x)
Number.isFinite(x)
Number.isInteger(x)
Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53? Number.MIN_SAFE_INTEGER // => -(2**53 - 1) Number.MAX_SAFE_INTEGER // => 2**53 - 1
// Same as the global parseInt() function
// Same as the global parseFloat() function
// Is x the NaN value?
// Is x a number and finite?
// Is x an integer?
Number.EPSILON // => 2**-52: smallest difference between numbers

let zero = 0; let negz = -0; zero === negz 1/zero === 1/negz
// Regular zero
// Negative zero
// => true: zero and negative zero are equal
// => false: Infinity and -Infinity are not equal

letx=.3-.2; lety=.2-.1; x===y x===.1 y===.1
// thirty cents minus 20 cents
// twenty cents minus 10 cents
// => false: the two values are not the same!
// => false: .3-.2 is not equal to .1
// => true: .2-.1 is equal to .1

// BigInt literals are written as a string of digits followed by a lowercase letter n. By default, the are in base 10, but you can use the 0b, 0o, and 0x prefixes for binary, octal, and hexadecimal BigInts:
1234n
0b111111n
0o7777n
0x8000000000000000n // => 2n**63n: A 64-bit integer
1 < 2n
2 > 1n
0 == 0n
0 === 0n
// => true
// => true
// => true
// => false: the === checks for type equality as well
// A not-so-big BigInt literal
// A binary BigInt
// An octal BigInt
// You can use BigInt() as a function for converting regular JavaScript numbers or strings to BigInt values:
// BigInt(Number.MAX_SAFE_INTEGER) // => 9007199254740991n let string = "1" + "0".repeat(100); // 1 followed by 100 zeros. BigInt(string) // => 10n**100n: one googol
// Arithmetic with BigInt values works like arithmetic with regular JavaScript numbers, except that division drops any remainder and rounds down (toward zero):
1000n + 2000n // => 3000n
3000n - 2000n // => 1000n
2000n * 3000n // => 6000000n
3000n / 997n // => 3n: the quotient is 3
3000n % 997n // => 9n: and the remainder is 9
(2n ** 131071n) - 1n // A Mersenne prime with 39457 decimal digits


1 < 2n
2 > 1n
0 == 0n
0 === 0n
// => true
// => true
// => true
// => false: the === checks for type equality as well


let timestamp = Date.now(); // The current time as a timestamp (a number). let now = new Date(); // The current time as a Date object.
let ms = now.getTime(); // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.

let euro = "€";
let love = "❤";
euro.length // => 1: this character has one 16-bit element love.length // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"


// "" // The empty string: it has zero characters 'testing'
// "3.14"
// 'name="myform"'
//     "Wouldn't you prefer O'Reilly's book?"
//     "τ is the ratio of a circle's circumference to its radius"
//     `"She said 'hi'", he said.`


  // A string representing 2 lines written on one line:
  'two\nlines'
  // A one-line string written on 3 lines:
  "one\
   long\
   line"
  // A two-line string written on two lines:
  `the newline character at the end of this line
  is included literally in this string`