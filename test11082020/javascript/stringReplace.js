// https://gist.github.com/cawfree/c08c10f6f2e7b2c8d225d88b031a03ce
// Convert between Camel Case (camelCase) and Snake Case (snake_case) in ES6
// export const toCamelCase = (e) => {
//     return e.replace(/_([a-z])/g, (g) =>  g[1].toUpperCase());
//   };
  
//   export const toSnakeCase = (e) => {
//     return e.match(/([A-Z])/g).reduce(
//       (str, c) => str.replace(new RegExp(c), '_' + c.toLowerCase()),
//       e
//     )
//     .substring((e.slice(0, 1).match(/([A-Z])/g)) ? 1 : 0);
//   };

const toCamelCase = (e) => {
    return e.replace(/_([A-я])/g, (g) =>  g[1].toUpperCase());
  };


  console.log(toCamelCase('яблоко_мороженое_петрович_снеки_ext_hello'));
  //яблокоМороженоеПетровичСнекиExtHello

  яблокоМороженоеПетровичСнекиExtHello

  //str.replace(regexp|substr, newSubStr|function[, flags])

  // заменить тире двоеточием
console.log('12-34-56'.replace("-", ":")) // 12:34-56



console.log('12-34-56'.replace("-", ":")) // 12:34-56

//regexp = new RegExp("шаблон", "флаги");
regexp = new RegExp("-", "g");
// заменить тире двоеточием
console.log('12-34-56'.replace("-", ":")) // 12:34-56
console.log('12-34-56'.replace(regexp, ":")) // 12:34:56
console.log('12-34-56'.replace(/-/g, ":")) // 12:34:56

// Замена: str.replace
// Метод str.replace(regexp, replacement)
// заменяет совпадения с regexp в строке str на replacement (все, если есть флаг g, иначе только первое


// Наборы и диапазоны [...]
// Несколько символов или символьных классов в квадратных скобках […] означают «искать любой символ из заданных».

// Наборы
// Для примера, [eao] означает любой из 3-х символов: 'a', 'e' или 'o'.

// Диапазоны
// Ещё квадратные скобки могут содержать диапазоны символов.

// К примеру, [a-z] соответствует символу в диапазоне от a до z, или [0-5] – цифра от 0 до 5.
alert( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) ); // xAF
// Здесь в [0-9A-F] сразу два диапазона: ищется символ, который либо цифра от 0 до 9, либо буква от A до F.

// Если мы хотим найти буквы и в верхнем и в нижнем регистре, то мы можем добавить ещё диапазон a-f: [0-9A-Fa-f]. Или поставить у регулярного выражения флаг i.

// Также мы можем использовать символьные классы внутри […].

// Например, если мы хотим найти «символ слова» \w или дефис -, то набор будет: [\w-].

// Можем использовать и несколько классов вместе, например [\s\d] означает «пробельный символ или цифра».

// \w является всего лишь сокращением для [a-zA-Z0-9_], он не найдёт китайские иероглифы, кириллические буквы и т.п.

// Экранирование внутри […]
// Обычно, когда мы хотим найти специальный символ, нам нужно экранировать его, например \.. А если нам нужна обратная косая черта, тогда используем \\, т.п.

// В квадратных скобках большинство специальных символов можно использовать без экранирования:

// Символы . + ( ) не нужно экранировать никогда.
// Тире - не надо экранировать в начале или в конце (где оно не задаёт диапазон).
// Символ каретки ^ нужно экранировать только в начале (где он означает исключение).
// Закрывающую квадратную скобку ], если нужен именно такой символ, экранировать нужно.
// Другими словами, разрешены без экранирования все специальные символы, кроме случаев, когда они означают что-то особое в наборах.

// Точка . внутри квадратных скобок – просто точка. Шаблон [.,] будет искать один из символов: точку или запятую.



// В приведённом ниже примере регулярное выражение [-().^+] ищет один из символов
//      -().^+:

// Нет необходимости в экранировании
let regexp = /[-().^+]/g;

alert( "1 + 2 - 3".match(regexp) ); // Совпадения +, -
//------------------------
const toCamelCase = (e) => {
    return e.replace(/_([a-z])/g, (findedStr) =>  findedStr[1].toUpperCase());
  };
console.log(toCamelCase('not_mai_class_sas_ext_hello'));
  // notMaiClassSasExtHello
//------new version----
//regexp = new RegExp("шаблон", "флаги");
//regexp = new RegExp("-", "g");
const regexp2 = new RegExp("_([a-z])", "g")

const toCamelCase = (e) => {
    return e.replace(regexp2, (findedStr) =>  findedStr[1].toUpperCase());
  };
console.log(toCamelCase('not_mai_class_sas_ext_hello'));
  // notMaiClassSasExtHello

