"use strict";
/* Создание прототипа 

obj.__proto__ = ...,

object.create() 

//-----

Object.prototype.__proto__, 

Object.getPrototypeOf().
 
 */
/* The __proto__ is considered outdated and somewhat deprecated (in browser-only part of the JavaScript standard).

The modern methods are:

Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto. */

let animal = {
    eats: true
  };
  
  // create a new object with animal as a prototype
  let rabbit = Object.create(animal);
  
  console.log(rabbit.eats); // true
  
  console.log(Object.getPrototypeOf(rabbit) === animal); // true
  
  Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
  console.log(rabbit.eats); // ?
  
  console.log(Object.getPrototypeOf(rabbit) === animal); // ? 
    /* true
       true
       undefined
       false  */
//------------------------
/* Object.create has an optional second argument: property descriptors. We can provide additional properties to the new object there, like this:
 */
//--
let animal = {
  eats: true
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});

console.log(rabbit.jumps); // true
console.log(rabbit.eats); 
             /* true
                true */
//------------------------------------
/* The descriptors are in the same format as described in the chapter Property flags and descriptors.

We can use Object.create to perform an object cloning more powerful than copying properties in for..in:
 */
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

/* This call makes a truly exact copy of obj, including all properties: enumerable and non-enumerable, data properties and setters/getters – everything, and with the right [[Prototype]]. */