// --- Declaración tradicional ---
function calcularCubo(num) {
    return Math.pow(num, 3);
}

/**Ambas funciones hacen lo mismo que es elevar al cuadrado
    al argumento pero cumpliendo los requerimientos
 */

// --- Expresión de función asignada a una variable ---
const calcularCuboExp = function(num) {
    return num ** 3;
};

/** Esta función a travez de un map agarra todos lo elementos
    de la lista y los eleva al cuandrado a travez de un callback
 */
// --- Función que usa callback anónimo ---
function transformarArray(arr) {
    return arr.map(function(num) {
        return num ** 2; // Eleva al cuadrado
    });
}

console.log("Cubo (declaración):", calcularCubo(3));
console.log("Cubo (expresión):", calcularCuboExp(4));

console.log("Array transformado:", transformarArray([1, 2, 3, 4]));