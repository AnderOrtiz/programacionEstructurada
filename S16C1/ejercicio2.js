/**Solicitar al usuario un número y determinar si este es un numero positivo o negativo*/
import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

rl.question('Ingrese un número: ', num => {
    rl.close()
    if (num > 0) {
        console.log(`${num} es positivo`);
    } else if (num < 0) {
        console.log(`${num} es negativo`);
    } else {
        console.log(`${num} es cero`);
    }
})
