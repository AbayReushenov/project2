// id задания: 38 Не сдано
// Задание: Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

const base = [99, -2, 3, -4, 0, -102];
recurcia(base, 0);

function recurcia(arr, i) {    
    if (i == (arr.length - 1)) {
        return console.log(arr[i]);
    } else {
        console.log(arr[i]); 
        return  recurcia(arr, i + 1);
    }    
}


