const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message)
    }
}
obj.log(obj.message)
// Они, как и переменные, могут добавляться к объектам
//They can be added to objects like variables
const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
]
messages[1](messages[0]) // Они могут вставляться в массивы
messages[3](messages[2]) // как переменные
// They can be inserted into arrays
// like variables

// Функции, подобно всем другим переменным, могут отправляться другим функци- ям в качестве аргументов:

const insideFn = logger =>
    logger("They can be sent to other functions as arguments");

insideFn(message => console.log(message))
//They can be sent to other functions as arguments

// Они могут отправляться другим функциям в качестве аргументов
// Они точно так же, как и переменные, могут возвращаться из других функций:
var createScream = function (logger) {
    return function (message) {
        logger(message.toUpperCase() + "!!!")
    }
}
const scream = createScream(message => console.log(message))
scream('functions can be returned from other functions')
scream('createScream returns a function')
scream('scream invokes that returned function')
// ФУНКЦИИ МОГУТ ВОЗВРАЩАТЬСЯ ИЗ ДРУГИХ ФУНКЦИЙ!!!
// CREATESCREAM ВОЗВРАЩАЕТ ФУНКЦИЮ!!!
// SCREAM ВЫЗЫВАЕТ ВОЗВРАЩЕННУЮ ФУНКЦИЮ!!!
// FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS!!!
// CREATESCREAM RETURNS A FUNCTION!!!
// SCREAM INVOKES THAT RETURNED FUNCTION!!!
//--------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Наличие более одной стрелки означает
// присутствие функции высшего порядка
const createScream = logger => message =>
    logger(message.toUpperCase() + "!!!")
// Отныне и впредь нужно будет обращать внимание на количество стрелок, ис- пользуемых при объявлении функции. 
createScream(console.log("Hi!")) // Hi!

//императивный подход:
var string = "This is the midday show with Cheryl Waters";
var urlFriendly = "";
for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
        urlFriendly += "-";
    } else {
        urlFriendly += string[i];
    }
}
console.log(urlFriendly);
// This-is-the-midday-show-with-Cheryl-Waters

// декларативный подход к решению той же самой задачи:
const string = "This is the mid day show with Cheryl Waters"
const urlFriendly = string.replace(/ /g, "-")
console.log(urlFriendly)
// This-is-the-mid-day-show-with-Cheryl-Waters

const loadAndMapMembers = compose(
    combineWith(sessionStorage, "members"),
    save(sessionStorage, "members"),
    scopeMembers(window),
    logMemberInfoToConsole,
    logFieldsToConsole("name.first"),
    countMembersBy("location.state"),
    prepStatesForMapping,
    save(sessionStorage, "map"),
    renderUSMap
);
getFakeMembers(100).then(loadAndMapMembers);

// Рассмотрим объект, представляющий цвет lawn (зеленая лужайка):
//----1---
let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
}
// Можно создать функцию, оценивающую цвета, и использовать ее для измене- ния рейтинга объекта color:
function rateColor(color, rating) {
    color.rating = rating
    return color
}
console.log(rateColor(color_lawn, 5).rating) // 5
console.log(color_lawn.rating) // 5

// -2-

let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
}

var rateColor = function (color, rating) {
    return Object.assign({}, color, {
        rating: rating
    })
}
console.log(rateColor(color_lawn, 5).rating) // 5
console.log(color_lawn.rating) // 0

//---3-----

let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
}

const rateColor = (color, rating) =>
    ({
        ...color,
        rating
    })

console.log(rateColor(color_lawn, 5).rating) // 5
console.log(color_lawn.rating) // 0


//---------
let list = [{
        title: "Rad Red"
    },
    {
        title: "Lawn"
    },
    {
        title: "Party Pink"
    }
]
// Можно создать функцию, которая будет добавлять цвета к массиву, используя Array.push:
var addColor = function (colorName, listColors) {
    listColors.push({
        title: colorName
    })
    return listColors;
}
console.log(addColor("Green", list).length)
console.log(list)

// 4 // 4

// Array.concat:
let list = [{
        title: "Rad Red"
    },
    {
        title: "Lawn"
    },
    {
        title: "Party Pink"
    }
]
const addColor = (title, listColors) => listColors.concat({
    title
})

console.log(list.length) // 3
console.log(list)
console.log(addColor("Green", list))
console.log(addColor("Green", list).length) // 4


//---2---
let list = [{
        title: "Rad Red"
    },
    {
        title: "Lawn"
    },
    {
        title: "Party Pink"
    }
]
const addColor = (title, list) => [...list, {
    title
}]

console.log(list.length) // 3
console.log(list)
console.log(addColor("Green", list))
console.log(addColor("Green", list).length)


const insider = [
    "Klaus",
    "Milak",
    "Lokasd",
    "Kovash"
]
const sas = xxx => insider.filter(item => item[0] === xxx)
console.log(sas("M"))
// [ 'Milak' ]

const cutHim = (cut, data) =>
    data.filter(item => item !== cut)
console.log(cutHim('Milak', insider).join("\n"))
// "Yorktown * Wakefield"

const insiderMessage = insider.map(item => `${item} servants of HKKK`)

console.log(insiderMessage.join(", "))

const id = insider.map(item => ({
    name: item,
    id: Math.trunc(Math.random() * 1000)
}))
console.log(id)


///--------------------------------

const insider = [
    "Klaus",
    "Milak",
    "Lokasd",
    "Kovash"
]
const editName = (oldName, name, arr) =>
    arr.map(item => {
        if (item === oldName) {
            return name
        } else {
            return item
        }
    })

let hideInsider = editName("Milak", "Bogach", insider)
console.log(hideInsider) // 
console.log(insider) // 
// [ 'Klaus', 'Bogach', 'Lokasd', 'Kovash' ]
// [ 'Klaus', 'Milak', 'Lokasd', 'Kovash' ]


///--------

const mess = ["red", "red", "green", "blue", "green"];
const clean = mess.reduce(
    (clean, item) => 
        (clean.indexOf(item) !== -1) ?
            clean :
            [...clean, item],
        []
)
console.log(clean)
// ["red", "green", "blue"]


<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
//https://www.npmjs.com/package/jquery
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
      

const userLogs = userName => message =>
    console.log(`${userName} -> ${message}`)
const log = userLogs("grandpa23")
log("attempted to load 20 fake members")
getFakeMembers(20).then(
members => log(`successfully loaded ${members.length} members`), error => log("encountered an error loading members")
)