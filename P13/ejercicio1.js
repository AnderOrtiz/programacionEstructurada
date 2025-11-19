import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

let total;
let contador = 1;

let excelente = 0;
let bueno = 0;
let satisfactorio = 0;
let necesita = 0;

const pedirCalificacion = (entrada) => {
    let cal = parseInt(entrada);
    rl.question("Nombre del estudiante: ", (nombre) => {
        if (cal >= 90 && cal <= 100) excelente++;
        else if (cal >= 80 && cal <= 89) bueno++;
        else if (cal >= 70 && cal <= 79) satisfactorio++;
        else if (cal >= 0 && cal < 70) necesita++;

        if (contador < total) {
            contador++;
            rl.question("Calificación (0-100): ", pedirCalificacion);
        } else {
            console.log("Excelente:", excelente);
            console.log("Bueno:", bueno);
            console.log("Satisfactorio:", satisfactorio);
            console.log("Necesita mejorar:", necesita);
            rl.close();
        }
    });
};

rl.question("Número de estudiantes: ", (n) => {
    total = parseInt(n);
    rl.question("Calificación (0-100): ", pedirCalificacion);
});
