const btns = document.querySelectorAll('button');

//console.log(btns[0].classList.length);
// у кнопки btns[0] имеется 2  класса
// количество прописанных классов можно плоучить обращаясь к свойству
// .classList.length
// Также используются методы у свойства .classList
// Метод .item()  возвращает конкретный  класс за порядковым номером

// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.item(1));

// console.log(btns[7].classList.length);
// console.log(btns[7].classList.item(0));
// console.log(btns[7].classList.item(1));
// console.log(btns[7].classList.item(2));
// console.log(btns[7].classList.item(3));
// 2
// script.js:10 blue
// script.js:11 some
// script.js:13 4
// script.js:14 one
// script.js:15 two
// script.js:16 three
// script.js:17 four

// Добавим класс к 1 кнопке
// console.log(btns[0].classList.add("red", "one", "three"));
// удаляем класс у 1 кнопики
// console.log(btns[0].classList.remove("blue"));

// method togle()
// if 'element' is true, it's removed, and if it's false it is added
// console.log(btns[0].classList.toggle("blue")); 

// console.log(btns[1].classList.add("red", "one", "three"));

// if (btns[1].classList.contains('red')) {
//     console.log("red");
//  } else {
//      console.log("no");
//  }

// Поработаем с обработчиком события
// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
        
//     } else {
//         btns[1].classList.remove('red');
//          }
    
//     });

// анадлгично с функцией toggle
btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
    });

// устаревиший метод ClassName
// console.log(btns[0].className);
// => script.js:61 blue some
// we have a list here


// Делегирование

// wrapper -обертка
const wrapper = document.querySelector(".btn-block");
wrapper.addEventListener('click', (event) => {
    console.dir(event.target);
});
// ==>>  div#first.btn-block   

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
console.log("Hello world!");
    }
});

// tagName: "BUTTON"

 
// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.classList.contains('blue')) {
// console.log("Hello class 'blue'!");
//     }
// });

// если добавить обработчик события чере метод .forEach то :
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("By !");
    });
});





// создадим еще одну кнопку
// 
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// добавим еще  один раз метод .forEach
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("Welcome to JavaScript!");
    });
});

// Метод .forEach не видит новые элемент "BUTTON",
//Чтобы обратиться к нему нужно использовать
// event.target.tagName == "BUTTON"
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
console.log("Hello world! I have understand event.target.tagName == 'BUTTON'");
    }
});

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("By 2 !");
    });
});

//  another one option with event.target.matches 
// we call tag = "button" and class 'red'
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
console.log("Hello GOOGLE! event.target.matches('button.red')");
    }
});

//
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.one")) {
console.log("button.one");
    }
});
//  в следующем случае произойдут все события привязанные  к клику (мы добавили еще один класс 'three')
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.three")) {
console.log("button.three");
    }
});

// By !
// script.js:110 Welcome to JavaScript!
// script.js:125 By 2 !
// script.js:71 button.one.two.three.four
// script.js:77 Hello world!
// script.js:119 Hello world! I have understand event.target.tagName == 'BUTTON'
// script.js:140 button.one
// script.js:146 button.three