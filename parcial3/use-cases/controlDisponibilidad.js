import { libros } from "../data/libros.js";
import { init } from "../main.js";

// Función que muestra si el libro esta disponible para prestar

export const controlDisponibilidad = () => {
    console.log("\n=== Estado de Disponibilidad ===\n");

    // Busca el libro para saver si está disponible
    libros.forEach((libro, contador) => {
        console.log(`${contador + 1}. ${libro.titulo} — ${libro.disponible ? "Disponible" : "Prestado"}`);
    });

    console.log("\n");
    init();
};


