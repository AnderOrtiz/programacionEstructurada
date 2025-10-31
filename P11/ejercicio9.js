import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const verificarParidad = (num) => {
    rl.close();
    num = parseInt(num);
    const mensaje = (num % 2 === 0) ? `${num} es par` : `${num} es impar`;
    console.log(mensaje);
}

rl.question('Ingrese un número: ', verificarParidad);