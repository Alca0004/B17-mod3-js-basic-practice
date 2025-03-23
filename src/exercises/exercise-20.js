/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Crea 2 funcines que dado un número entero devuelva el Fibonacci de ese número como parámetro. 
La primera función debe ser recursiva y la segunda iterativa.

Ejemplo: Fibonacci(20) = 6765

Nota: evita llamar a la función con números altos en la versión recursiva.
*/

export function exercise20(n) {
  // Base case: Fib(0) is 0
  if (n === 0) return 0;
  // Base case: Fib(1) is 1
  if (n === 1) return 1;

  return exercise20(n - 1) + exercise20(n - 2);
}

export function exercise20Iterative(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  // Starting Fib(0)
  let prev = 0;
  // Starting Fib(1)
  let current = 1;

  // This loop finds the next numbers until Fib(n)
  for (let i = 2; i <= n; i++) {
    // Adds the previous two numbers
    const next = prev + current;
    // Move to the next number
    prev = current;
    // Move to the next number
    current = next;
  }
  return current;
}
