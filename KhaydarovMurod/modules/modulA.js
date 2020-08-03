'use strict'
const f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

const myFunction3 = (npm_init, n) => {
    n++
    console.log("npm_init")
    console.log(`Factorial of ${n} is ${f(n)}`)
    myFunction4(npm_init, n)
}

const myFunction2 = function innerName(whatAboutWebpack, k){
    k++
    console.log("whatAboutWebpack")
    console.log(`Factorial of ${k} is ${f(k)}`)
    myFunction3(whatAboutWebpack, k)
}

const myFunction = function(studyJavascript, b) {
    b++
    console.log("studyJavascript")
    console.log(`Factorial of ${b} is ${f(b)}`)
    myFunction2(studyJavascript, b)
}

// const i ="Module A"
// const j = 1

// myFunction(i , j)

// functions declaration
// Function expressions can include names, which is useful for recursion.

function myFunction4(packageDotJson, m) {
    m++
    console.log("packageDotJson")
    console.log(`Factorial of ${m} is ${f(m)}`)
    console.log(packageDotJson)
 }

 export {myFunction}

