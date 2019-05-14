// 1. Escriba una función que reciba un string como argumento y retorne el string
// con la primera letra de cada una de sus palabras en mayúscula.
// elemplo: f("hola como estás?") = "Hola Como Estas?"

const capitalize = sentense => {
    let wordArray = sentense.split(" ");
    const newArray = wordArray.map(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        return firstLetter.concat(word.slice(1));
    })
    return newArray.join(" ");
}

// ***** Para correr este archivo en la consola de node ejecuta el siguiente comando:
// ***** node ./ejercicios/funciones/ejercicio2.js