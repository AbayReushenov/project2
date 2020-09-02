const data = [
    {label: "Test", important: false, id: 1},
    {label: "Going to learn React", important: true, id: 2 },
    {label: "That is so good", important: false, id: 3},
    {label: "Going to learn React", important: false, id: 4},
    ]

console.log(data[0]) // { label: 'Test', important: false, id: 1 }

console.log(data[0].id)  // 1

console.log(Object.getOwnPropertyNames(data).sort()); 
//[ '0', '1', '2', '3', 'length' ]

// To convert an object to an array you use one of three methods: 

console.log(Object.keys(data))
// [ '0', '1', '2', '3' ]

console.log(Object.values(data)) 
// [
//     { label: 'Test', important: false, id: 1 },
//     { label: 'Going to learn React', important: true, id: 2 },
//     { label: 'That is so good', important: false, id: 3 },
//     { label: 'Going to learn React', important: false, id: 4 }
//   ]

console.log(Object.entries(data))
// [
//     [ '0', { label: 'Test', important: false, id: 1 } ],
//     [ '1', { label: 'Going to learn React', important: true, id: 2 } ],
//     [ '2', { label: 'That is so good', important: false, id: 3 } ],
//     [ '3', { label: 'Going to learn React', important: false, id: 4 } ]
//   ]


const x = 10;
const myObj = { x };
console.log(myObj.x) // 10
//------------------------------------
const x = 10;
const y = 20;

const myObj = {
  x: x, // объявление значения переменной x для myObj.x
  y: y // объявление значения переменной y для myObj.y
};

console.log(myObj.x) // 10
console.log(myObj.y) // 20

//------------------------------------

const x = 10;
const y = 20;

const myObj = {
  x,
  y
};

console.log(myObj.x) // 10
console.log(myObj.y) // 20
//------------------------------------

// Расширение свойств объекта.
const myObj = { x: 1, y: 2, a: 3, b: 4 };
const { x, y, ...z } = myObj; // деструктурируем объект
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// z — оставшаяся часть деструктурированного объекта myObj после вычитания свойств x и y

const n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }

// свойства объекта z распространяются на n