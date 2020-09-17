// id задания: 65 Не сдано
// Задание: Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
const element = prompt('Введите значение, которым заполнять массив'),
      len = +prompt('Сколько элементов должно быть в массиве?');
function arrayFill(item, numbers){
    let arr = new Array(numbers);
    return arr.fill(item);
}
console.log(" Массив = [" + arrayFill(element, len) +"].");


// fill()
// The fill() method sets the elements of an array, or a slice of an array, to a specified value. It mutates the array it is called on, and also returns the modified array:
let a = new Array(5); // Start with no elements and length 5
a.fill(0) //=> [0,0,0,0,0]; fill the array with zeros
a.fill(9, 1) // => [0,9,9,9,9]; fill with 9 starting at index 1
a.fill(8, 2, -1) // => [0,9,8,8,9]; fill with 8 at indexes 2, 3
// The first argument to fill() is the value to set array elements to. The optional sec‐ ond argument specifies the starting index. If omitted, filling starts at index 0. The optional third argument specifies the ending index—array elements up to, but not including, this index will be filled. If this argument is omitted, then the array is filled from the start index to the end. You can specify indexes relative to the end of the array by passing negative numbers, just as you can for slice().