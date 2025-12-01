import { libros } from "../data/libros.js";
import { init } from "../main.js";
import { rl } from "../services/rl.js";

// Caso de uso: devolver un libro previamente prestado
export const devolverLibro = () => {
  // Pedimos al usuario el título del libro a devolver
rl.question("Ingresa el título del libro a devolver: ", (titulo) => {
    // Buscamos el libro por título (ignorando mayúsculas/minúsculas)
    const libro = libros.find(
    (libro) => libro.titulo.toLowerCase() === titulo.toLowerCase()
    );

    // Si no se encuentra el libro en la lista
    if (!libro) {
    console.log("\n No se encontró el libro.\n");
      return init(); // Volvemos al menú principal
    }

    // Si el libro ya está disponible, significa que no está prestado
    if (libro.disponible) {
    console.log("\n El libro no está prestado.\n");
      return init(); // Volvemos al menú principal
    }

    // Marcamos el libro como disponible y limpiamos la info de préstamo
    libro.disponible = true;
    libro.prestamo = null;

    console.log("\n ✓ Devolución realizada correctamente.\n");
    init(); // Volvemos al menú principal
});
};