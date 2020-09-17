
// id задания: 33 Не сдано
// Задание: Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

const str = 'hello, world!';

const str1 = str[0].toUpperCase().concat(str.substring(1)); 
const str2 = str.replace(str[0], str[0].toUpperCase());
const str3 = str.slice(0,1).toUpperCase() + str.slice(1);
const str4 = str.substr(0,1).toLocaleUpperCase() + str.substr(1);
const str5 = str.substring(0,1).toLocaleUpperCase() + str.substring(1);
const str6 = str

alert(`Вариант 1: "concat + substring" ${str1}
Вариант 2: "replace": ${str2}
Вариант 3: "slice": ${str3}
Вариант 4: "substr": ${str4}
Вариант 5: "substring": ${str5}`);


//--------------------------
let s = "Hello, world",
    s1 = s.concat("!");
console.log(s1) // Hello, world!
console.log([s[1],...s[s.length-1]]) // e