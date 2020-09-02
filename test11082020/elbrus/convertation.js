console.log(Number('6547'))
// can convert strings to numbers.
// 6547
Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN
Number(false)     // returns 0
Number(true)      // returns 1

console.log(typeof(String(6547)))
let mas = [],
    str1 = String(6547)

str1 = [...str1]
str1.map(e => mas.push(+e))
console.log(mas)
// string
// [ 6, 5, 4, 7 ]

str1 = [...str1]
mas = str1.map(e => +e)
console.log(mas)
// string
// [ 6, 5, 4, 7 ]



function differenceInAges(ages){
    let list = [ages[0],ages[0],0]
    ages.map(each => each < list[0] ? list[0] = each: (each > list[1] ? list[1] = each:null)) 
    list[2] = list[1] - list[0]
    return list
  }
console.log(differenceInAges([6,52,20,87,10,56,89])) // [ 6, 89, 83 ]