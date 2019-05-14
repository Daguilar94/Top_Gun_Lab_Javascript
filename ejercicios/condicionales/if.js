// Realiza el siguiente ejercicio usando (if).

// utilizandola consola del navegador genera pregunta al usuario por su edad y de acuerdo con el 
// número ingresado imprime en la consola que el usuario "es un niño" si tiene 13 años o menos,
// "es adolescente" si tiene entre 13 y 18 (incluyendolo) y "es adulto" si tiene más de 18.

// PISTAS: 🎊
// 1. Accede al valor del usuario usando el método window.prompt() en el navegador
// 2. Ten en cuenta que el valor ingresado en el prompt se recibe como string. 🤔

// Escribe el código debajo de esta linea y pégalo en la consola del navegador para probarlo.

let age = prompt("ingresa tu edad");
age = parseInt(age);

if (age <= 13) {
    console.log("es un niño");
} else if (13 < age && age <= 18) {
    console.log("es una adolescente");
} else {
    console.log("es adulto");
}