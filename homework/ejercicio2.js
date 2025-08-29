/**
 * Ejercicio 2: Estadísticas de una lista de números 
Solicita al usuario que ingrese una serie de números enteros separados por espacios. 
• Convierte los valores a números usando Number. 
• Obtén el número mayor y el menor utilizando Math.max y Math.min. 
• Calcula el promedio y muéstralo con toPrecision(3). 
 */
import { log } from 'console';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa una serie de números enteros separados por espacios: ", (input) => {
    const numeros = input.split(" ").map(Number),
        numeroMenor = Math.min(...numeros),
        numeroMayor = Math.max(...numeros),
        suma = numeros.reduce((total, num) => total + num, 0),
        promedio = suma / numeros.length;

    console.log("El número mayor es: " + numeroMayor);
    console.log("El número menor es: " + numeroMenor);
    console.log("El promedio es: " + promedio.toPrecision(3));
    rl.close();
});
