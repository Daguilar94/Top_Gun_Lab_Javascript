// Crear una función que reciba un string de un caracter y un string adicional de cualquier longitud
// como argumentos y retorne la cantidad de veces que el caracter se repite en el segundo argumento
// ejemplo f("a", "top gun lab all day long") = 3.

const countChar = (char, sentense) => {
    const letterArray = sentense.split("");
    const filteredArray = letterArray.filter(letter => letter === char);
    return filteredArray.length;
}

// ***** Para correr este archivo en la consola de node ejecuta el siguiente comando:
// ***** node ./ejercicios/funciones/ejercicio3.js