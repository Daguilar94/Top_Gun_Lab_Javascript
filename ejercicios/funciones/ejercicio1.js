// 1. Crea una funcion que reciba un número como argumento y lo eleve al cuadrado.

const toPowerTwo = num => Math.pow(num, 2);

// crea una función que reciba un número (n) y una función
// similar a la creada en el punto anterior (f) como argumentos y
// retorne el resultado de la ejecución de la función (f) con el número (n) pasado como argumento.

const applyCallback = (num, callBack) => callBack(num);

// ***** Para correr este archivo en la consola de node ejecuta el siguiente comando:
// ***** node ./ejercicios/funciones/ejercicio1.js