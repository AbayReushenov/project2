// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// 348597 => [7,9,5,8,4,3]
var fruits = ["Banana", "Orange", "Apple", "Mango"];
const x = fruits.reverse();
console.log(x)
// [ 'Mango', 'Apple', 'Orange', 'Banana' ]

var numbers= [1012, 740, 77, 0];
const x = numbers.reverse();
console.log(x) // [ 0, 77, 740, 1012 ]
//-----
const x = String(13579684616547)
const y = [...x]
console.log(y)
//['1', '3', '5', '7', '9', '6', '8', '4', '6', '1', '6', '5', '4', '7']
const z = y.map(element => Number(element))
console.log(z)
//[1, 3, 5, 7, 9, 6, 8, 4, 6, 1, 6, 5, 4, 7]
const e = [...z].reverse()
console.log(e)
// [7, 4, 5, 6, 1, 6,4, 8, 6, 9, 7, 5, 3, 1]

//----sum of non numeric elements
console.log(['1', 8, '4', 6, '1', '6', '5', 4, '7'].map(i=> Number(i)).reduce((a,b)=> (a+b)))
//=> 42


//------digitize  ---------
// const n = 354561635416514
// console.log(digitize(n))
//[ 4, 1, 5, 6, 1, 4, 5, 3, 6, 1, 6, 5, 4, 5, 3]


function digitize(n) {
  return [...String(n)].map(i=>Number(i)).reverse()
}

function digitize2(n){
    let str = String(n) 
    str = [...str]
    str.reverse()
    return str.map(element => Number(element))
}


function digitize3(n){
    const str = String(n), 
    arr = [...str]
    arr.reverse()
    return arr.map(element => Number(element))
}


function digitize4(n){
    const str = String(n),
          arr = []
    for(let i = str.length - 1; i >= 0; i--) {
        arr.push(Number(str[i]))
    }
    return arr
}


function digitize5(n){
    const str = String(n),
            arr = []
    for (let char of str) {
        arr.unshift(Number(char))
    }
    return arr
}


const digitize6 = n => {
    const str = String(n),
          len = str.length,
          arr = []
    let i = 0
    do
        arr.unshift(+str[i])
    while(++i<len)
    return arr
}


const digitize7 = function(n){
    const str = String(n),
          arr = []
    for (let i in str) arr.unshift(+str[i])
    return arr
}


const digitize8 = n => [...String(n)].reverse().map(e=>+e)


const digitaze9 = function(n){
    const str = String(n),
          arr = []
    for (v of Object.values(str)) {
        arr.push(Number(v))
    }
    return arr.reverse()
}


function digi(n){
    const str = String(n),
          arr = []
    let i = 0
    while (i<str.length) {
        arr.push(Number(str[i]))
        i++
    }          
    return arr.reverse()
}

const n = 354561635416514
//[ 4, 1, 5, 6, 1, 4, 5, 3, 6, 1, 6, 5, 4, 5, 3]
