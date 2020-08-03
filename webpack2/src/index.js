import {a1 as m1} from '../src/modules/moduleA1' 
import {a1 as m2} from '../src/modules/moduleA2' 
import {a1 as m3} from '../src/modules/moduleA3' 
import {a1 as m4} from '../src/modules/moduleA4' 
import {a1 as m5} from '../src/modules/moduleA5' 
import {a1 as m6} from '../src/modules/moduleA6' 
import {a1 as m7} from '../src/modules/moduleA7' 
import {a1 as m8} from '../src/modules/moduleA8' 
import {a1 as m9} from '../src/modules/moduleA9' 
import {a1 as m10} from '../src/modules/moduleA10' 

const m = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10]
let sumM = m.reduce(function(a, b) {
    return a + b;
}); 
console.log(`\n\nconst m = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10]\n\n
let sumM = m.reduce(function(a, b) {\n
    return a + b;\n
});\n\n `)
console.log('Sum of 10 elements :' + m +' is: '+ sumM) 
alert("hello world!")
// let a = 1,
// b = 2,
// c = 3
// d = [a, b, c]
// console.log(d) // => [ 1, 2, 3 ]

// var total = [0, 1, 2, 3].reduce(function(a, b) {
//     return a + b;
//   });   // total == 6

