function sum(a, b) {
    return a + b;
}
console.log(sum(2.5, 20.3)) // 22.8

const greet = () => 'hello world!';
console.log(greet()) //hello world!

function check(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
}
console.log(check(99)) //false

function sumarray(array) {
    return array.reduce((a, b) => a + b);
}

console.log(sumarray([1, 0, 3, 0.2])) //4.2

const sumarray2 = (array) => array.reduce((a, b) => a + b);
console.log(sumarray2([1, 0, 3, 0.2])) //4.2


function greeting(name) {
    return `Salut, ${name}`;
}
console.log(greeting('Françua')) //Salut, Françua

// В задаче, в которой нужно вывести самую длинную строку, не могу никак сообразить, как вывести «несколько строк с одинаковой длинной»?

let array = ['Галя', 'Саша', 'Лена', 'Евгения', 'Иван', 'Оля', 'Ася', 'Алексей'];

function getShortestName(arr) {
    let total = array[0];
    for (let index = 0; index < array.length; index += 1) {

        if (array[index].length > total.length) {
            total = array[index];
        }
    }
    return total;
}

for (let i = 0; i < array.length; i++) {
    if (array[i].length == getShortestName(array).length) {
        console.log(array[i]);
    }
}
