'use strict';

const box = document.querySelector(".box");

const width = box.clientWidth;
const hieght = box.clientHeight;

console.log(width, hieght);
//   /* box-sizing: border-box; */
//   width: 400px;
//   height: 350px;
//=> 405 355

// box-sizing: border-box;
// width: 400px;
// height: 350px;
// => 385 335

// overflow: scroll;
// Scroll съедает правый padding (15 px)

const width2 = box.offsetWidth;
const hieght2 = box.offsetHeight;

console.log(width2, hieght2);
// => 400 350

const width3 = box.scrollWidth;
const hieght3 = box.scrollHeight;

console.log(width3, hieght3);
// => 385 1352

const btn = document.querySelector("button");

btn.addEventListener('click', () => {
   // box.style.height = box.scrollHeight + 'px';
   console.log(box.scrollTop);
   console.log(`Вы прочитали ${Math.floor(box.scrollTop/box.scrollHeight * 100)} % текста`);
   } );

//
// Получим координаты объекта .box

console.log(box.getBoundingClientRect());
// =>
// DOMRect {x: 232, y: 50, width: 400, height: 350, top: 50, …}
// DOMRect {x: 232, y: 50, width: 400, height: 350, top: 50, …}
// bottom: 400 -> сверху от границы экрана, в css - расчет снизу
// height: 350
// left: 232
// right: 632 -> слева от границы экрана, в css - расчет справа
// top: 50
// width: 400
// x: 232
// y: 50
// __proto__: DOMRect

console.log(box.getBoundingClientRect().top);
// => top: 50

// Computed style
// доступ
// F12 => Console => Elements => =>\/
// Computed
//Это неизменяемые стили сайта
// Доступ к ним только информационный

const styleBox = window.getComputedStyle(box); // идут из CSS

console.log(styleBox);
console.log(styleBox.display);
// => block

// если мы добавляем стили через js
// то это inline стили
// эти стили можно менять, inline стили переьивают 
// computed стили

console.log(document.documentElement.clientWidth);
// 864

console.log(document.documentElement.scrollTop);
// 0
// набираем в консоли
//document.documentElement.scrollTop
//document.documentElement.scrollTop = 0;
// мы перемещаемся наверх
// document.documentElement.scrollTop = 100000;
// мы перемещаемся вниз на 100000 пикселей.

// window.scrollBy(0, 400)
// (x, y) - By => от текущего элемента вниз
//  window.scrollTo(0, 400)
// (x, y) - To => от верха экрана вниз