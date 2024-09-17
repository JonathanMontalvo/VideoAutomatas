/**********ASOCIACIÓN DE TIPOS DE DATOS EN OPERACIONES ARITMÉTICAS (NO ASOCIACIÓN)**********/
// Se intenta realizar una operación aritmética con tipos incompatibles, como sumar un número y una cadena.

const a = 10;
let b = 'Hello';
let suma = a + b; // Resultado inesperado: "10Hello" se concatena, pero no marca error
console.log(suma);

/**
 * JavaScript al ser un lenguaje de tipado débil podemos operar aritméticamente con variables de distintos
 * tipos, como se vio con antelación. Pero podemos cambiar el tipo de la variable sobre la marcha
 */
b = 30;
suma = a + b;
console.log(suma);
