// id задания: 38 Не сдано
// Задание: Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

const base = [99, -2, 3, -4, 0, -102];
recurcia(base, 0);

function recurcia(arr, i) {    
    if (i == (arr.length - 1)) {
        return alert(arr[i]);
    } else {
        alert(arr[i]); 
        return  recurcia(arr, i + 1);
    }    
}

// id задания: 54 Не сдано
// Задание: Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
const base = +prompt('Введите любое число')

recurcia(base, 9);

function recurcia(num , i) {   
    let arrString = [...String(num)],
        arrDigit = arrString.map(e=> Number(e)),
        sum = arrDigit.reduce((a,b) => (a+b),0);
    console.log(sum)
    if (sum <= i) {
        return alert(sum);
    } else {
        return recurcia(sum, i);
    }    
}
