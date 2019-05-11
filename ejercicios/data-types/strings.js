// STRINGS

// 1. Encuentra la longitud de la siguiente variable e imprímelo en consola:
var texto = "Espero que el refrigerio esté rico esta vez";

console.log(texto.length);

// 2. concatena las variables nombre y apellido separadas por un espacion en blanco 
// y asígna este nuevo valor a una variable llamada nombreCompleto.
// Imprime la variable nombreCompleto en consola.

var nombre = "Brendan";
var apellido= "Eich";

var nombreCompleto = nombre + " " + apellido;
 // o también con ES6
var nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

// 3. repetir el caracter 'x' 50 veces y asignar este valor a una variable llamada repetido
// imprime la variable repetido en consola.

var repetido = "x".repeat(50);
console.log(repetido);

// ***** Para correr este archivo en la consola de node ejecuta el siguiente comando:
// ***** node ./ejercicios/data-types/strings.js