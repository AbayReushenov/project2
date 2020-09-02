// you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!


function betterThanAverage1(classPoints, yourPoints) {
    return classPoints.reduce((a,b)=> (a+b), yourPoints) / (classPoints.length + 1) < yourPoints ?
      true : false
}


function betterThanAverage2(classPoints, yourPoints) {
  const allClassPoints = [...classPoints,yourPoints],
        sumClassPoints = allClassPoints.reduce((a,b)=>a+b),
        classSize = allClassPoints.length,
        averageScore = sumClassPoints / classSize
 //       console.log(averageScore)
  if (yourPoints > averageScore) {
    return true 
    }  else {
      return false
      }
}


function betterThanAverage3(classPoints, yourPoints) {
  const classSize = classPoints.length + 1,
        sumClassPoints = classPoints.reduce((a,b)=>a+b) + yourPoints,
        averageScore = sumClassPoints / classSize,
        youWinner = yourPoints > averageScore ? true : false
// console.log(averageScore)
  return youWinner   
}


function betterThanAverage4(classPoints, yourPoints) {
  classPoints.push(yourPoints)

  let sum = 0, i

  const classSize = classPoints.length,
        averageScore =()=> sum / classSize,
        youWinner =()=> (yourPoints > averageScore()) ? true : false
 
  for (i = 0; i < classSize; i++) {
    sum += classPoints[i]
  }
  return youWinner()
}


function betterThanAverage5(clas, you) {
  clas.push(you)

  let sum = 0

  const size = clas.length,
        aver =()=> sum / size,
        youWinner =()=> (you > aver()) ? true : false
 
  for (i in clas) {
    sum += clas[i]
  }

  return youWinner()
}



function b6(classPoints, yourPoints) {
  classPoints.push(yourPoints)

  let sum = 0

  const classSize = classPoints.length,
        averageScore =()=> sum / classSize,
        youWinner =()=> (yourPoints > averageScore()) ? true : false
 
  for (i of classPoints) {
    sum += i
  }

 //console.log(averageScore())
  return youWinner()
}


function b7(cla, yo) {
  cla.push(yo)

  let sum = 0

  const classSize = cla.length,
        averageScore =()=> sum / classSize,
        youWinner =()=> (yo > averageScore()) ? true : false
        
  for (v of Object.values(cla)) {
    sum += v
  }
  return youWinner()
}




function b8(cla, you) {
  cla.push(you)

  let sum = 0, i = 0

  const classSize = cla.length,
        averageScore =()=> sum / classSize,
        youWinner =()=> (you > averageScore()) ? true : false
 
  while (i < classSize) {
    sum += cla[i]
    i++
  }

  return youWinner()
}


function b9(cla, yo) {
  cla.unshift(yo)

  let sum = 0, i = 0

  const classSize = cla.length,
        averageScore =()=> sum / classSize,
        youWinner =()=> (yo > averageScore()) ? true : false
 
  do
    sum += cla[i]
  while (++i < classSize)

  return youWinner()
}


const b0 = function(classPoints, yourPoints) {
  classPoints.unshift(yourPoints)

  let sum = 0

  const ze = classPoints.length,
        av =()=> sum / ze,
        youWinner = ()=> (yourPoints > av()) ? true : false
 
  classPoints.forEach(item => sum += item)

  return youWinner()
}




const b11 = function(cla, yo) {
  cla.unshift(yo)
  const size = cla.length

  let sum = 0, i;

  for(i = 0; size > i; sum += cla[i], i++);

  const mid = sum / size

  if (mid >= yo) {
      return false
    } else {
      return true
    } 
}


//console.log(better4([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(b11([100, 40, 34, 57, 29, 72, 57, 88], 75))