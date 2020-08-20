class GameOfThronesServise {
    constructor() {
        this._urlBase = 'https://www.anapioficeandfire.com/api/'
    }

    zaprosNaServer = async url => {
        const otvetOtServera = await fetch(`${this._urlBase}${url}`)

        if (!otvetOtServera.ok) {
          throw new Error (`Sorry you have  code of error on url: ${this._urlBase}${url}, status : ${otvetOtServera.status}`)
        }

        const pereformatVJson = await otvetOtServera.json(`${this._urlBase}${url}`)
        
        return pereformatVJson
    }
    
    methodGetList = url => this.zaprosNaServer(url)
}

// const personageUrl = "https://www.anapioficeandfire.com/api/characters"
const p5s10 = '?page=5&pageSize=10'
let id = 130
const link = who => `characters/${who}`

const newGame = new GameOfThronesServise()

newGame.methodGetList(link(p5s10))
    .then(data => console.log(data))
// (10) ["Aegon IV", "Aegon Targaryen", "Aegon Targaryen", "Aegon Targaryen", "Aegon Targaryen", "Aegon V", "Aegor Rivers", "Aelinor Penrose", "Aemma Arryn", "Aemon Blackfyre"]
        
newGame.methodGetList(link(p5s10))
    .then(data => console.log(data.map(x => x.name)))

//(10) ["Aegon IV", "Aegon Targaryen", "Aegon Targaryen", "Aegon Targaryen", "Aegon Targaryen", "Aegon V", "Aegor Rivers", "Aelinor Penrose", "Aemma Arryn", "Aemon Blackfyre"]

newGame.methodGetList(link(p5s10))
    .then(data => data.map(x => console.log(x.name)))

    //                    Aegon IV
    // 4zaprosNaGOT.js:31 Aegon Targaryen
    // zaprosNaGOT.js:31 Aegon V
    // zaprosNaGOT.js:31 Aegor Rivers
    // zaprosNaGOT.js:31 Aelinor Penrose
    // zaprosNaGOT.js:31 Aemma Arryn
    // zaprosNaGOT.js:31 Aemon Blackfyre

newGame.methodGetList(link(id))
    .then(data => console.log(data))
// {url: "https://www.anapioficeandfire.com/api/characters/130", name: "Arianne Martell", gender: "Female", culture: "Dornish", born: "In 276 AC, at Sunspear", …}

newGame.methodGetList(link(id))
    .then(data => console.log(data.name))
//Arianne Martell
