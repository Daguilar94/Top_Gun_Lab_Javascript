// -----------------------------
// 1. Crea y exporta una función llamada "getPassengersInfo" que reciba un número entero (x), 
// debe preguntar al usuario por el nombre y edad de la persona a inscribir (x) veces
// (usando window.prompt()).
// Como si estuviera preguntando por la información de varias personas, es decir,
// Se pregunta por el primer nombre, luego por la edad de esa primera persona.
// Una vez la primera persona ingrese la información, se procede a preguntar el nombre
// y la edad de la segunda y así (x) veces.
// se debe construir un arreglo de objetos con la información recogida. Cada objeto corresponde
// a la información de una persona, de modo que el objeto retornado por la función
// debe tener la siguiente estuctura:

[
    { name: '...', age: 5 }, 
    { name: '...', age: 23 },
    { name: '...', age: 2 }
]
// Observa que las edades son números, no strings, usa parseInt() para hacer la conversión.

// PISTA: para exportar una función lo puedes hacer de las siguientes maneras:
// 1. export function miFuncion() {...}
// O si usas arrow functions, así:
// 2. export const miFuncion = () => {...}

export const getPassengersInfo = (passengersAmount) => {
    let passengers = [];
    for(let i = 0; i < passengersAmount; i++) {
        const name = prompt('Ingresa tu nombre');
        let age = prompt('Ingresa tu edad');
        age = parseInt(age, 10);
        passengers.push({ name, age });
    }
    return passengers;
};

// -----------------------------
// 2.  Crea y exporta una función llamada "getAverageAge" que reciba un arreglo de objetos
// con la siguiente estructura:

[
    { name: '...', age: 5 },
    { name: '...', age: 23 },
    { name: '...', age: 2 }
]

// Y que retorne el valor promedio de los valores de la llave age en los objetos.

export function getAverageAge(passengers) {
    const sum = passengers.reduce((acc, passenger) => acc += passenger.age, 0);
    const passengersAmount = passengers.length;
    return sum / passengersAmount;
};

// -----------------------------
// 3. Crea y exporta una función llamada "getTotalProfit" que reciba un arreglo de objetos
// con la siguiente estructura:

[
    { name: '...', age: 5 },
    { name: '...', age: 23 },
    { name: '...', age: 2 }
]

// Y de acuerdo con la siguiente tabla de precios según edad, retorne la suma total del
// dinero entregado por cada una de las personas.

// Personas de 13 años o menores                        3000 dólares
// Personas de 13 hasta 30 años (incluyendo el 30)      5000 dólares
// Personas mayores de 30 años                          4000 dólares


export function getTotalProfit(passengers) {
    let amounts = passengers.map(passenger => {
        const age = passenger.age;
        switch(true) {
            case (age <= 13):
                return 3000;
            case (age > 13 && age <= 30):
                return 5000
            case (age > 30):
                return 4000
            default:
                return 0;
        }
    });
    const sum = amounts.reduce((acc, amount) => acc += amount, 0);
    return sum
};

//------------------------------
