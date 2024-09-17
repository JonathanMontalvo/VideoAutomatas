/*****************************DUPLICIDAD DE NOMBRES EN VARIABLE*****************************/
//Vamos a declarar dos variables con el mismo nombre para comprobar que pasa

let miVariable = 13;
let miVariable = 14; //Uncaught SyntaxError: Identifier 'miVariable' has already been declared
console.log(miVariable);

function miFuncion() {
  console.log('Primera declaración de miFunción');
}

function miFuncion() {
  console.log('Segunda declaración de miFunción');
}

/**
 * En JavaScript la segunda declaración de una función con el mismo nombre sobrescribe la primera.
 * Por lo tanto,  la duplicidad de nombres en funciones: la última declaración prevalece.
 */
miFuncion(); // Salida: "Segunda declaración de miFuncion"
