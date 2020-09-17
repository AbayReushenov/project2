function getMinMax(arr){
    let [min, max] = [arr[0],arr[0]]
    arr.map(element => {
       return element > max ? max = element: (element < min ? min = element : null)
    })
    return [ min, max]
  }
  
  console.log([154, 987, 201,4,-2052,4,-44])

  //-**-**-*--**
  let numbers = [5, 2, 10, -1, 9, 100, 1];
  Math.min(...numbers) // => -1