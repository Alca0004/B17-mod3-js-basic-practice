/* 
EJERCICIO 17:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "This is a hashtag" se transforma en "#ThisIsAHashtag"
*/
export function exercise17(string) {
  // cut spaces from the string
  const trimmedString = string.trim();
  // splitting strings into words
  const words = trimmedString.split(" ");
  // capitalize the letter of each word
  const hashtag = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  /// join all the words
  const finalHashtag = hashtag.join("");
  //return the final hashtag
  return `#${finalHashtag}`;
}
