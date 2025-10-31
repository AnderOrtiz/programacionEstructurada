/**
• Implementa un programa que solicite tres números y determine cuál es el mayor de
los tres.*/
import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const cualEsMayor = (num1, num2, num3) => {
    rl.close()
    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} Es mayor`);
    } else if (num1 < num2 && num2 > num3) {
        console.log(`${num2} Es mayor`);
    } else {
        console.log(`${num3} Es mayor`);
    }
}

rl.question('Ingrese num 1: ', (num1) => {
    rl.question('Ingrese num 2: ', (num2) => {
        rl.question('Ingrese num 3: ', (num3) => {
            cualEsMayor((num1 * 1), (num2 * 1), (num3 * 1))
        })
    })
})