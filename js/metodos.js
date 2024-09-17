/*************************************MÉTODOS/FUNCIONES*************************************/
//Llamamos una función con un número incorrecto de argumentos.

function sum(a, b) {
  return a + b;
}

let resultado = sum(5); // Error: faltan parámetros
console.log(resultado); // NaN (Not a Number)
/**la función sum espera dos parámetros, pero solo se proporciona uno.
 * Como resultado, el segundo parámetro es undefined, lo que provoca un
 * comportamiento inesperado (retorna NaN)
 */

resultado = sum(5, 10); // Correcto
console.log(resultado); // 15
// Otra posible solución es asignar valores por defecto a los parámetros de la función
/*
function sum(a = 0, b = 0) {
  return a + b;
}

resultado = sum(5); // Error: faltan parámetros
console.log(resultado); // NaN (Not a Number)
*/
