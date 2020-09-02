let a = []; // Start with an empty array
a.push("zero"); // Add a value at the end. a = ["zero"] a.push("one", "two"); // Add two more values. a = ["zero", "one", "two"]
// Pushing a value onto an array a is the same as assigning the value to a[a.length]. You can use the unshift() method (described in §7.8) to insert a value at the begin‐ ning of an array, shifting the existing array elements to higher indexes. The pop() method is the opposite of push(): it removes the last element of the array and returns it, reducing the length of an array by 1. Similarly, the shift() method removes and returns the first element of the array, reducing the length by 1 and shifting all ele‐ ments down to an index one lower than their current index. See §7.8 for more on these methods.
// You can delete array elements with the delete operator, just as you can delete object properties:
let a = [1,2,3];
delete a[2];
2 in a
a.length
// a now has no element at index 2
// => false: no array index 2 is defined
// => 3: delete does not affect array length
a.unshift(4)
console.log(a) // [ 4, 1, 2, <1 empty item> ]
a.shift()
console.log(a) // [ 1, 2, <1 empty item> ]

// Adding arrays with concat()
// The concat() method creates and returns a new array that contains the elements of the original array on which concat() was invoked, followed by each of the arguments to concat(). If any of these arguments is itself an array, then it is the array elements that are concatenated, not the array itself. Note, however, that concat() does not recursively flatten arrays of arrays. concat() does not modify the array on which it is invoked:

let a = [1,2,3];
a.concat(4, 5) // => [1,2,3,4,5]
a.concat([4,5],[6,7]) // => [1,2,3,4,5,6,7]; 
//arrays are flattened 
a.concat(4, [5,[6,7]]) // => [1,2,3,4,5,[6,7]];
// but not nested arrays a 
// => [1,2,3]; the original array is unmodified


function arrayPlusArray(arr1, arr2) {
    return [...arr1,...arr2].reduce((first, next)=> (first + next))
  }


function arrPlusArr2(arr1, arr2){
    return arr1.concat(arr2).reduce((i, j)=> i + j)
}


function arrPlusArr3(arr1,arr2){
    arr1.push(...arr2)
    return arr1.reduce((a,b)=>a+b)
}

console.log(arrPlusArr3([1,2,3],[-2,-3,4]))  //5
//----------------------
let stack = []; // stack == []
 stack.push(1,2);// stack == [1,2];
  stack.pop();  // stack == [1]; returns 2
   stack.push(3);// stack == [1,3]
    stack.pop();// stack == [1]; returns 3
     stack.push([4,5]); // stack == [1,[4,5]]
      stack.pop() // stack == [1]; returns [4,5]
       stack.pop(); // stack == []; returns 1

// The push() method does not flatten an array you pass to it, but if you want to push all of the elements from one array onto another array, you can use the spread opera‐ tor (§8.3.4) to flatten it explicitly:
   
a.push(...values);


// The unshift() and shift() methods behave much like push() and pop(), except that they insert and remove elements from the beginning of an array rather than from the end. unshift() adds an element or elements to the beginning of the array, shifts the existing array elements up to higher indexes to make room, and returns the new length of the array. shift() removes and returns the first element of the array, shift‐ ing all subsequent elements down one place to occupy the newly vacant space at the start of the array. You could use unshift() and shift() to implement a stack, but it would be less efficient than using push() and pop() because the array elements need to be shifted up or down every time an element is added or removed at the start of the array. Instead, though, you can implement a queue data structure by using push() to add elements at the end of an array and shift() to remove them from the start of the array:
letq=[]; // q == []
 q.push(1,2); // q == [1,2]
  q.shift(); // q == [2]; returns 1
   q.push(3) // q == [2, 3]
    q.shift() // q == [3]; returns 2
     q.shift() // q == []; returns 3


    //  unshift() that is worth calling out because you may find it surprising. When passing multiple arguments to unshift(), they are inserted all at once, which means that they end up in the array in a different order than they would be if you inserted them one at a time:
     leta=[];  // a == []
     a.unshift(1)  // a == [1]
     a.unshift(2)   // a == [2, 1]
     a=[]; // a == []
     a.unshift(1,2)  // a == [1, 2]
    
    
   
    //  An argument of 
    //–1, for example, specifies the last element in the array
    //–2 specifies the element before that one.
    // Note that slice() does not modify the array on which it is invoked. Here are some examples:

    //Its two argu‐ ments specify the 
    //start and end 
    //of the slice to be returned.
let a = [1,2,3,4,5];
a.slice(0,3);// Returns [1,2,3]
a.slice(3);// Returns [4,5]
a.slice(1,-1);// Returns [2,3,4]
a.slice(-3,-2); // Returns [3]

let a = [1,2,3,4,5,6,7,8];
a.splice(4) // => [5,6,7,8]; a is now [1,2,3,4]

a.splice(1,2) // => [2,3]; a is now [1,4] 
a.splice(1,1) // => [4]; a is now [1]

// The first two arguments to splice() specify which array elements are to be deleted. These arguments may be followed by any number of additional arguments that spec‐ ify elements to be inserted into the array, starting at the position specified by the first argument. For example:
let a = [1,2,3,4,5];
a.splice(2,0,"a","b") // => []; a is now [1,2,"a","b",3,4,5] 
a.splice(2,2,[1,2],3) // => ["a","b"]; a is now [1,2,[1,2],3,3,4,5]
// Note that, unlike concat(), splice() inserts arrays themselves, not the elements of those arrays.


