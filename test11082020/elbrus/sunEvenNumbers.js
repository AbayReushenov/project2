//https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

function sumEvenNumbers(input) {
    return input.reduce((first, next) => 
      (first + ((next/2 - Math.floor(next/2)) === 0 ?  next : 0)), 0)
  }

const sumE2 =(input)=>input.filter(i=> Number.isInteger(i/2)).reduce((a,b)=>a+b) 

const sumE3 =(input)=>input.filter(i=>(i % 2 === 0)).reduce((a,b)=>a+b)

const sumE4 =(input)=> input.map(i=> Number.isInteger(i/2)? i : null).reduce((a,b)=>a+b)

const sumE5 =input=>{
    let sum = 0
    input.forEach(i=> {
        if (i % 2 === 0) {
            sum += i
        }
    })
    return sum
}


const sumE6 =input=>{
    let sum = 0, i;
    for(i=0; i<input.length; i++) {
        if( Number.isInteger( input[i] / 2)) {
            sum += input[i]
        }
    }
    return sum
}


const sumE6 =input=>{
    let sum = 0
    for(v of input) {
        if( Number.isInteger( v / 2)) {
            sum += v
        }
    }
    return sum
}


const sumE7 =input=>{
    let sum = 0
    for(v of Object.values(input)) {
        if( Number.isInteger( v / 2)) {
            sum += v
        }
    }
    return sum
}


const sumE8 =input=>{
    let sum = 0
    for(ind in input) {
        if( Number.isInteger( input[ind] / 2)) {
            sum += input[ind]
        }
    }
    return sum
}


const sumE9 =input=>{
    let sum = 0, i = 0;
    while( i < input.length) {
        if( Number.isInteger( input[i] / 2)) {
            sum += input[i]
        }
        i++
    }
    return sum
}



const sumE0 =input=>{
    let sum = 0, i = 0;
    do{
        if( Number.isInteger( input[i] / 2)) {
            sum += input[i]
        }
        }
        while(++i < input.length)
    return sum
}

console.log(sumE0([1,2,3,4,5,6,7.0,8,9.0,0,12]))