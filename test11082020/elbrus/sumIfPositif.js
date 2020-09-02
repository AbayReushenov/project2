// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr){
    return arr.reduce((i,j)=> i + (j>0 ?j :0), 0)
    }
  

function positiveSum2(arr) {
    return arr.filter(item => item > 0).reduce((a, b)=>a+b)
}


function positiveSum3(arr){
    let sum = 0
    arr.forEach(item => (item > 0)? sum +=item : null)
    return sum
}


function positiveSum4(arr){
    let sum = 0
    for (let item of arr) {
        if (item > 0) {
            sum += item
        }
    }
    return sum
}


function positiveSum5(arr){
    let sum = 0
    for (let value of Object.values(arr)) {
        if (value > 0) {
            sum += value
        }
    }
    return sum
}


const positiveSum6 = arr => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
          sum += arr[i]
      }
  }
  return sum
}


const positiveSum7 = function(arr) {
    let [sum , i] = [ 0, 0]
    while(i < arr.length) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
        i++
    }
    return sum
}


const positiveSum9 = function(arr) {
    let [sum, i] = [0, 0]
    do
        if (arr[i] > 0) {
            sum += arr[i]
        }
    while(++i < arr.length)
    return sum
}


function positiveSum0(arr){
    let sum = 0
    for(let index in arr) {
        if (arr[index] > 0) {
            sum += arr[index]
        }
    }
    return sum
}

console.log(positiveSum0([9,-400, 200,8,20, -689148]))  //237