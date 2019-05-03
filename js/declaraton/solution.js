// En este archivo encontrarás las respuestas a las preguntas
// relacionadas con declaración de variables

// 1. La declaración de variables con let no hace hoisting,
// razón por la cual no existe al momento de ser accedida antes de ser declarada,
// y por esto se lanza un "ReferenceError". 

// 2. Cuando se declara una variable con var, su declaración (sólo la declaración, no la asignación
// se mueve al comienzo de su scope en el tiempo de ejecución, por está razón
// se imprime que el valor de a es "undefined"

// 3. Cuando se declara una variable con const, es obligatorio asignarle in valor
// para inicializarla.

// 4. Una variable declarada con const no puede reasignarse ya que es una constante.

// 5. Las variables const y let tienen scope en los bloques, es por esto que al ser creada dentro
// del bloque del "if" esta variable solo vive allí y no se puede acceder desde afuera.

// BONUS 

var a;
var a = undefined;
a = (() => {})();
