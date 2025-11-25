// Pide al usuario que ingrese 3 nombres separados por espacio. Usa for para mostrarlos uno por uno.
import { createInterface } from "readline";

// Crear interfaz readline
const rl = createInterface({ input: process.stdin, output: process.stdout });

const printNames = (names) => {
    rl.close()
    names = names.split(' ').filter(name => name !== '');
    console.log(names);
    
    for (let index = 0; index < names.length; index++) {
        console.log(names[index]);
    };
}

rl.question('Ingrese los nombres separados por un espacio: ', printNames)