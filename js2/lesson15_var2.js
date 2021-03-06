/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private : false
};
 
let i= 0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          switch(true) {
            case (a != null && b != null && a != "" && b != "" && a.length < 50):  // if (x === 'value1')
                personalMovieDB.movies[a] = b;
                console.log("Ok");
                break;
            default:
                console.log("Awfull");
                i--;
          };
          i++;   
} //  без ";""
while (i< 2) ;

switch (true) {
    case (personalMovieDB.count < 10): 
        console.log("Просмотрено довольно мало фильмов");
        break;
    case ( personalMovieDB.count >= 10 && personalMovieDB.count < 30):
        console.log("Вы классический зритель");
        break;
    case (personalMovieDB.count >= 30):
        console.log("Вы киноман");
        break;
    default:
        console.log("Произошла ошибка");
}
    
console.log(personalMovieDB);


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




