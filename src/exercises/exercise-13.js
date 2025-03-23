/* 
EJERCICIO 13:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con el título y la descripción 
de las mejores peliculas ordenadas de mejor a peor, siendo las mejores aquellas cuya 
valoración es superior a la valoración media de todas las películas
*/
export function exercise13(movies) {
  //find average rating
  const totalRatings = movies.reduce((sum, movie) => sum + movie.rating, 0);
  const averageRating = totalRatings / movies.length;
  //filter movies with rating above the average
  const bestMovies = movies.filter((movie) => movie.rating > averageRating);
  // sort the best movie from highest to lowest
  bestMovies.sort((a, b) => b.rating - a.rating);

  // return the array with only title and description
  return bestMovies.map((movie) => ({
    title: movie.title,
    description: movie.description,
  }));
}
