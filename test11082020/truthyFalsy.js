//true
// если не равно
// false;
// 0;
// " " (пустая строка);
// null;
// undefined;
// NaN.

let myVar = false

if (!myVar) {
    console.log(true) // !myVar => true
} else {
    console.log(false) // myVar => false
}


new Boolean(0) // => false
new Boolean(1) // => true

if (Boolean(1)) {
    console.log(true)  // Boolean(1) => true
} else {
    console.log(false) // Boolean(0) => false
}

// myVar ? "truthy" : "falsy"

//например [] == true, он преобразуется в [].toString() == true:

let a = [] == true // a ложно, [].toString() возвращает ""
let b = [1] == true // b истинно, [1].toString() возвращает "1"
let c = [2] == true // c ложно, [2].toString() возвращает "2"