function arrayPlusArray(arr1, arr2) {
    console.log([...arr1,...arr2])
    console.log(arr1)
    console.log(arr2)
    return [...arr1,...arr2].reduce((first, next)=> (first + next))
  }

console.log(arrayPlusArray([1,2,3],[-2,-3,4]))  //5
// [ 1, 2, 3, -2, -3, 4 ]
// [ 1, 2, 3 ]
// [ -2, -3, 4 ]
// 5

function arrPlusArr2(arr1, arr2){
    const sum = arr1.concat(arr2).reduce((i, j)=> i + j)
    console.log(arr1.concat(arr2))
    console.log(arr1)
    console.log(arr2)
    return sum
}
console.log(arrPlusArr2([1,2,3],[-2,-3,4]))  //5
// [ 1, 2, 3, -2, -3, 4 ]
// [ 1, 2, 3 ]
// [ -2, -3, 4 ]
// 5


function arrPlusArr3(arr1,arr2){
    arr1.push(...arr2)
    const sum = arr1.reduce((a,b)=>a+b)
    console.log(arr1)
    console.log(arr2)
    return sum
}
console.log(arrPlusArr3([1,2,3],[-2,-3,4]))  //5
// 6
// [ 1, 2, 3, -2, -3, 4 ]
// [ -2, -3, 4 ]
// 5

function arrPlusArr4(arr1,arr2){
    arr1.unshift(...arr2)
    const sum = arr1.reduce((a,b)=>a+b)
    console.log(arr1)
    console.log(arr2)
    return sum
}
console.log(arrPlusArr4([1,2,3],[-2,-3,4]))  //5
// [ -2, -3, 4, 1, 2, 3 ]
// [ -2, -3, 4 ]
// 5


function arrPlusArr5(arr1, arr2){
    arr1.splice( 0, 0, ...arr2)
    const sum = arr1.reduce((a,b)=>a+b)
    console.log(arr1)
    console.log(arr2)
    return sum
}
console.log(arrPlusArr5([1,2,3],[-2,-3,4]))  //5
// [ -2, -3, 4, 1, 2, 3 ]
// [ -2, -3, 4 ]
// 5


function arrPlusArr6(arr1, arr2){
    arr1.splice( 0, 0, ...arr2)
    let sum = 0
    for(element of arr1) {
        sum += element
    }
    return sum
}
console.log(arrPlusArr6([1,2,3],[-2,-3,4]))  //5


function arrPlusArr7(arr1, arr2){
    arr2.unshift(...arr1)
    let sum = 0, i;
    for(i = 0; i < arr2.length; sum += arr2[i], i++);
    return sum
}
console.log(arrPlusArr7([1,2,3],[-2,-3,4]))  //5


function arrPlusArr8(arr1,arr2){
    arr1.push(...arr2)
    let sum = 0,
          i = 0;
    while(i < arr1.length) {
        sum += arr1[i]
        i++
    }
    return sum
}
console.log(arrPlusArr8([1,2,3],[-2,-3,4]))  //5

function arrPlusArr9(arr1, arr2){
    const arr3 = arr1.concat(arr2)
    let sum = 0,
        i = 0;
    do 
        sum += arr3[i]
        while(++i < arr3.length)
    return sum
}
console.log(arrPlusArr9([1,2,3],[-2,-3,4]))  //5


function arrayPlusArray0(arr1, arr2) {
    const arr3 = [...arr1,...arr2]
    let sum = 0
    for (index in arr3) {
        sum += arr3[index]
    }
    return sum
  }

console.log(arrayPlusArray0([1,2,3],[-2,-3,4]))  //5

function arrayPlusArray11(arr1, arr2) {
    let sum = 0
    for (v of Object.values(arr1)) {
        sum += v
    }
    for (v of Object.values(arr2)) {
        sum += v
    }
    return sum
  }

console.log(arrayPlusArray11([1,2,3],[-2,-3,4]))  //5