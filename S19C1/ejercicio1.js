//Solicita un número al usuario y muestra su tabla de multiplicar del 1 al 10
import { createInterface } from "readline";

// Crear interfaz readline
const rl = createInterface({ input: process.stdin, output: process.stdout });

const tablaFunct = (num) => {
    rl.close()
    num = num * 1
    for (let index = 1; index <= 10; index++) {
        console.log(`${index} x ${num} = ${index * num}`);
    }
}

rl.question('Ingrese el número de la tabla: ', tablaFunct)