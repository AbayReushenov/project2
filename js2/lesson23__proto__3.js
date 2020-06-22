"use strict";

/* let obj = {};

let key = prompt("What's the key?", "__proto__");
alert(obj[key]);
obj[key] = "some value";

alert(obj[key]); // [object Object], not "some value"! */

let obj = Object.create(null); 

console.log(obj); // Error (no toString)
/* …But that’s usually fine for associative arrays.

Note that most object-related methods are Object.something(...), like Object.keys(obj) – they are not in the prototype, so they will keep working on such objects:
 */
let chineseDictionary = Object.create(null);
chineseDictionary.hello = "你好";
chineseDictionary.bye = "再见";

console.log(Object.keys(chineseDictionary)); // hello,bye

         /* [Object: null prototype] {}
            [ 'hello', 'bye' ] */


/* Summary
Modern methods to set up and directly access the prototype are:

Object.create(proto[, descriptors]) – creates an empty object with a given proto as [[Prototype]] (can be null) and optional property descriptors.
Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj (same as __proto__ getter).
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto (same as __proto__ setter). */

