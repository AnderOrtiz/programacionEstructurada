import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

let suma = 0;

const sumar = (num) => {
    let n = parseInt(num);
    if (n < 0) {
        console.log("Suma total:", suma);
        rl.close();
    } else {
        suma += n;
        rl.question("Ingrese otro número: ", sumar);
    }
};

rl.question("Ingrese un número: ", sumar);