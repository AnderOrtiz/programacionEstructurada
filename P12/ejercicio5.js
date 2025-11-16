import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const factorial = (num) => {
    let n = parseInt(num);
    let total = 1;

    for (let i = 1; i <= n; i++) {
        total *= i;
    }

    console.log("Factorial:", total);
    rl.close();
};

rl.question("Ingrese un número: ", factorial);
