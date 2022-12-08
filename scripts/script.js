"use strict";
const nunberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDb = {
  count: nunberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const a = prompt("Какой последний фильм вы посмотрели?", "");
const b = +prompt("На сколько оценили его?", "");
personalMovieDb.movies[a] = b;
console.log(personalMovieDb);
