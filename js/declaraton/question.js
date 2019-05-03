// En este archivo encontrarás algunos ejercicios en los cuales
// relacionados con la declaración de variables en Javascript

// 1. Encuentra la razón por qué el siguiente código lanza un error:

(function() {
    console.log(a)
    let a = 45;
})()

// 2. Encuentra el resultado que la siguiente función imprime
// y explica por qué corre sin problema teniendo en cuenta
// que el ejercicio anterior lanzaba un error.

(function() {
    console.log(a)
    var a = 3;
})()

// 3. Encuentra por qué el siguiente código devuelve un error

(function() {
    let a, b;
    const c;
    a = 3;
    b = 2;
    c = 1;
    console.log(a + b + c)
})()

// 4. Encuentra la razón del error que returna el siguiente código

(function() {
    let a = 10;
    const b = 3;
    var suma = a + b;
    b = suma;
    console.log(b);
})()

// 5. Encuentra la razón del error que lanza el siguiente código

(function() {
    var a = true;
    if (a) {
        let b = 'hola';
    }
    console.log(b);
})()

// BONUS -- Di 3 formas que se te ocurran para asignar una variable como undefined

   