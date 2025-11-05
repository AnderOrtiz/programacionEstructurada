/**Solicitar un nombre y mostrar si está en el arreglo o no esta */

import { createInterface } from 'readline';

const arr = ['ander', 'lex', 'brenner', 'ken', 'stan']

const rl = createInterface({ input: process.stdin, output: process.stdout });

rl.question('Ingrese el nombre: ', name => {
    rl.close();
    if (arr.includes(name.toLocaleLowerCase())) {
        console.log(`${name} está en el arreglo`);
    } else {
        console.log(`${name} no está en el arreglo`);
    }
})