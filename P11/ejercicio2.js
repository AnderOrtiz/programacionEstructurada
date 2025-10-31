/**
• Escribe un programa que pida la edad de una persona y determine si es: menor de
edad (menor de 18), adulto (18-64) o adulto mayor (65 o más).*/
import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const determinaredad = (num) => {
    rl.close()
    if (num < 0) {
        console.log(`Ingrese una edad valida`);
    } else if (num < 18) {
        console.log('Es menor de edad');
    } else if (num <= 64) {
        console.log(`Es adulto`);
    } else {
        console.log('Es adulto mayor');
    }
}

rl.question('Ingrese su edad: ', determinaredad)