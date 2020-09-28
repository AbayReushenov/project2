let arr = [];
fillArrX(arr,10);
// alert(arr)
console.log(arr)

function fillArrX(arrX,n) {
    let i = 1
    while(i<=n){
        arrX.push('x'.repeat(i))
        i++;
    }
}



// id задания: 51 Не сдано
// Задание: Заполните массив с помощью цикла следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.

const element = prompt('Введите максимальный элемент массива');

function arrayFill(max){
    let arr = [],
        i = 1;
    for(; i <= max; i++){
        arr.push(`${i}`.repeat(i));
    }
    return arr;
}
console.log(" Массив = [" + arrayFill(element) +"].");