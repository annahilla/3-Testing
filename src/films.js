
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = Array.from(new Set(array.map(movie => movie.director)));

  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);

  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let amountMoviesByDirector = (array.filter(movie => movie.director === director));
  let totalScores = amountMoviesByDirector.reduce((total, movie) => total + movie.score, 0);
  let result = Number((totalScores / amountMoviesByDirector.length).toFixed(2));

  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const movieTitles = array.map(movie => movie.title);
  let sortedMovies = movieTitles.sort();
  let result = sortedMovies.slice(0, 20)

  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sortedMovies = array.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  let result = Array.from(sortedMovies);

  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let moviesByCategory = array.filter(movie => movie.genre.includes(category));

  let totalScores = moviesByCategory.reduce((total, movie) => total + movie.score, 0);
  let result = Number((totalScores / moviesByCategory.length).toFixed(2));

  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map(movie => {
    let minutes = 0;
    let hours = 0;

    if (movie.duration.includes("h") && movie.duration.includes("min")) {
      const movieDurationSplitted = movie.duration.split(" ");
      hours = Number(movieDurationSplitted[0].split("h")[0]);
      minutes = Number(movieDurationSplitted[1].split("min")[0]);
    } else if (movie.duration.includes("h")) {
      hours = Number(movie.duration.split("h")[0]);
    } else if (movie.duration.includes("min")) {
      minutes = Number(movie.duration.split("min")[0]);
    }

    return {
      ...movie,
      duration: Number(hours * 60 + minutes)
    };
  });

  console.log("EXERCICE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  let moviesByYear = array.filter(movie => movie.year === year);
  let sortedMoviesByYear = moviesByYear.sort((a, b) => b.score - a.score);
  let result = [sortedMoviesByYear[0]];

  console.log("EXERCICE 8 ->", result);
  return result;
}

if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
