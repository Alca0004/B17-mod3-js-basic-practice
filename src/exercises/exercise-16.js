/* 
EJERCICIO 16:
Escribe una función que devuelva un array que solo incluya el titulo de la pelicula mejor valorada de cada uno de estos actores: 
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks

Nota: asegurate que no hay titulos duplicados
*/
export function exercise16(movies) {
  const actors = ["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"];

  // Utilize set to store unique movie titles

  const titles = new Set();
  /// iterates and filters each movie by actor
  actors.forEach((actor) => {
    const actorMovies = movies.filter((movie) => movie.actors.includes(actor));
    // find the highest rated movie
    if (actorMovies.length > 0) {
      const bestMovie = actorMovies.reduce((best, current) => (current.rating > best.rating ? current : best));
      // extract the title making sure theres not dupes & converting set into an array and getting it back
      titles.add(bestMovie.title);
    }
  });
  // returning the titles
  return Array.from(titles);
}
