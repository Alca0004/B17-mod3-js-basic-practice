/* 
EJERCICIO 14:
Escribe una función que pasándole "movies" y "categories" del archivo data.js
como parámetros filtra las películas que pertenezcan a la categoria "Drama" 
e incluye solo el título y la descripción.
*/
export function exercise14(movies, categories) {
  // Filter movies that belong to Drama
  const dramaMovies = movies.filter((movie) => movie.category === categories.drama);

  //Create a new array with title and description
  const filteredMovies = dramaMovies.map((movie) => ({
    title: movie.title,
    description: movie.description,
  }));

  //Return the filtered movies
  return filteredMovies;
}
