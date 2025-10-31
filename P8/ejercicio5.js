// Cree una función que tiene una variable en calidad de contador 
// y retorna 3 métodos
function crearContador() {
    let contador = 0; // variable privada

    return {
        incrementar: () => contador++,
        decrementar: () => contador--,
        obtenerValor: () => contador
    };
}

// estos de acá son ejemplos de como usar la función
const contadorA = crearContador(),
    contadorB = crearContador();

contadorA.incrementar();
contadorA.incrementar();
contadorB.incrementar();

console.log("Contador A:", contadorA.obtenerValor());
console.log("Contador B:", contadorB.obtenerValor()); 
