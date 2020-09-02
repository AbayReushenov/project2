// every() and some()
// The every() and some() methods are array predicates: they apply a predicate func‐ tion you specify to the elements of the array, then return true or false.
// The every() method is like the mathematical “for all” quantifier ∀: it returns true if and only if your predicate function returns true for all elements in the array:
let a = [1,2,3,4,5];
a.every(x => x < 10) // => true: all values are < 10. 
a.every(x => x % 2 === 0) // => false: not all values are even.


// The some() method is like the mathematical “there exists” quantifier ∃: it returns true if there exists at least one element in the array for which the predicate returns true and returns false if and only if the predicate returns false for all elements of the array:
let a = [1,2,3,4,5]; 
a.some(isNaN)       // => false; a has no non-numbers.
a.some(x => x%2===0)   // => true; a has some even numbers. 


// Note that both every() and some() stop iterating array elements as soon as they know what value to return. some() returns true the first time your predicate returns <code>true</code> and only iterates through the entire array if your predicate always returns false. every() is the opposite: it returns false the first time your predicate returns false and only iterates all elements if your predicate always returns true. Note also that, by mathematical convention, every() returns true and some returns false when invoked on an empty array.