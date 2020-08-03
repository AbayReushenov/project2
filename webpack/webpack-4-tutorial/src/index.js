import {newButton} from './modules/button'
import {newtest} from './modules/test'

newButton('1404')

for (let i =1; i<=5; i++) {
    if ( i % 2 == 0 ) {
        newtest(true) 
    } else {
        newtest(false)
    }
}

console.log("Hello World from your main file!")
