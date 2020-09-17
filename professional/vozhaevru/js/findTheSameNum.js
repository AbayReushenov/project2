// id задания: 62 Не сдано
// Задание: Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
const base1 = [2, 4, -4, 4, -8, 8, 4, 12, -12, 14, -20, 20, 13, 0, 1, 10 , 11, 9],
    base2 = [2, 4, -4, 8, 4, 12, 14, -20, -100, 12, 12, 13, 0, 1, 10 , 11, 9];

function find(arr){
    let check = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (check === arr[i]) {
            return 'да';
        }else{
            check = arr[i];           
        } 
    }
    return 'нет';
} 

alert(`Наличие в массиве двух одинаковых чисел подряд:\nМассив [${base1}]-'${find(base1)}'\nМассив [${base2}]-'${find(base2)}'`)