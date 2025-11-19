import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const cumpleRequisitos = (edad, tienePC) => {
    rl.close();
    if (edad >= 15 && tienePC === "si") {
        console.log("Puede inscribirse al curso.");
    } else {
        console.log("No cumple los requisitos para inscribirse.");
    }
}

rl.question("Ingrese su edad: ", (edad) => {
    rl.question("¿Tiene una computadora personal? (si/no): ", (tienePC) => {
        cumpleRequisitos((edad * 1), (tienePC.toLocaleLowerCase()))
    });
});