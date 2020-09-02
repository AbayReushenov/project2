// While a for/of loop requires an iterable object after the of, a 

//for/in loop works with any object after the in.

//The for/of loop is new in ES6, 
//but for/in has been part of JavaScript since the very beginning (which is why it has the more natural sounding syntax).
// The for/in statement loops through the property names of a specified object. The syntax looks like this:


// for (variable in object)
//       statement

let o = [7, 4, 5, 6, 1, 6,4, 8, 6, 9, 7, 5, 3, 1]
for(let p in o) { 
    // Assign property names of o to variable p 
    // Присвоение имен свойств o переменной p
    console.log(o[p]); 
    // Print the value of each property
}
// 7
// 4
// 5
// 6
// 1
// 6
// 4
// 8
// 6
// 9
// 7
// 5
// 3
// 1


