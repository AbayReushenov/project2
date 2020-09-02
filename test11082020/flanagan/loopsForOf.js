// ---- for/of ---
let data = [1,2,3,4,5,6,7,8,9],
    sum=0;
for(let element of data) {
    sum += element;
}
console.log(sum) // => 45


// for/of with objects
// Objects are not (by default) iterable. 
// Attempting to use for/of on a regular object throws a TypeError at runtime:
let o = {x:1,y:2,z:3};
for(let element of o) { // Throws TypeError because o is not iterable
        console.log(element);
    }
//  ERROR !!!

// use for/of with the Object.keys() method:
let o={x:1,y:2,z:3}; 
let keys = "";
for(let k of Object.keys(o)) {
    keys += k; }
console.log(keys) // => "xyz"



let o = {x:1,y:2,z:3}; 
let sum = 0;
for (let v of Object.values(o)) {
  sum += v; }
console.log(sum) // => 6


let o = {x:1,y:2,z:3}; 
let pairs = "";
for (let [k, v] of Object.entries(o)) {
    pairs+=k+v; }
console.log(pairs) // => "x1y2z3"



// for/of with strings
// Strings are iterable character-by-character in ES6:
let frequency = {};
for(let letter of "mississippi") {
    if (frequency[letter]) {
             frequency[letter]++;
        } else {
             frequency[letter] = 1;
            }
}
console.log(frequency) // => {m: 1, i: 4, s: 4, p: 2}



// for/of with Set and Map
// The built-in ES6 Set and Map classes are iterable. When you iterate a Set with for/of, the loop body runs once for each element of the set. 
// You could use code like this to print the unique words in a string of text:
let text = "Na na na na na na na na Batman!"; 
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) {
        unique.push(word);
    }
console.log(unique) // => ["Na", "na", "Batman!"]
console.log(wordSet) // Set { 'Na', 'na', 'Batman!' }



// Maps are an interesting case because the iterator for a Map object does not iterate the Map keys, or the Map values, but key/value pairs. Each time through the iteration, the iterator returns an array whose first element is a key and whose second element is the corresponding value. Given a Map m, you could iterate and destructure its key/value pairs like this:
let m = new Map([[1, "one"]]); 
for(let [key, value] of m) {
   console.log(key) // => 1
    console.log(value) // => "one" 
}

// Read chunks from an asynchronously iterable stream and print them out
async function printStream(stream) { 
    for await (let chunk of stream) {
        console.log(chunk);
        }
}


