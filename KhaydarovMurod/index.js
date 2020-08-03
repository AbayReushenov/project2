import {myFunction} from './modules/modulA'
import {Point} from './modules/modulB'

myFunction("Hello module A", 3)

let pI = new Point(2,3)
console.log(`Distanse from point(0,0) to point (2,3) is ${pI.distance()}`)

console.log("Everything okay!")