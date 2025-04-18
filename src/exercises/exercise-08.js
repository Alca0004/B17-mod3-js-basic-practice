/* 
EJERCICIO 8:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
Nota: los siglos comienzan el 1 de enero de un año terminado en 1 y finalizan el 31 de diciembre de un año terminado en 0. 
*/
export function exercise08(year) {
  // declare century the use ceil to round the year divided by 100
  let century = Math.ceil(year / 100);
  return `The year ${year} belongs to the ${century}st century`;
}
