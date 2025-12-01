import { libros } from "../data/libros.js";
import { init } from "../main.js";
import { rl } from "../services/rl.js";


/**
 * Función para registrar el préstamo de un libro a un usuario
 * Valida que el libro exista y esté disponible antes de realizar el préstamo
 */
export const prestarLibro = () => {
    // Solicita al usuario el título del libro que desea prestar
    rl.question("Ingresa el título del libro a prestar: ", (titulo) => {
        // Busca el libro en el array comparando títulos (sin distinguir mayúsculas/minúsculas)
        const libro = libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());

        // Verifica si el libro existe en la colección
        if (!libro) {
            console.log("\n No se encontró el libro.\n");
            return init(); // Regresa al menú principal si no existe el libro
        }

        // Verifica si el libro está disponible para préstamo
        if (!libro.disponible) {
            console.log("\n El libro ya está prestado.\n");
            return init(); // Regresa al menú principal si el libro no está disponible
        }

        // Solicita el nombre del usuario que tomará prestado el libro
        rl.question("Ingresa el nombre del usuario: ", (usuario) => {
            // Marca el libro como no disponible
            libro.disponible = false;
            
            // Registra la información del préstamo
            libro.prestamo = {
                usuario,                // Nombre del usuario que toma prestado el libro
                fecha: new Date()       // Fecha y hora en que se realizó el préstamo
            };

            // Confirma que el préstamo se registró exitosamente
            console.log("\n ✓ Préstamo registrado correctamente.\n");
            
            // Regresa al menú principal
            init();
        });
    });
};