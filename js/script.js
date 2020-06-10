// Сколько фильмов вы уже посмотрели
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private : false
};
 
const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', ''); 

    // записываем ответы 
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
// почемуто через точку не работает  :-(
/* personalMovieDB.movies.a = b;
personalMovieDB.movies.c = d; */


console.log(personalMovieDB);



