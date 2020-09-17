let a = [1,true,3,NaN]; 
a.includes(true);// => true
a.includes(2); // => false
a.includes(NaN); // => true
a.indexOf(NaN); // => -1; indexOf can't find NaN



const base = ['Ноара', "Дорширак", "а эроплан", "Аэроплан", "аэроплаH"];
let a = "Аэроплан",
    b = "аэроплан";

alert(`Массив [${base}]
Строка поиска =${a}
Наличие в массиве текста :"${inArray(a, base)}"

Строка поиска =${b}
Наличие в массиве текста :"${inArray(b, base)}"
`);

function inArray(text, arr){
    return arr.includes(text)
}

