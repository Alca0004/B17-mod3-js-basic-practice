/* 
EJERCICIO 19:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje.

Ejemplos:
"the string 'Code deco' is an isogram"
"the string 'hello world' is not an isogram"
*/
export function exercise19(string) {
  // normalize string by removing spaces and making everything lowercase
  const normalizedString = string.replace(/\s+/g, "").toLowerCase();

  // count ocurrences in each letter
  const countLetters = lettersOccurrences(normalizedString);

  // checking if all counts are equal
  const values = Object.values(countLetters);
  const isIsogram = values.every((val) => val === values[0]);

  return `the string '${string}' is ${isIsogram ? "" : "not "}an isogram`;
}
// counting occurences of each letter
function lettersOccurrences(string) {
  const count = {};
  for (let char of string) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}
