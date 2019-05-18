import {
    filterPassengersByName,
    getPassengersInfo,
    getAverageAge,
    getTotalProfit
} from "../practica/ejercicios.js";

// import { getPassengers } from "../practica/api.js";

(function() {
    "use strict"

    let passengers = [];
    let averageAge = 0;
    let totalProfit = 0;
    let showedPassengers = [...passengers];

    fetch("https://rickandmortyapi.com/api/character/")
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            const characters = response.results;
            // console.log(characters);
            const characterArray = characters.map(character => {
                return ({
                    name: character.name,
                    src: character.image,
                    age: Math.floor(Math.random() * 100)
                })
            })

            passengers = characterArray;
            showedPassengers = [...passengers];
            updatePassengers();
            updateAverageAge();
            updateTotalProfit();
        })
        .catch(function(error) {
            console.log("Error: " + error);
        })
    
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
        showedPassengers = filterPassengersByName(passengers, value);
        updatePassengers();
    }
    
    const createPassengerNode = (name, src) => {
        const figure = document.createElement('FIGURE');
        const img = document.createElement('IMG');
        const caption = document.createElement('FIGCAPTION');
    
        figure.classList.add('passengers__card');
        caption.classList.add('passengers__caption');
        img.classList.add('passengers__img');
    
        img.setAttribute("src", src);
        img.setAttribute("alt", "avatar");
    
        caption.textContent = name;
        figure.appendChild(img);
        figure.appendChild(caption);
        return figure;
    }

    const updatePassengers = () => {
        const passengerNodes = showedPassengers.map(({name, src}) => createPassengerNode(name, src));
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
        let totalProfitValue = totalProfit || 0;
        totalProfitValue = totalProfitValue
            .toLocaleString('en-US', { style: "currency", currency: 'USD' })
        totalProfitElement.textContent = totalProfitValue;
    }

    updatePassengers();
    updateAverageAge();
    updateTotalProfit();
})();
