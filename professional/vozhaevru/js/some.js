let base1 = [2, 45, 5, -54, 55, 9, 6],
    base2 = [2, 45, 1, -54, 55, 9, 6];

function find(arr) {
    if (arr.some(element=> element === 5)) {
        return 'да'
    } else {
        return'нет'
    }
}

alert(`Наличие в массиве цифры "5"
Массив [${base1}]-'${find(base1)}'
Массив [${base2}]-'${find(base2)}'`);