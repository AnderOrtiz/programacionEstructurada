/**
 * • Escribe un programa que pida una calificación numérica (0-100) y determine la letra
correspondiente: A (90-100), B (80-89), C (70-79), D (60-69), F (menor a 60).
 */

import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const obtenerCalificacion = (nota) => {
    rl.close();
    if (nota > 0 && nota < 60) {
        console.log('Tienes una F');
    } else if (nota < 70) {
        console.log('Tienes una D');
    } else if (nota < 80) {
        console.log('Tienes una C');
    } else if (nota < 90) {
        console.log('Tienes una B');
    } else if (nota <= 100) {
        console.log('Tienes una A');
    } else {
        console.log('Ingresa una nota valida');
    }
}

rl.question('Ingrese la nota: ', obtenerCalificacion)