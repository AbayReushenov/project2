//-----------максимальный элемент ----var 1 ----
const maximumArray = function(arraySome){
    let target = arraySome[0]
    for( let i =1 ; i < arraySome.length; i++) {
      target < arraySome[i] ? target = arraySome[i] : null
    }
    return target
}
  
const maximumArray2=arraySome=> arraySome.reduce((x,y)=>(x>y)?x:y)
 
const maximumArray3=arraySome=> Math.max(...arraySome)

const maximumArray4=arraySome=> Math.max.apply(Math, arraySome)

const maximumArray5=arraySome=> arraySome.sort((a,b)=>b-a)[0]


console.log(maximumArray5([7, 4, 5, 6, 1, 6,4, 8, 6, 9, 7, 5, 3, 1])) // 9
  