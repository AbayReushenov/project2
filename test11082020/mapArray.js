const data = [
    {label: "Test", important: false, id: 1},
    {label: "Going to learn React", important: true, id: 2 },
    {label: "That is so good", important: false, id: 3},
    {label: "Going to learn React", important: false, id: 4},
    ]

const idarray = data.map(x => x.id)
console.log(idarray) // [ 1, 2, 3, 4 ]
console.log(Math.max(...idarray)) //4

