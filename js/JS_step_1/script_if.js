"use strict";
if  (false) {
    console.log("Все хорощо!");
} else  {
    console.log("Error!");
}
//  Тернарный оператор
// --------- - - 
// условие ? выражение1 : выражение2 
// - - - - -
// чтобы вывести сообщение, текст которого зависит от значения переменной isMember, можно использовать такое выражение:

/* "The fee is " + (isMember ? "$2.00" : "$10.00") */
// Это последний теоретический раздел данной статьи и мы перейдем 
// к практическим упражнениям. Тернарный или условный оператор имеет простой синтаксис: он проверяет условие и возвращает одно значение или выражение, если условие является true, и другое значение/выражение, если условие является false. Часто это очень удобная альтернатива блоку if...else, позволяющая затрачивать меньшие усилия на написание кода, когда имеется всего лишь два варианта, выбираемых на основе условия true/false. Общая схема оператора:

// ( условие) ? выполнить этот код : выполнить этот код вместо первого
// Приведем простой пример:

/* var greeting = ( isBirthday ) ? 'С днем рождения, г-н Кузнецов! Хорошо Вам повеселиться!' : 'Доброе утро, г-н Кузнецов.'; */
// У нас есть переменная isBirthday , если она true, мы отправляем посетителю поздравление с днем рождения; если нет – выдаем стандартное приветствие.
/* Также можно присваивать значения переменным на основе результатов работы тернарного оператора : */

var elvisLives = Math.PI > 4 ? "Да" : "Нет";
console.log(elvisLives);
//
isMember = false;
console.log("The fee is " + (isMember ? "$2.00" : "$10.00"));
//
var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Доступ запрещен" : secondCheck ? "Доступ запрещен" : "Доступ разрешен";
  
console.log( access ); // выводит в консоль "Доступ разрешен"
//
/* 
Конструкция "switch"
Конструкция switch заменяет собой сразу несколько if.

Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.

Синтаксис
Конструкция switch имеет один или более блок case и необязательный блок default.

Выглядит она так:

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
Переменная x проверяется на строгое равенство первому значению value1, затем второму value2 и так далее.
Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, до ближайшего break (или до конца switch).
Если ни один case не совпал – выполняется (если есть) вариант default. */
//
/* Пример работы
Пример использования switch (сработавший код выделен): */
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}
//
/* Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются.
Пример без break:
 */
let a = 2 + 2;
/*  */
switch (a) {
  case 3:
    alert( 'Маловато' );
  case 4:
    alert( 'В точку!' );
  case 5:
    alert( 'Перебор' );
  default:
    alert( "Нет таких значений" );
}
/* В примере выше последовательно выполнятся три alert:
 */
alert( 'В точку!' );
alert( 'Перебор' );
alert( "Нет таких значений" );
//
/* Тип имеет значение
Нужно отметить, что проверка на равенство всегда строгая. Значения должны быть одного типа, чтобы выполнялось равенство.

Для примера, давайте рассмотрим следующий код:
 */
let arg = prompt("Введите число?");
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' ); //«мёртвый код» в case 3!
    break;
  default:
    alert( 'Неизвестное значение' );
}
/* Для '0' и '1' выполнится первый alert.
Для '2' – второй alert.
Но для 3, результат выполнения prompt будет строка "3", которая не соответствует строгому равенству === с числом 3. Таким образом, мы имеем «мёртвый код» в case 3! Выполнится вариант default. */