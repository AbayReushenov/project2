const data = [
    {label: "Test", important: false, id: 1},
    {label: "Going to learn React", important: true, id: 2 },
    {label: "That is so good", important: false, id: 3},
    {label: "Going to learn React", important: false, id: 4},
    ]

function idFearch(dataAa) {
    dataAa.forEach(obgi => {
        console.log(obgi.id); 
    })
}
idFearch(data)

// 1
// 2
// 3
// 4