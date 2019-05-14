// Se tiene la información de las edades de los pasajeros de un avión en un arreglo.
// El número de la silla de cada tripulante corresponde al indice que posición en el arreglo.
// Se sabe que en la tripulación existe una persona de la tercera edad ( mayor a 65 años )
// pero no se sabe en cual silla está sentada.

// Encuentra el número de la silla de la persona de la tercera edad.

var edadPasajeros = [12, 34, 55, 11, 5, 64, 22, 10, 54, 28, 52, 27, 29, 83, 14, 35, 21, 5, 8, 32, 51];

const numSilla = edadPasajeros.findIndex(pasajero => pasajero > 65);

//---------------------------------------------------------------------------------------
// De estos pasajeros también se tiene la información de su género

// Se desean obtener 3 listas a partir de este arreglo:

// 1. Una lista para las personas de género femenino (F)
// 2. Una lista para las personas de género masculino (M)
// 3. Una lista para las personas de otro género (O)

var infoPasajeros = [ "F", "F", "M", "F", "M", "O", "F", "O", "M", "O", "F", "M", "F", "F", "F", "M", "F", "M", "F", "F", "M", "O", "O", "M", "O", "M", "M", "F", "O", "F", "F", "O", "F", "O", "F", "O", "O", "F", "O", "F", "M", "O", "M", "M", "F", "F", "F", "F", "F" ];

const femenino = infoPasajeros.filter(pasajero => pasajero === "F");
const masculino = infoPasajeros.filter(pasajero => pasajero === "M");
const otro = infoPasajeros.filter(pasajero => pasajero === "O");


//---------------------------------------------------------------------------------------
// Finalmente se tiene la información del dinero pagado por cada uno de ellos
// para el tiquete del vuelo (en pesos).
// Se desea obtener una lista con los valores pagados en dolares (1 dolar = 3000 pesos).

var valorTiquetes = [ 61349, 53324, 90174, 77520, 96005, 52580, 91493, 66581, 68996, 93337, 76044, 93736, 85139, 89210, 53343, 68912, 53170, 51065, 66017, 83672, 79044, 78694, 79464, 94234, 84501, 89256, 85583, 59145, 97383, 67540, 67751, 60060, 90530, 79268, 77188, 88743, 82096, 64028, 75455, 58223, 89661, 52199, 90117, 74046, 55924, 95065, 55851, 72848 ];

const arregloDolares = valorTiquetes.map(val => val / 3000);

// Además se desea conocer el valor total adquirido en dólares mediante la suma de estos.

const suma = arregloDolares.reduce((acc, val) => acc + val);

// ***** Para correr este archivo en la consola de node ejecuta el siguiente comando:
// ***** node ./ejercicios/programacion-funcional/ejercicio.js