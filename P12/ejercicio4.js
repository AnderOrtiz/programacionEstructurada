/**Contador regresivo: Muestra los números desde N hasta 1 usando for y luego con
while.*/
import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const cuentaRegresivaWhile = (num) => {
    let i = 0
    while (i >= 1) {
        
    }
}


const cuentaRegresivaFor = (num) => {
    rl.close();
    for (let index = (num * 1); index >= 1; index--) {
        console.log(index);
    }

    cuentaRegresivaWhile(num)
}

rl.question('Ingrese un número: ', cuentaRegresivaFor)