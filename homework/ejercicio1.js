/**
 * Ejercicio 1: Conversión y suma de precios 
El programa debe pedir al usuario que ingrese tres precios 
en formato de texto (ejemplo:"12.5", "20.99", "30"). 
• Convierte cada valor a número usando parseFloat. 
• Calcula la suma total. 
• Muestra el resultado con exactamente dos decimales utilizando toFixed(2). 
 */
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa el primer precio: ", (precio1) => {
    rl.question("Ingresa el segundo precio: ", (precio2) => {
        rl.question("Ingresa el tercer precio: ", (precio3) => {
            const num1 = parseFloat(precio1),
                num2 = parseFloat(precio2),
                num3 = parseFloat(precio3),
                sumaTotal = num1 + num2 + num3;
            console.log("La suma total es: " + sumaTotal.toFixed(2));
            rl.close();
        });
    });
});