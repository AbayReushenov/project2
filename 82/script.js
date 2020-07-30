// let a = 0
// console.log(a)


// let obj = {
//     number: 5,
//     saynumber: function() {
//         function say() {
//             console.log(this)
//         }
//         say()
//     },
//     sayNumber: function() {
//         say = () => {
//             console.log(this)
//         }
//         say()
//     }
// }

// obj.saynumber() // Window {parent: Window,
// obj.sayNumber() //{number: 5, saynumber: ƒ, sayNumber: ƒ}
// let list = ['100', "-111", `99`, '88']

// let list90 = list.filter((list) => {
//     return list.length >= 3
// })
// console.log(list90)  //=> ["100", "-111"]

// let list = ['ЛЛлл', "ЗЗPP", `9APPII9`, '8]LLLl8']
// list = list.map((list) => list.toLowerCase())

// console.log(list)  //=> [ 'лллл', 'ззpp', '9appii9', '8]llll8' ]

// function frtchLove(me = true, you = false) {
//     console.log(`If my love is ${me} you love is ${you}`)
// }

// frtchLove(false) // If my love is false you love is false
// frtchLove()
// frtchLove(,true)

// #rest
// function  summarixing(aniki, beniki, ...pew) {
//     console.log(pew)
// }

// summarixing(1,1,1,1,1,"0,0",0,-555,2000,3.22)

// const a = [ -1, 5, 3],
//       b = [19, 0, -8,]
      
// console.log(Math.max(...a , ...b))

// const rest = [...a , ...b]

// console.log(rest)

// console.log(Math.max(...rest))

// console.log(Math.max(rest))

// const submissive = {
//     id: 1,
//     log: "a1",
//     pass: "b1",
//     duty: 'c1'
// },

// dominant = {
//     id: 9,
//     log: "a9",
//     level: false
// },

// all = Object.assign({}, submissive, dominant),
// res = {...submissive, ...dominant}
// console.log(all,res)

// const i = 99, j = -56, matrica = { i, j}
// console.log(matrica) // => { i: 99, j: -56 }

// const iOld = 99, jOld = -56,
//      matricaOld = {
//             iOld: iOld,
//             jOld: jOld
//     }
// console.log(matricaOld) // => { iOld: 99, jOld: -56 }
// const z = 0.003
// const matrica2 = {...matrica, z}
// console.log(matrica2)

// //Деструктуризация
const ourObject = {
    a: 12,
    b: 16,
    i: false,
    j: "Ok",
}
const {a, b11, i, j01} = ourObject


console.log(a, b11, i, j01 )  //=> 12 undefined false undefined

//------
const massiv = [12, 16, false,"Ok"]
const [a, , i, j01] = massiv

console.log(a, i, j01)  
//=> 12 false Ok


// function es6_8 ({
//     id = 0,
//     login = "default",
//     pass = "default"
//     } = {} ) {
//     console.log(`Hi ${id}, your login is ${login} and password: ${pass}`)}
// es6_8()
//=> Hi 0, your login is default and password: default


console.log("hello world".capitalize());