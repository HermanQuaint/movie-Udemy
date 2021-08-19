'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (personalMovieDB.count < 10 ) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30 ) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

for (let i = 1; i < 2 ; i++) {
  let mov = prompt('Один из последних просмотренных фильмов?', ''),
      grade = +prompt('На сколько оцените его?', '');

    if (mov != null &&  grade != null && mov != '' && grade != '' && mov.length < 50) {
      personalMovieDB.movies[mov] = grade;
      console.log('Done');
    } else {
      console.log('Error');
      i--;
    }
}

console.log(personalMovieDB);