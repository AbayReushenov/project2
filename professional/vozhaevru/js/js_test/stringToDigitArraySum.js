
// id задания: 73 Не сдано
// Задание: Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

const vvod = +prompt("Введите, пожалуйста, любое число");
alert(`Сумма цифр введенного числа равна=${getDigitsSum(vvod)}`);

function getDigitsSum(digit){
    const strDigit = String(digit),
          arrString = [...strDigit],
          arrDigit = toNumber(arrString),
          sum = arrDigit.reduce((a,b)=> (a+b),0);
    console.log(arrDigit )
    return sum;

    function toNumber(arr){
        return arr.map(item=> isNaN(Number(item)) ? null : Number(item));
    } 
}