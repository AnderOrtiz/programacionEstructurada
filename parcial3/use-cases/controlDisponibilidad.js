import { libros } from "../data/libros.js";
import { init } from "../main.js";

export const controlDisponibilidad = () => {
    console.log("\n=== Estado de Disponibilidad ===\n");

    libros.forEach((libro, contador) => {
        console.log(`${contador + 1}. ${libro.titulo} — ${libro.disponible ? "Disponible" : "Prestado"}`);
    });

    console.log("\n");
    init();
};
