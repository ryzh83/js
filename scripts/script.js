"use strict";

let nunberOfFilms;

function start() {
  nunberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (nunberOfFilms == "" || nunberOfFilms == null || isNaN(nunberOfFilms)) {
    nunberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

// start();

const personalMovieDb = {
  count: nunberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};
// let c;
// let d;
// let e;
// function writeYourGenre() {
//   c = prompt("Ваш любимый жанр 1", "");
//   d = prompt("Ваш любимый жанр 2", "");
//   e = prompt("Ваш любимый жанр 3", "");
//   personalMovieDb.genres[0] = c;
//   personalMovieDb.genres[1] = d;
//   personalMovieDb.genres[2] = e;
//   console.log(personalMovieDb.genres);
// }
// writeYourGenre();

function writeYourGENRES() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);
  }
}
writeYourGENRES();

// let c = 12;

// const d = `dr ${c}`;
// console.log(d);

function maniFilms() {
  if (personalMovieDb.count < 10) {
    alert("мало фильмов");
  } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    alert("хороший зритель");
  } else if (personalMovieDb.count >= 30) {
    alert("много фильмов");
  } else {
    alert("error");
  }
}

// maniFilms();

// const a = prompt("Какой последний фильм вы посмотрели?", "");
// b = +prompt("На сколько оценили его?", "");
// personalMovieDb.movies[a] = b;
// console.log(personalMovieDb);

function rememberMyFilms() {
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
}

// rememberMyFilms();

function showMyDB(argument) {
  if (!argument) {
    console.log(5);
  }
}
showMyDB(personalMovieDb.privat);

console.log(personalMovieDb);
