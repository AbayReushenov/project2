// id задания: 21 Не сдано
// Задание: Напишите код, который принимает от пользователя число, представляющее собой промежуток времени в часах, и выводит на экран этот же промежуток времени, но выраженный в секундах.

// let time = prompt("Введите число, представляющее собой промежуток времени в часах");
// alert("Данное время в секундах составляет:" + time * 60 * 60);

// id задания: 80 Не сдано
// Задание: 1. Создай массив чисел.
// 2. Добавь в массив 10 чисел с клавиатуры.
// 3. Вывести на экран длину самой длинной последовательности повторяющихся чисел в списке.

// Пример для списка 2, 4, 4, 4, 8, 8, 4, 12, 12, 14:

let base = [2, 4, 4, 4, 8, 8, 4, 12, 12, 14],
    newBase = [],
    x,
    max = 0,
    keynum = [],
    freq = [],
    list = [];

let i = 1;
do {
    newBase[i] = +prompt(`Введите ${i} число`);
    base.push(newBase[i]);    
    } while(++i <= 10);

for (let i = 0; i < base.length; i++) {
    x = base.filter(element => element === base[i]).length;
    if (!keynum.includes(base[i])) {
        keynum.push(base[i]);
        freq.push(x);
    }
    if (x > max) {
        max = x;
    }
}
for (let i = 0;  i <= freq.length; i++) {
    if (freq[i] === max) {
        list.push(keynum[i]);
    }
}

alert(`Массив: ${base.sort((a,b)=>(a-b))}\n У следующих чисел ${list} максимальное количество в последовательности равное ${max}`)