// Definition and Usage
// The isNaN() function determines whether a value is an illegal number (Not-a-Number).

// This function returns true if the value equates to NaN. Otherwise it returns false.

// This function is different from the Number specific Number.isNaN() method.

// The global isNaN() function, converts the tested value to a Number, then tests it.

// Number.isNaN() does not convert the values to a Number, and will not return true for any value that is not of the type Number.


isNaN(123) //false
isNaN(-1.23) //false
isNaN(5-2) //false
isNaN(0) //false
isNaN('123') //false
isNaN('Hello') //true
isNaN('2005/12/12') //true
isNaN('') //false
isNaN(true) //false
isNaN(undefined) //true
isNaN('NaN') //true
isNaN(NaN) //true
isNaN(0 / 0) //true
isNaN(null) //false