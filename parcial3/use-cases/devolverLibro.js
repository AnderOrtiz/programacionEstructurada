import { libros } from "../data/libros.js";
import { rl, init } from "../main.js";

export const devolverLibro = () => {
    rl.question("Ingresa el título del libro a devolver: ", (titulo) => {
        const libro = libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());

        if (!libro) {
            console.log("\n No se encontró el libro.\n");
            return init();
        }

        if (libro.disponible) {
            console.log("\n El libro no está prestado.\n");
            return init();
        }

        libro.disponible = true;
        libro.prestamo = null;

        console.log("\n ✓ Devolución realizada correctamente.\n");
        init();
    });
};
