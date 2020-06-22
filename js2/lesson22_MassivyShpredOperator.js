"use strict";

let a = 1,
    b = -1,
    c = a,
    d = b,
    g = d,
    e = c;
console.log(a, b ,c ,d ,g ,e);
e = 2;
g = 3;
d = 5;
c = 6;
console.log(a, b ,c ,d ,g ,e);

let perebor = (perebObj) => {
    let str = '';
    for (let key in oldObj) {
        str += oldObj[key] + ',';  
    }
    return console.log(str);
};   
// Можно также осуществить преобразование явным вызовом String(val):
//Для преобразования к числу в явном виде можно вызвать Number(val), либо, что короче, поставить перед выражением унарный плюс "+"
  
const oldObj = {
    a: 1,
    b: -1,
    c: 1,
    d:-1,
    g: -1,
    e: 1,
};
// Для Объектов перебор через 'let key in object'
// Для Объуктов перебор черех 'let key of object' не работает)
// перебор массива :
/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
} */
/* for (let key in oldObj) {
    console.log(oldObj[key]);
} */

perebor(oldObj);

let newObj = oldObj;
newObj.a = 10;
newObj.b = 20;
newObj.c = -10;
newObj.e = 0;
oldObj.d = 100;
perebor(oldObj);
perebor(newObj);
     /* 1,-1,1,-1,-1,1,
        10,20,-10,100,-1,0,
        10,20,-10,100,-1,0, */
//--------
//Создание функции копирования свойств объекта перебором ключа
function copyObject(anyObj) {
    let newCopyObj = {};

    let key;
    for ( key in anyObj) {
        newCopyObj[key] = anyObj[key]; // копируем свойства
        }

        return newCopyObj;
}
 
//новый объект
  
const numbersy = {
    a: 1,
    b: -1,
    c: 1,
    d:-1,
    g: -1,
    e: 1,
    x: {
        q: 5,
        w: 10,
        z: -4
    },
    i: 0.9
};
const  newNumbersy = copyObject(numbersy); //клонирование 
newNumbersy.a = 10;
console.log(newNumbersy);
console.log(numbersy);
/* {
    a: 10,
    b: -1,
    c: 1,
    d: -1,
    g: -1,
    e: 1,
    x: { q: 5, w: 10, z: -4 },
    i: 0.9
  }
  {
    a: 1,
    b: -1,
    c: 1,
    d: -1,
    g: -1,
    e: 1,
    x: { q: 5, w: 10, z: -4 },
    i: 0.9
  } */

  newNumbersy.x.w = -1000;
  console.log(newNumbersy);
  console.log(numbersy);
/* Вложенные структуры не изменились при копировании
Данная копия - поверхностная копия
{
    a: 10,
    b: -1,
    c: 1,
    d: -1,
    g: -1,
    e: 1,
    x: { q: 5,   z: -4 },
    i: 0.9
  }
  {
    a: 1,
    b: -1,
    c: 1,
    d: -1,
    g: -1,
    e: 1,
    x: { q: 5, w: -1000, z: -4 },
    i: 0.9
  }
   */

   // Глубокая копия
   // Metod .assign()
   // синтаксис Object.assign(targetObject1, targetObject2)

   const number = {
    a: 1,
    b: -1,
    x: {
        q: 5,
        w: 10,
        },
    i: 0.9
};

const add = {
    d: 654,
    w: 65321,
    f: {
        l: 0,
        p: 3,
    },
    u: 2,
};

console.log(Object.assign(number, add));
/* {
    a: 1,
    b: -1,
    x: { q: 5, w: 10 },
    i: 0.9,
    d: 654,
    w: 65321,
    f: { l: 0, p: 3 },
    u: 2
  } */ 
const cloneadd = Object.assign({}, add);
cloneadd.w = -1000;
console.log(add);
console.log(cloneadd);
     /* { d: 654, w: 65321, f: { l: 0, p: 3 }, u: 2 }
        { d: 654, w: -1000, f: { l: 0, p: 3 }, u: 2 } */
//
// Для массивов
const oldArray = ['a','b','c'];
const newArray = oldArray;

console.log(oldArray);
console.log(newArray);
[ 'a', 'b', 'c' ]
[ 'a', 'b', 'c' ]
//----------------------

newArray[0] = "d";
oldArray[2] = "r";

console.log(oldArray);
console.log(newArray);
     /* [ 'd', 'b', 'r' ]
        [ 'd', 'b', 'r' ] */
//----------------------
//----------------------

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

console.log(oldArray);
console.log(newArray);
     /* [ 'a', 'b', 'c' ]
        [ 'a', 'b', 'c' ] */

//----------------------
newArray[0] = "d";
oldArray[2] = "r";

console.log(oldArray);
console.log(newArray);

     /* [ 'a', 'b', 'r' ]
        [ 'd', 'b', 'c' ] */
//----------------------
// 4- способ
// Оператор разворота
// spred operator
const video = ['youtube', 'vimeo', 'rutube'],
  blogs = ['wordpress', 'livejournal', 'blogs'],
  internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(video);
console.log(blogs);
console.log(internet);
 /* [ 'youtube', 'vimeo', 'rutube' ]
    [ 'wordpress', 'livejournal', 'blogs' ]
    [
    'youtube',
    'vimeo',
    'rutube',
    'wordpress',
    'livejournal',
    'blogs',
    'vk',
    'facebook'
    ] */
//----------------------
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5 , 7];
// - - - -  !!!
log(...num);
log(num);
log(num[0], num[1], num[2]);
     /* 2
        5
        7
        [ 2, 5, 7 ]
        undefined
        undefined
        2
        5
        7 */
// -------------
// Новая копия с помощью spread : [...]
const array1 = ['a', 'b']

const newArray1 = [...array1];

newArray1[0] = 's';

console.log(array1);
console.log(newArray1);
     /* [ 'a', 'b' ]
        [ 's', 'b' ] */
// -------------
// Еще один способ клонировать массив
const massivQ = {
    one: 1,
    two: 2,
    three: 3,
    four: 4
};

const newObje = {...massivQ};

massivQ.one = 987;
newObje.four = 231;

console.log(massivQ);
console.log(newObje);
     /* { one: 987, two: 2, three: 3, four: 4 }
        { one: 1, two: 2, three: 3, four: 231 } */


// Осторожно!
// Для многоуровневых объектов он не работает !
const massivQ = {
    one: 1,
    two: 2,
    three: 3,
    four: {
        five: 5,
        six: 6
    }
};

const newObje = {...massivQ};

massivQ.one = 987;
massivQ.four.five = 231;

console.log(massivQ);
console.log(newObje);

{ one: 987, two: 2, three: 3, four: { five: 231, six: 6 } }
{ one: 1, two: 2, three: 3, four: { five: 231, six: 6 } }
