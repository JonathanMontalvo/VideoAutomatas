/***************VERIFICACIÓN DE LA DECLARACIÓN DE VARIABLES (NO DECLARACIÓN)***************/
console.log(noVariable); //Uncaught ReferenceError: noVariable is not defined

//Correción
const noVariable = 'Hello World';
console.log(noVariable);
