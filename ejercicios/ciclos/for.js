// Realiza el siguiente ejercicio usando (for).

// 1. Se da un arreglo con las edades de las personas que van a asistir a un concierto y se necesita
// encontrar la edad promedio de los asistentes.
// Utiliza el ciclo for para encontrar el valor promedio de los enteros
// contenidos en el siguiente arreglo:

var natural = [1, 50, 34, 289, 32, 65, 76, 89, 32, 5, 12];

const sum = natural.reduce((accum, val) => accum + val);
const average = sum / natural.length;

// ***** Para correr este archivo en la consola de node ejecuta el siguiente comando:
// ***** node ./ejercicios/ciclos/for.js