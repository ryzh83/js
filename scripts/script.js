"use strict";
const nunberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDb = {
  count: nunberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
if (personalMovieDb.count < 10) {
  alert("мало фильмов");
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
  alert("хороший зритель");
} else if (personalMovieDb.count >= 30) {
  alert("много фильмов");
} else {
  alert("error");
}
// const a = prompt("Какой последний фильм вы посмотрели?", "");
// b = +prompt("На сколько оценили его?", "");
// personalMovieDb.movies[a] = b;
// console.log(personalMovieDb);

for (let i = 0; i < 2; i++) {
  const a = prompt("Какой последний фильм вы посмотрели?", ""),
    b = +prompt("На сколько оценили его?", "");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDb.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}
console.log(personalMovieDb);
