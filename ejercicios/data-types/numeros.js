// NUMEROS
// 1. Enuentra la suma de numOne y numTwo y asigna este valor a una variable llamada suma
var numOne = 6;
var numTwo = 10

const suma = numOne + numTwo;

// 2. Utilizando la variable suma, creada en el ejercicio anterior, encuentra el valor resultante de dividir (suma) entre la variable (divisor) y asígnalo a una variable llamada cociente.
var divisor = 4;

var cociente = suma / divisor;


// 3. Utiliza la variable (cociente) y encuentra el resultado de elevar este valor al valor de la variable (exponente) y asignalo a una variable llamada (potencia).
var exponente = 3;

var potencia = Math.pow(cociente, exponente);


// 4. Encuentra el valor de la raíz cuadrada de la variable (potencia) y asígnala
// a una variable llamada (raiz).
// imprime en consola la variable (raiz).

var raiz = Math.sqrt(potencia);
console.log(raiz);


// ***** Para correr este archivo en la consola de node ejecuta el siguiente comando:
// ***** node ./ejercicios/data-types/numeros.js