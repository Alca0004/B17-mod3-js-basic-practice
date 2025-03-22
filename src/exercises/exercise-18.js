/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite en el string cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}

Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/
export function exercise18(string) {
  // start initialization counter
  const letterCount = {};
  /// covert string to lowercase
  string.toLowerCase();
  ///iterate through the the string and find
  for (let i = 0; i < string.length; i++) {
    // take out current char in the string
    let char = string[i];
    // checks if current char exists it increments
    if (letterCount[char]) {
      letterCount[char]++;
      // otherwise we add it in the count
    } else {
      letterCount[char] = 1;
    }
  }
  return letterCount;
}
