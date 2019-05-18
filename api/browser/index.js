
// 1. Obten el elemento contenedor de las cajas y asígnalo a una variable llamada boxContainer
const boxContainer = document.getElementById("box-container");

// 2. obten la caja, asígnala a una variable "firstBox" y agregale un event listener para que
// cada vez que se le haga click,
// se le agrege la clase "red" y se le quite cuando se le vuelva a dar click

const firstBox = document.getElementById("first-box")

firstBox.addEventListener("click", function() {
    this.classList.toggle("red");
})

// 3. Crea una función que cree una nueva caja (div), le agregue la clase "box", el event listener que acabas de realizar y también la agrege como hijo al final del elemento box-container.

function createNewBox() {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.addEventListener("click", function() {
        this.classList.toggle("red");
    });
    boxContainer.appendChild(newBox);
}

// 4. Obten el botón de agragar y asígnalo a la variable addButton.

const addButton = document.getElementById("add-button");

// 5. agregale a addButton un event listener para que cada vez que se le haga click, cree una nueva caja

addButton.addEventListener("click", createNewBox);

// 6. Crea una función llamada getBoxes donde se obtenga la colección de cajas,
// se cree un arreglo iterable con ella y se retorne este iterable.
function getBoxes() {
    let boxes = document.getElementsByClassName('box');
    return [...boxes];
}

// 7. crea un botón cuyo contenido sea el texto "Change Visibility".

const visibilityButton = document.createElement("BUTTON");
visibilityButton.textContent = "Change Visibility";

// 8. Agrega el botón al contenedor de botones (Donde se encuentra el botón de agregar)
// mira el HTML para saber como obtenerlo.

const buttonsContainer = document.querySelector(".buttons-container");
buttonsContainer.appendChild(visibilityButton);

// 8. Crea una función llamada toggleInvisibility donde se obtenga el arreglo iterable de
// cajas mediante la función "getBoxes" creada en el punto 6, se itere este arreglo y a cada una
// de las cajas se le haga toggle de la clase "invisible".

function toggleInvisibility() {
    let boxes = getBoxes();
    boxes.forEach(box => box.classList.toggle("invisible"));
}

// 9. al botón creado en el punto 7 asígnale un event listener para que cuando se haga click
// vuelva invisible las cajas y las vuelva a hacer visibles cuando se le vuelva a 
// hacer click.

visibilityButton.addEventListener("click", toggleInvisibility);

// BONUS: Intenta eliminar la ultima caja cada vez que se hunda la tecla "D". 🤓
