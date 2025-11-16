/**Suma de números naturales: Solicita un número N y usa un ciclo (for/while) para
sumar los números del 1 al N.*/

import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const pararBucle = (n) => {
    rl.close()
    let suma = 0,
        i = 1
    while (i <= (n * 1)) {
        suma += i;
        i++;
    }
    console.log(`La suma de los números del 1 al ${parseInt(n)} es: ${suma}`);
    return suma;
}

rl.question('Ingrese un número para sumar hasta él: ', pararBucle)