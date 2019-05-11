// ARREGLOS
// 1. Encuentra la longitud del siguiente arreglo
// imprímelo en consola:
var primerArreglo = [1, 10, 15, "Hola", [1, 2]];

console.log(primerArreglo.length);


// 2. Encuentra el elemento situado en la segunda posición del arreglo (primerArreglo).
// imprímelo en consola.

console.log(primerArreglo[1]);

// 3. Elimina la última posición del arreglo (primerArreglo) y asígnalo a una variable llamada (subArray).

const subArray = primerArreglo.pop();

// 4. Agrega el valor de (subArray) a la primera posición del arreglo
// (primerArreglo), que ya está modificado (mutado), sin eliminar el valor contenido
// que está en la primera posición actual.
// imprime en consola el arreglo resultante (primerArreglo).

primerArreglo.unshift(subArray);
console.log(primerArreglo);

// 5. Por último, elimina el valor 15 del arreglo
// imprime el arreglo final en consola.

primerArreglo.splice(3, 1);
console.log(primerArreglo);


// ***** Para correr este archivo en la consola de node ejecuta el siguiente comando:
// ***** node ./ejercicios/data-types/arreglos.js