import { pi, exp, alpha } from './iExport'; // синтаксис именованного импорта схож с синтаксисом деструктурирования
console.log(pi) // 3.14
console.log(exp) // 2.7
console.log(alpha) // 2.7

import * as constants from './mathConstants.js'; // подставляем экспортированные значения в переменную constants
console.log(constants.pi) // 3.14
console.log(constants.exp) // 2.7

import { foo as bar } from 'myFile.js'; 
// импортируем foo с новым именем переменной bar

import number from './coolNumber.js';
// экспорт по умолчанию, независимо от названия, подставляется как значение переменной number
console.log(number) // 42


import sum from './sum.js';
const result = sum(1, 2);
console.log(result) // 3