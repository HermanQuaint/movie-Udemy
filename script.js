'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let mov1 = prompt('Один из последних просмотренных фильмов?', ''),
    grade1 = +prompt('На сколько оцените его?', ''),
    mov2 = prompt('Один из последних просмотренных фильмов?', ''),
    grade2 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[mov1] = grade1;
personalMovieDB.movies[mov2] = grade2;

console.log(personalMovieDB);