import readline from "readline";
import {
    agregarLibro,
    eliminarLibro,
    prestarLibro,
    devolverLibro,
    controlDisponibilidad,
    listarLibros,
} from "./use-cases/index.js";

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const init = () => {
    console.log(`
=== SISTEMA DE BIBLIOTECA ===

1. Agregar libro
2. Eliminar libro
3. Listar libros
4. Registrar préstamo
5. Registrar devolución
6. Ver disponibilidad
0. Salir
    `);

    rl.question("Elige una opción: ", (op) => {
        switch (op.trim()) {
            case "1":
                return agregarLibro();
            case "2":
                return eliminarLibro();
            case "3":
                return listarLibros();
            case "4":
                return prestarLibro();
            case "5":
                return devolverLibro();
            case "6":
                return controlDisponibilidad();
            case "0":
                console.log("Saliendo...");
                return rl.close();
            default:
                console.log("\n Opción no válida.\n");
                return init();
        }
    });
};

init();
