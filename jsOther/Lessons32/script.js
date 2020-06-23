// Навигация по ДОМ элементам
// Примеры
console.log(document.body); // получаем в консоли <body></body>
// родителем body является html 
// доступ к нему
console.log(document.documentElement); // <html></html>

// Получим узлы(Nodes) у body
console.log(document.body.childNodes);  // => 
//  NodeList(6) [text, div.wrapper, text, comment, text, script]
// узел включает элементы и прочее
// мы видим элементы, переносы - узлы, хотя  мы их и не видим
// получим дочерние элементы - ChildNodes
console.log(document.body.firstChild); //=> #text Перенос строки
console.log(document.body.lastChild); //=> <script src="script.js"></script>

// Получим другой Node через селектор, и получим его родителя
// через .parentNode можно несколько раз
console.log(document.querySelector("#current").parentNode); 
// => <div class="first"></div>
console.log(document.querySelector("#current").parentNode.parentNode);
// => <div class="wrapper"></div>

// Дата атрибуты HTML5 , new sintaxis расставлены в коде:
//  data-current="3"  =>  <li data-current="3">3</li>
console.log(document.querySelector('[data-current="3"]')); 

//получим следующий за ним узел "Node"
// .nextSibling or .previousSibling
console.log(document.querySelector('[data-current="3"]').nextSibling); 
// => #text, это перенос  data: "↵↵                "

console.log(document.querySelector('[data-current="3"]').nextSibling.nextSibling); 
// => <li>4</li>
// возврат  к предыдущему элементу

console.log(document.querySelector('[data-current="3"]').previousSibling);
// #text   :  data: "↵                "

console.log(document.querySelector('[data-current="3"]').previousSibling.previousSibling);
 // <li>2</li>

 //получим следующий за ним "Element"
 // .nextElementSibling or .previous.ElementSibling
console.log(document.querySelector('[data-current="3"]').nextElementSibling); 
// => <li>4</li>

console.log(document.querySelector('[data-current="3"]').nextElementSibling.nextElementSibling); 
// => <li>5</li>
// возврат  к предыдущему элементу

console.log(document.querySelector('[data-current="3"]').previousElementSibling);
// <li>2</li>

console.log(document.querySelector('[data-current="3"]').previousElementSibling.previousElementSibling);
 //<li>1</li>

// Аналогично для .parentNode заменяем на .parentElement
// Получим другой Element ерез селектор, и получим его родителя
// через .parentElement можно несколько раз
console.log(document.querySelector("#current"));
// => <button id="current"></button>

console.log(document.querySelector("#current").parentElement); 
// <div class="first">

console.log(document.querySelector("#current").parentElement.parentElement);
//  <div class="wrapper">

// к примеру с .parentNode выхлоп будет таким же :
console.log(document.querySelector("#current").parentNode); 
// => <div class="first"></div>
console.log(document.querySelector("#current").parentNode.parentNode);
// => <div class="wrapper"></div>


//
// для .Child также возможно обращение к элементу а не Node
console.log(document.body.firstChild); //=> #text Перенос строки
console.log(document.body.firstElementChild); // <div class="wrapper">

console.log(document.body.lastChild);
//=> <script src="script.js"></script>
console.log(document.body.lastElementChild); 
//=> <script src="script.js"></script>
// здесь Element == Node

// для childNodes нет аналога для Elements
// поэтому поскольку это псевдомассив перебираем его с помощью 
// for of, forEach иногда не проходит
console.log(document.body.childNodes); 
// выведем node не являющиеся текстовыми
for (let node of document.body.childNodes) {
    if (node.nodeName == "#text" ) {
        continue; // прерываем дальнейший перебор
    }             // данная node не идет в консоль
                  // переходи к проверке следцющей node    
    console.log(node);
}
// => 3 узла являющиеся 2 элементами и 1 коментарий
// в каждом узле могут быть под элементы
//=>
// <div class="wrapper">
// <!-- renernh -->  // node, не элемент !!!
// <script src="script.js"></script>
 