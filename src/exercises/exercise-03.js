/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>” 
Nota: vowels = "aeiou" (no incluyas acentos)
*/
export function exercise03(string) {
  const vowels = "aeiou";
  // declare initializer
  let result = 0;
  // loop the string
  for (let i = 0; i < string.length; i++) {
    /// find and count vowels within the string
    if (vowels.includes(string[i])) {
      result++;
    }
  }
  return `Number of vowels in '${string}' is ${result}`;
}
