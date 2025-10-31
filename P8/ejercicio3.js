// --- Función principal ---
// En las siguientes funciones he usado sintaxis modernas
// pero esta es un arrow function que aplica una función a cada elemento del map
const procesarArray = (arr, funcion) => arr.map(funcion),

// --- Funciones de procesamiento ---
// No se como explicar esto porque el nombre de la variable dice todo :v
    duplicar = (num) => num * 2,
    elevarCuadrado = (num) => num ** 2,
//    elevarCuadrado = (num) => num ** num,
    raizCuadrada = (num) => Math.sqrt(num),
//    raizCuadrada = (num) => num**(1/2),

    numeros = [4, 9, 16, 25];

console.log("Duplicar:", procesarArray(numeros, duplicar));
console.log("Cuadrado:", procesarArray(numeros, elevarCuadrado));
console.log("Raíz cuadrada:", procesarArray(numeros, raizCuadrada));
