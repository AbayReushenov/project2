// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

const { null } = require("mathjs")

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. 
//Return a new array (a tuple in Python) with 
//[youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
    let list = [ages[0],ages[0],0]
    ages.map(each => each < list[0] ? list[0] = each: (each > list[1] ? list[1] = each:null)) 
    list[2] = list[1] - list[0]
    return list
  }
  
  const dif2 = function(ages){
      ages.sort((a,b)=>b-a) // max-> min
      const len = ages.length,
            dif = ages[0] - ages[len - 1],
            target = [ages[len - 1],ages[0], dif]
    return target
  }

  const dif3 = function(ages){
    ages.sort((a,b)=>a-b) // min -> max
    const i = ages.length,
          d = ages[i - 1] - ages[0] ,
          t = [ages[0],ages[i - 1], d]
  return t
}


const dif4=ages=>{
    const t = [];
    t.push(ages.reduce((a,b)=>a<b?a:b))
    t.push(ages.reduce((a,b)=>a>b?a:b))
    t.push(t[1]-t[0])
    return t
}

const dif5 = ages => {
    const t = [];
    t.push(Math.min(...ages))
    t.push(Math.max(...ages))
    t.push(t[1]-t[0])
    return t
}

const dif6 = (ages) => {
    const t = []
    t[0] = Math.min.apply(Math, ages)
    t[1] = Math.max.apply(Math, ages)
    t[2] = t[1] - t[0]
    return t
}


function dif7(ages){
    let t = [ages[0],ages[0],0]
    ages.forEach(i=> {
        if (i < t[0]) {
            t[0] = i
        } else {
            if (i > t[1]) {
                t[1] = i
            }
        }
    })
    t[2] = t[1] - t[0]
    return t
}


function dif8(ages) {
const t = [ages[0], ages[0], 0]
let i = 0;
while(i < ages.length) {
    if (ages[i] < t[0]) {
        t[0] = ages[i] 
        } else {
            if (ages[i] > t[1]) {
                t[1] = ages[i]
                }
            }
i++
}
t[2] = t[1]-t[0]
return t 
}


function dif9(ages) {
const t = [ages[0], ages[0], 0]
let i = 0;
do
    if (ages[i] < t[0]) {
        t[0] = ages[i] 
        } else {
            if (ages[i] > t[1]) {
                t[1] = ages[i]
                }
            }
while(++i < ages.length)
t[2] = t[1]-t[0]
return t 
}


function dif0(ages) {
    const t = [ages[0], ages[0], 0]
    
    for(let i = 0; i < ages.length; i++) {
         ages[i] < t[0] ? t[0] = ages[i] : (ages[i] > t[1]) ? t[1] = ages[i] : null
    }   

    t[2] = t[1]-t[0]
    return t 
}


console.log(dif0([6,52,20,87,10,56,89])) // [ 6, 89, 83 ]


