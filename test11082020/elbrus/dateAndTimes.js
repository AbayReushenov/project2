
let timestamp = Date.now(); // The current time as a timestamp (a number). 
let now = new Date(); // The current time as a Date object.
let ms = now.getTime(); // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.
console.log(iso)// 2020-09-12T08:02:03.743Z

[1,2,3].toString() // => "1,2,3"
(function(x) { f(x); }).toString()//=>"function(x) { f(x); }" 
/\d+/g.toString() // => "/\\d+/g"

let d = new Date(2020,0,1);
d.toString() // => "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)"

let d = new Date(2010, 0, 1); // January 1, 2010, (Pacific time) d.valueOf() // => 1262332800000

