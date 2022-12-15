"use strict";

// const { builtinModules } = require("module");

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
  writeYourGENRES: function () {
    for (let i = 1; i <= 3; i++) {
      let genres = prompt(`Ваш любимый жанр ${i}`);
      if (genres == null || genres == "") {
        i--;
      } else {
        personalMovieDb.genres[i - 1] = genres;
      }
    }
    personalMovieDb.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  toggleVizibleMyDB: function () {
    if (personalMovieDb.privat) {
      personalMovieDb.privat = false;
    } else {
      personalMovieDb.privat = true;
    }
  },
};

personalMovieDb.toggleVizibleMyDB();
console.log(personalMovieDb.privat);

personalMovieDb.writeYourGENRES();

let c;
let d;
let e;
function writeYourGenre() {
  c = prompt("Ваш любимый жанр 1", "");
  d = prompt("Ваш любимый жанр 2", "");
  e = prompt("Ваш любимый жанр 3", "");
  personalMovieDb.genres[0] = c;
  personalMovieDb.genres[1] = d;
  personalMovieDb.genres[2] = e;
  console.log(personalMovieDb.genres);
}
// writeYourGenre();

// function writeYourGENRES() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);
//   }
// }
// writeYourGENRES();

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
// showMyDB(personalMovieDb.privat);

// console.log(personalMovieDb);

// const options = {
//   with: 180,
//   name: 'era',
//   color: {
//     border: 'red',
//     padding: "blue"
//   }
// };

// console.log(Object.keys(options.with).length);

// const anr = {
//    a: 1,
//    b: 2,
//    c: {
//     d: 3,
//     e: 4
//    },
// };

// const bnr = {...anr};

// bnr.a = 10;

// console.log(anr);
// console.log(bnr);
