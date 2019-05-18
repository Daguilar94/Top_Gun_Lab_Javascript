// Realiza una petición fetch a la API de Rick and Morty para traer la información de los personajes
// de la serie. para saber cual endpoint debes utilizar visita la documentación del API en
// la siguiente url: https://rickandmortyapi.com/documentation.
// Muestra en consola el json que se obtiene como respuesta.

fetch("https://rickandmortyapi.com/api/character/")
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        const characters = response.results;
        const imageArray = createImageArray(characters);
        loadImages(imageArray);
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })

// 2. Obtener el contenedor de los personajes.

const characterContainer = document.getElementById("character-container");

// 3. Crear una funcion llamada createImage que reciba como parámetro una url,
// la función deberá crear una imagen y a está se le debe agreguar la clase
// "avatar-image", el alt "avatar" y el valor del atributo src debe ser igual al valor
// recibido en el parámetro.
// se debe retornar la imagen creada.

function createImage(src) {
    let avatar = document.createElement("img");
    avatar.classList.add("avatar-image");
    avatar.alt = "avatar";
    avatar.src = src;
    return avatar;
}

// 4. Crear una función llamada createImageArray, que recibe un arreglo de personajes con
// mucha información y lo que debe hacer es recorrer este arreglo y para cara elemento del arreglo
// crear una imagen usando la función creada en el punto 3.
// Recuerda que a la función del punto 3 se le debe pasar un parámetro que será igual al src de la img
// Para saber cual es el valor que se debe pasar debes revisar la respuesta de la API y encontrar
// que valor del json corresponde a la src de la foto del personaje.

function createImageArray(charactersArray) {
    return charactersArray.map(function(character) {
        return createImage(character.image);
    })
}

// 5. Crear una función llamada loadImages la cual reciba un arreglo de elementos (img) de html y
// agregue cada una de estas como hijos del elemento contenedor de los personajes.

function loadImages(imageArray) {
    imageArray.forEach(function(image) {
        characterContainer.appendChild(image);
    })
}

// 6. En el punto 1 donde obtuviste la respuesta del servidor (dentro del segundo then), utiliza la
// función createImageArray para crear el arreglo de imágenes a partir de la respuesta
// real del servidor.
// Luego usa la función loadImages para cargar las imágenes en el dom pasándole como parámetro
// lo retornado en la función "createImageArray".