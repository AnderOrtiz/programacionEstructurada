/** Contador de pares e impares: Pide 10 números, cuenta cuántos son pares y
cuántos impares usando while*/

import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const contarParesImpares = (str) => {
    rl.close();
    let arr = str.split(' ')

    arr = arr.map((n) => (n * 1))
    console.log(arr);

    arr = arr.filter(n => n !== 0)

    console.log(arr);

    let i = 0,
        par = [],
        impar = [];

    while (i < arr.length) {
        if (arr[i] % 2 == 0) {
            par.push(arr[i])

        } else {
            impar.push(arr[i])
        }
        i++;
    }

    console.log(`Hay ${par.length} pares y ${impar.length} impares`);
}

rl.question('Ingresa 10 números (0 no cuenta) separados por espacio: ', contarParesImpares)

