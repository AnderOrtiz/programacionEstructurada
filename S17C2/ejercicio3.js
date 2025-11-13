/** Contador de pares e impares: Pide 10 números, cuenta cuántos son pares y
cuántos impares usando while*/

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPrecioEntrada(edad) {
    if (edad < 0 || isNaN(edad)) return "Error: edad no válida";
    if (edad < 12) return "Precio: $3.00";
    if (edad <= 59) return "Precio: $5.00";
    return "Precio: $2.50";
}

rl.question("Ingrese su edad: ", (edad) => {
    edad = parseInt(edad);
    console.log(calcularPrecioEntrada(edad));
    rl.close();
});
