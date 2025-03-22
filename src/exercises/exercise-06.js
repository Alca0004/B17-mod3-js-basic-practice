/* 
EJERCICIO 6:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado.

Ejemplos:
"The phrase 'Rats live on no evil star' is palindrome"
"The phrase 'Hello world' is NOT palindrome"

Nota: los signos de puntuación, mayúsculas y espacios deben ser ignorados (no incluyas los acentos). 
*/
export function exercise06(string) {
  /// Normalizing the string by removing all non alphanumeric characters and coverting it to lowercase
  let normalize = string.replace(/[^a-z0-9]/gi, "").toLowerCase();
  // Flipping the string
  let reverseStr = normalize.split("").reverse().join("");
  /// checks if the string is palindrome otherwise it would be false
  return normalize === reverseStr;
}
///
