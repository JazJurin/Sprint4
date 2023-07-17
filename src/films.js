// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((movies) => movies.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result2 = array.filter(
    (movies) => movies.director === director && movies.title
  );
  console.log('EXERCICE 2 ->', result2);
  return result2;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const fiteredArray = array.filter((movies) => movies.director === director);
  const result3 = fiteredArray.reduce(
    (accumulator, director) => accumulator + director.score,
    0
  );
  const averageScore = result3 / fiteredArray.length;
  console.log('EXERCICE 3 ->', averageScore);
  return Number(averageScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let orderMovies = array.map((movies) => movies.title);
  orderMovies = orderMovies.sort();
  const result4 = orderMovies.slice(0, 20);
  console.log('EXERCISE 4 ->', result4);
  return result4;
}

// Exercise 5: Order by year, ascending
function orderByYear() {
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
