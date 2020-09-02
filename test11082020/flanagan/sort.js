[11,2,22,1].sort((a, b) => a - b)

//page 12
// Sort the array by count, then alphabetically
entries.sort((a,b) => { // A function to define sort order.
    if (a[1] === b[1]) { // If the counts are the same 
        return a[0] < b[0] ? -1 : 1; // sort alphabetically.
    }else{              // If the counts differ
    return b[1] - a[1]; // sort by largest count.
    } });
    

    // To sort the elements of an array a, for example, we don’t pass a to a sort() function. Instead, we invoke the sort() method of a:
a.sort(); // The object-oriented version of sort(a).
a.sort() // a.sort is the function; there are no arguments.
sort()
// => true
// => false
// => true
// => -1; indexOf can't find NaN
// sort() sorts the elements of an array in place and returns the sorted array. When sort() is called with no arguments, it sorts the array elements in alphabetical order (temporarily converting them to strings to perform the comparison, if necessary):
let a = ["banana", "cherry", "apple"]; 
a.sort();  // a == ["apple", "banana", "cherry"]
// If an array contains undefined elements, they are sorted to the end of the array.


// To sort an array into some order other than alphabetical, you must pass a comparison function as an argument to sort(). This function decides which of its two arguments should appear first in the sorted array. If the first argument should appear before the second, the comparison function should return a number less than zero. If the first
//  7.8 Array Methods | 175
// argument should appear after the second in the sorted array, the function should return a number greater than zero. And if the two values are equivalent (i.e., if their order is irrelevant), the comparison function should return 0. So, for example, to sort array elements into numerical rather than alphabetical order, you might do this:
let a = [33, 4, 1111, 222];
a.sort(); // a == [1111, 222, 33, 4];
// alphabetical order 

a.sort(function(a,b) { // Pass a comparator function
        return a-b;    // Returns < 0, 0, or > 0, depending on order
});                    // a == [4, 33, 222, 1111]; numerical order

a.sort((a,b) => b-a);  // a == [1111, 222, 33, 4]; reverse numerical order

// As another example of sorting array items, you might perform a case-insensitive alphabetical sort on an array of strings by passing a comparison function that con‐ verts both of its arguments to lowercase (with the toLowerCase() method) before comparing them:
let a = ["ant", "Bug", "cat", "Dog"];
a.sort(); // a == ["Bug","Dog","ant","cat"];

//case-sensitive sort 
a.sort(function(s,t) {
    let a = s.toLowerCase();
    let b = t.toLowerCase();
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
}); 
// a == ["ant","Bug","cat","Dog"]; case-insensitive sort