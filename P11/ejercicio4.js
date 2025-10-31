/**Crea un programa que solicite un año y determine si es bisiesto. Un año es bisiesto
si es divisible entre 4, excepto los años divisibles entre 100, a menos que también
sean divisibles entre 400
 */

import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const isBisiento = (year) => {
    rl.close();
    if (year % 4 == 0 && year % 100 !== 0 && year % 400 !== 0) {
        console.log(`El año ${year} es bisiesto`);
    } else {
        console.log(`El año ${year} no es bisiesto`);
    }
}

rl.question('Ingrese el año: ', isBisiento)