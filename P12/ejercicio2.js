/**Tabla de multiplicar: Solicita un número y muestra su tabla de multiplicar del 1 al 10
usando un ciclo for. */
import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const toTabla = (num) => {
    rl.close();
    (num * 1);
    for (let index = 1; index <= 10; index++) {
        console.log(`${num} x ${index} = ${num * index} `);
    }
}

rl.question('Ingrese un número: ', toTabla);