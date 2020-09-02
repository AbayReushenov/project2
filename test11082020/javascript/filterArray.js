const numbers =[-1202, -4.09, 23, 0, 456, 589, 108, 500.02]

const evenNumbers = numbers.filter(n => n % 2 === 0);

console.log(evenNumbers); // [ -1202, 0, 456, 108 ]

const notEven = numbers.filter(function(n) {
    return n % 2 !== 0 && n % 1 === 0 ; // 
  });

console.log(notEven); // [ 23, 589 ]

const data = [
    {label: "Test", important: false, id: 1},
    {label: "Going to learn React", important: true, id: 2 },
    {label: "That is so good", important: false, id: 3},
    {label: "Going to learn React", important: false, id: 4},
    ]

const idarray = data.map(x => x.id).filter(a => a >= 3)
console.log(idarray) // [ 3, 4 ]
console.log(Math.max(...idarray)) //4
