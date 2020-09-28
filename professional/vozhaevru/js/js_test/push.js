let arr = ['a', 'b', 'c'];

fillArrX(arr,3);
// alert(arr)
console.log(arr)

function fillArrX(arrX,n) {
    let i = 1
    while(i<=n){
        arrX.push(i)
        i++;
    }
}