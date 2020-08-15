function downToOne1(n) {
    const list = [];

    for (let i = n; i > 0; --i) {
        list.push(i);
    }

    return list;
}

console.log(downToOne1(5))
//=> [ 5, 4, 3, 2, 1 ]

const downToOneArray = n => {
    const list = []
    for (let i = n; i > 0; --i) {
        list.push(i)
    }
    return list
}

console.log(downToOneArray(5))
//=> [ 5, 4, 3, 2, 1 ]



//-------------------------------
function* downToOne2(n) {
    for (let i = n; i > 0; --i) {
        yield i;
    }
}

console.log([...downToOne2(5)])
// [ 5, 4, 3, 2, 1 ]

function product(list) {
    let product = 1;
  
    for (const n of list) {
      product = product * n;
    }
  
    return product;
  }
  
console.log(product(downToOne1(5))) // 120
console.log(downToOne1(5).reduce( (a, b) => a * b)) // 120

//--------------
const myArray = ["a", "b", "c"];
// Без деструктурирования он выглядит так:

const x = myArray[0];
const y = myArray[1];
// С деструктурированием:

const [x1, y1] = myArray; // вот оно!

console.log(x1) // "a"
console.log(y1) // "b"