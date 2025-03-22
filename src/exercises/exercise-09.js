/* 
EJERCICIO 9:
Genera un array de un determinado tamaño con números aleatorios entre dos valores
y calcula el menor y el mayor de estos números.

Ejemplo: 
  exercise09(5, 0, 100) 
  devuelve "The minimum number is 0 and the maximum number is 100 in [0,50,99,49,100]"
*/
export function exercise09(length, start, end) {
  // declare an empty array
  let arrayOfRandomNumbers = [];
  // loop runs the length of times but every time it runs it creates a random number
  for (let i = 0; i < length; i++) {
    //declare randomNumber making it create a random number and expands the range between start and end
    let randomNumber = Math.floor(Math.random() * (end - start + 1) + start);
    // and everytime it run it adds a random number to my list with push
    arrayOfRandomNumbers.push(randomNumber);
  }
  // console.log(arrayOfRandomNumbers);
  // im looking for to smallest and largest number on the list & using spread operator to spread into seperate numbers
  let min = Math.min(...arrayOfRandomNumbers);
  let max = Math.max(...arrayOfRandomNumbers);

  return `The minimum number is ${min} and the maximum number is ${max} in ${arrayOfRandomNumbers}`;
}
