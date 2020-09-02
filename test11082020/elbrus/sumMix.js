// Sum Mixed Array https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
const x = ['12',564,65847,5,"0.25",'52',10,0,`4`, 0.56, -4456, "02.63", '.02','25.03', 2.0, 0]

// => 62068.48999999999

function sumMix(x) {
    return x.map(y=>Number(y)).reduce((a,b)=>(a+b))
  }


function sumMix2(x){
  let sum = 0,
      i = 0
  do
    sum += Number(x[i])
  while(++i<x.length)
  return sum
}


function sumMix3(x) {
  let i, sum = 0;
  for(i = 0; x.length > i; sum += Number(x[i]), i++);
  return sum
  }


function sumMix4(x) {
  let sum = 0
  for(element of x) sum += Number(element) 
  return sum
}


function sumMix5(x){
  let sum = 0
  for(let v of Object.values(x)) sum += Number(v)
  return sum
}


function sumMix6(x){
  let sum = 0
  for(let index in x) sum += Number(x[index])
  return sum
}


const sumMix7 = function(x){
  let sum = 0
  x.forEach(item => sum += Number(item))
  return sum
}


const sumMix8 = x => {
  let sum = 0, i = 0;
  while(i < x.length) {
    sum += Number(x[i])
    i++ 
  }
  return sum
}


const sumMix9 = x => x.reduce((f,s)=> (f + Number(s)),0)


const sumMix0 = x => {
  let sum = 0
  x.map(element => sum += Number(element))
  return sum
}

console.log(sumMix0(x)) // => 24


