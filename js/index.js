(function() {
    "use strict"
    let passengers = [
        { name: 'Luna Sky', age: 4 },
        { name: 'Sebastian Escobar', age: 24 },
        { name: 'Mateo Gómez', age: 13 },
        { name: 'Andrea Hurtado', age: 44 },
        { name: 'Santiago Arcila', age: 14 },
        { name: 'Johnatan Ruiz', age: 34 },
        { name: 'Manuela Restrepo', age: 37 },
        { name: 'Camilo Alzate', age: 74 },
        { name: 'Juan Hincapié', age: 12 },
        { name: 'Sara Castaño', age: 11 },
        { name: 'William Serna', age: 34 },
        { name: 'Juana García', age: 30 }
    ];
    let averageAge = 0;
    let totalProfit = 0;
    let showedPassengers = [...passengers];
    
    const passengerGallery = document.querySelector('.passengers__gallery');
    const totalProfitElement = document.querySelector('.total-profit');
    const averageAgeElement = document.querySelector('.average-age');
    const passengersAmount = document.getElementById('passengers-amount');
    const registerButton = document.getElementById('register-button');
    const filterPassengersInput = document.getElementById('filter-passengers');

    registerButton.addEventListener('click', registerPassengers);
    filterPassengersInput.addEventListener('input', filterPassengers);

    function registerPassengers(e) {
        e.preventDefault();
        const numberOfPassengers = passengersAmount.value;
        const passengersInfo = getPassengersInfo(numberOfPassengers);
        passengers = passengers.concat(passengersInfo);
        showedPassengers = [...passengers];
        filterPassengersInput.value = "";
        passengersAmount.value = "";
        updatePassengers();
    }

    function filterPassengers(e) {
        const value = e.target.value.toLowerCase();
        showedPassengers = passengers.filter((passenger) => {
            const name = passenger.name.toLowerCase();
            return name.includes(value);
        });
        updatePassengers();
    }
    
    const createPassengerNode = (name) => {
        const figure = document.createElement('FIGURE');
        const img = document.createElement('IMG');
        const caption = document.createElement('FIGCAPTION');
    
        figure.classList.add('passengers__card');
        caption.classList.add('passengers__caption');
        img.classList.add('passengers__img');
    
        img.setAttribute('src', "./assets/images/woman_avatar.jpg");
        img.setAttribute("alt", "avatar");
    
        caption.textContent = name;
        figure.appendChild(img);
        figure.appendChild(caption);
        return figure;
    }

    const updatePassengers = () => {
        const passengerNodes = showedPassengers.map(passenger => createPassengerNode(passenger.name));
        passengerGallery.innerHTML = "";
        passengerNodes.forEach(node => {
            passengerGallery.appendChild(node);
        })
        updateAverageAge();
        updateTotalProfit();
    }

    const updateAverageAge = () => {
        averageAge = getAverageAge(passengers);
        const averageAgeValue = averageAge ? averageAge.toFixed(1) : 0;
        averageAgeElement.textContent = `${averageAgeValue} años`;
    }

    const updateTotalProfit = () => {
        totalProfit = getTotalProfit(passengers);
        let totalProfitValue = totalProfit
            ? totalProfit
            : 0;
        totalProfitValue = totalProfitValue
            .toLocaleString('en-US', { style: "currency", currency: 'USD' })
        totalProfitElement.textContent = totalProfitValue;
    }
    
    updatePassengers();
    updateAverageAge();
    updateTotalProfit();
})()


// -----------------------------
// 1. Crea una función llamada "getPassengersInfo" que reciba un número entero (x), 
// debe preguntar al usuario por el nombre y edad de la persona a inscribir (x) veces.
// se debe construir un arreglo de objetos con la información recogida. Cada objeto corresponde
// a un tripulante de modo que el objeto retornado debe tener la siguiente estuctura:

var returnedArray = [
    { name: '...', age: '...' },
    { name: '...', age: '...' },
    { name: '...', age: '...' }
];

const getPassengersInfo = (passengersAmount) => {
    let passengers = [];
    for(let i = 0; i < passengersAmount; i++) {
        const name = prompt('Ingresa tu nombre');
        let age = prompt('Ingresa tu edad');
        age = parseInt(age, 10);
        passengers.push({ name, age });
    }
    return passengers;
};
//------------------------------
// -----------------------------
// 2.  Crea una función llamada "getAverageAge" que reciba un arreglo de objetos
// con la siguiente estructura:

var passengers = [
    { name: '...', age: '...' },
    { name: '...', age: '...' },
    { name: '...', age: '...' }
];

// Y que retorne el valor promedio de los valores de la llave age en los objetos.

function getAverageAge(passengers) {
    const sum = passengers.reduce((acc, passenger) => acc += passenger.age, 0);
    const passengersAmount = passengers.length;
    return sum/passengersAmount;
};
//------------------------------
// -----------------------------
// 3. Crea una función llamada "getTotalProfit" que reciba un arreglo de objetos
// con la siguiente estructura:

var passengers = [
    { name: '...', age: '...' },
    { name: '...', age: '...' },
    { name: '...', age: '...' }
];

// Y de acuerdo con la siguiente tabla de precio según edad, retorne la suma total de
// cada uno de los tripulantes

// Personas de 13 años o menores                        3000 dólares
// Personas de 13 hasta 30 años (incluyendo el 30)      5000 dólares
// Personas mayores de 30 años                          4000 dólares

function getTotalProfit(passengers) {
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