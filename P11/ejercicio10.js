import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const puedeVotar = (edad) => {
    rl.close();
    edad = parseInt(edad);
    const mensaje = (edad >= 18) ? 'Puede votar' : 'No puede votar';
    console.log(mensaje);
}

rl.question('Ingrese su edad: ', puedeVotar);
