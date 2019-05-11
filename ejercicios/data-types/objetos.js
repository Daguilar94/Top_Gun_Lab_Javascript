// OBJETOS
// 1. crea un objeto que contenga las llaves (nombre) y (apellido).
// y valores 'Brandon' y 'Eich' respectivamente y asígnalo a una variable llamada (fundador).

var fundador = {
    nombre: "Brandon",
    apellido: "Eich"
};

// 2. agrega una llave adicional al objeto fundador llamada (info) cuyo valor sea la variable (information).
var information = ['Netscape', 'Livescript', 'ECMA'];
fundador.info = information;


// 3. Encuentra la tercera posición del arreglo contenido en la llave (info) del objeto (fundador).
// imprímelo en consola.

console.log(fundador.info[2]);

// 4. Modifica el valor de la llave (nombre) del objeto cambiando "Brandon" por "Brendan".
// Imprime el objeto final en consola

fundador.nombre = "Brendan";
console.log(fundador);

// ***** Para correr este archivo en la consola de node ejecuta el siguiente comando:
// ***** node ./ejercicios/data-types/objetos.js