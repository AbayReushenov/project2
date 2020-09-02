// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    return numbers.reduce(((i,j) => i + j*j),0)
  }

function squareSum2(numbers){
    return numbers.reduce((acc,val) => acc + Math.pow(val, 2), 0)
}


function squareSum3(numbers){
    let sum = 0
    numbers.forEach(item => sum += Math.pow(item, 2))
    return sum
}


function squareSum4(numbers) {
    return  numbers.map(i => Math.pow(i, 2)).reduce((a,b)=>a+b)
}


function squareSum5(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]
    }
    return sum
}


const squareSum6 = numbers => {
    let [sum, i] = [0 , 0]
    while(i < numbers.length) {
        sum += Math.pow(numbers[i], 2)
        i++
    }
    return sum
}


const squareSum7 = function(numbers){
    let sum = 0
    for (let item of numbers) sum += Math.pow(item, 2)
    return sum
}


const squareSum8 = function(numbers){
    let sum = 0
    for (let index in numbers) {
        sum += Math.pow(numbers[index], 2)
    }
    return sum
}


const squareSum9 = function(numbers){
    sum = 0
    for (let value of Object.values(numbers)) {
        sum += Math.pow(value, 2)
    }
    return sum
}


const squareSum0 = function(numbers) {
    let sum = 0, i = 0
    do 
        sum += Math.pow(numbers[i], 2)
    while (++i < numbers.length)
    return sum
}



console.log(squareSum6([4,3,5,10,1])) // 151


