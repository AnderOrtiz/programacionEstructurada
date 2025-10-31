/**1. Condicionales básicas (if, else if, else)
• Crea un programa que solicite un número y determine si es positivo, negativo o
cero. Muestra el resultado en consola.*/

import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const determinarNum = (num) => {
    rl.close()
    if (num > 0) {
        console.log(`${num} es positivo`);
    } else if (num < 0) {
        console.log(`${num} es negativo`);
    } else {
        console.log(`${num} es cero`);
    }
}

rl.question('Ingrese un número: ', determinarNum)