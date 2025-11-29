import { libros } from "../data/libros.js";
import { rl, init } from "../main.js";

export const prestarLibro = () => {
    rl.question("Ingresa el título del libro a prestar: ", (titulo) => {
        const libro = libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());

        if (!libro) {
            console.log("\n No se encontró el libro.\n");
            return init();
        }

        if (!libro.disponible) {
            console.log("\n El libro ya está prestado.\n");
            return init();
        }

        rl.question("Ingresa el nombre del usuario: ", (usuario) => {
            libro.disponible = false;
            libro.prestamo = {
                usuario,
                fecha: new Date()
            };

            console.log("\n ✓ Préstamo registrado correctamente.\n");
            init();
        });
    });
};