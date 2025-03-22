/* 
EJERCICIO 10:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar funciones auxiliares de ejercicios anteriores si las declaraste en el archivo utils.js).
*/
export function exercise10(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  /// converting string to lowercase and remove non letter characters
  let cleanString = string.toLowerCase().replace(/[^a-z]/g, "");
  /// looking for the position in the alphabet
  let positions = cleanString.split("").map((letter) => alphabet.indexOf(letter) + 1);

  return positions;
}
