/*
id задания: 2 
Задание: Пользователь вводит длину оснований трапеции (a и b), а также высоту трапеции h. Программа выводит сообщение: «Площадь трапеции будет равна <значение>». Площадь вычисляется по формуле ((a + b) / 2) * h, где a, b - основания, h - высота.
*/

// let a = prompt(`Введите длину стороны 'a'`, 1),
//     b = prompt(`Введите длину стороны 'b'`, 1),
//     h = prompt(`Введите высоту трапеции 'h'`, 1);
// const s =((a + b) / 2) * h;  
// alert (`«Площадь трапеции будет равна ${s.toFixed(3)}»`); 


// const panel = document.querySelector('body');

// panel.insertAdjacentHTML('afterbegin', `
//     <div class='wrapper'>
//         <h1>Расчет площади трапеции</h1>
//         <dl>
//             <dt>Введите длину стороны 'a' </dt>
//                 <dd><input type="number" id="ai" value="1"></dd>
//             <dt>Введите длину стороны 'b' </dt>
//                 <dd><input type="number" id="bi" value="1"></dd>
//             <dt>Введите высоту трапеции 'h' </dt>
//                 <dd><input type="number" id="hi" value="1"></dd>
//         </dl>
//         <p>Нажмите на кнопку чтобы получиь результат</p>
//         <button onclick="trapFunction()">Получить результат</button>
//         <dl>
//             <dt>Площадь трапеции будет равна:</dt>
//                 <dd id="si"></dd>
//         </dl>
//     </div>
//     `);

// function trapFunction() {
//     const as = document.getElementById('ai').value,
//           bs = document.getElementById('bi').value,
//           hs = document.getElementById('hi').value,
//           summa = ((as + bs) / 2) * hs;
//     document.getElementById('si').innerHTML = summa.toFixed(3);
// }

// id задания: 89 Не сдано
// Задание: Дана строка 'я учу javascript!'. Найдите количество символов в этой строке

// const numberOfCharcter = (anyString) =>{
//           let sum = 0;
//           [...anyString].map(item => (item !== " " )?sum++ : null );
//           return sum;
//       };

// let str = 'я учу javascript!';

// alert(`Символов без учета пробелов:${numberOfCharcter(str)}\nОбщее количество символов, с учетом символа пробел, равно:${str.length}`);

// id задания: 81 Не сдано
// Задание:
// Внеси изменения в программу, чтобы выводился на экран текст: Coding in javaScript
// let s1 = "Coding";
// let s2 = "in";
// let s3 = "c++";
// let s4 = "javaScript";
// let str = s1 + " " + s2 + " " + s4;

// // document.write(s1 + " " + s2 + " " + s4);
// document.querySelector('body').append(str); // вариант запасной недоработанный

// id задания: 68 Не сдано
// Задание: Дана строка 'js'. Сделайте из нее строку 'JS'.

// let str = 'js';
// str = str.toUpperCase();
// console.log(str);

// id задания: 53 Не сдано
// Задание: Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
// не работает!!!
// let str = 'var_text_hello';
// for(let i = 0; i < str.length; i++) {
//     if (str[i] == '_') {
//         str[i+1] = str[i+1].toUpperCase();
//         console.log(str[i]);
//     }
// }


// const toCamelCase = (e) => {
//     return e.replace(/_([A-я])/g, (g) =>  g[1].toUpperCase());
// };

// console.log(toCamelCase('яблоко_мороженое_петрович_снеки_ext_hello'));
// //яблокоМороженоеПетровичСнекиExtHello

// let str = 'var_text_hello'
// const regexp = new RegExp("_([a-z])", "g")

// const toCamelCase = (e) => {
//     return e.replace(regexp, (findedStr) =>  findedStr[1].toUpperCase());
//   };
// console.log(toCamelCase(str));
//   // varTextHello
//---------------------------------------
//   id задания: 45 Не сдано
//   Задание: Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
const str = 'aaa bbb ccc',
    replace = 'bbb',
    len = replace.length,
    numberIn = str.indexOf(replace),
    str1 = str.substr(0,numberIn) + str.substr(numberIn + len)
    str2 = str.substring(0 , numberIn) + str.substring(numberIn + len),
    str3 = str.slice(0, numberIn) + str.slice(numberIn + len);

alert(`.substr():${str1}\n.substring():${str2}\n.slice():${str3}`)


    str4 = str.replace(/bbb/g, '')
    console.log(str1)
    console.log(str2)
    console.log(str3)
    console.log(str4)

    console.log(str)



