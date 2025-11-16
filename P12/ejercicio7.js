import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

let suma = 0;
let contador = 0;

const promedio = (num) => {
    let n = parseInt(num);

    if (n >= 0) {
        suma += n;
        contador++;
        rl.question("Ingrese otra calificación: ", promedio);
    } else {
        if (contador > 0) {
            console.log("El promedio es:", suma / contador);
        } else {
            console.log("No se ingresaron calificaciones");
        }
        rl.close();
    }
};

rl.question("Ingrese una calificación: ", promedio);