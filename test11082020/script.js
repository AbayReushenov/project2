const data = [
    {label: "Test", important: false, id: 1},
    {label: "Going to learn React", important: true, id: 2 },
    {label: "That is so good", important: false, id: 3},
    {label: "Going to learn React", important: false, id: 4},
    ]

    // console.log(Object.keys(data)) // [ '0', '1', '2', '3' ]
    // console.log(Object.getOwnPropertyNames(data).sort()); // напечатает '0,1,2'
//     Object.getOwnPropertyNames(data).forEach(function(val, idx, array) {
//         console.log(val + ' -> ' + data[val]);
//       });

// 0 -> [object Object]
// 1 -> [object Object]
// 2 -> [object Object]
// 3 -> [object Object]
// length -> 4

// console.log((Object.values(data)))

// To convert an object to an array you use one of three methods: Object. keys() , Object. values() , and Object. entries() .
function idFearch(dataAa) {
    dataAa.forEach(obgi => {
        console.log(obgi.id); 
    })
}
idFearch(data)
console.log(data[0])

console.log(data[0].id)

const idarray = data.map(x => x.id)
console.log(idarray)

console.log(Math.max(...idarray))

// letdata=[1,2,3,4,5];
// Math.max(...data) // => 5