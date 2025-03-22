/* 
EJERCICIO 11:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con las peliculas ordenadas 
por valoracion (propiedad "rating") de mayor a menor  
*/
export function exercise11(movies) {
  // using sort method to sort rations from highest to lowest using a and b as comparisons
  let sortedMovies = movies.sort((a, b) => b.rating - a.rating);
  // returning sorted movies
  return sortedMovies;
}
