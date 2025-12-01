// Importamos el módulo 'readline' para poder interactuar con el usuario desde la consola.
import { rl } from "./services/rl.js";

// Importamos las funciones principales del sistema desde la carpeta use-cases.
// Cada una representa una acción del menú.
import { agregarLibro, eliminarLibro, prestarLibro, devolverLibro, controlDisponibilidad, listarLibros, } from "./use-cases/index.js";


// Función principal que inicia el menú del sistema.
export const init = () => {
    // Mostramos el menú de opciones al usuario.
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

    // Solicitamos al usuario que elija una opción del menú.
    rl.question("Elige una opción: ", (op) => {
        switch (op.trim()) {   // Usamos trim() para evitar problemas con espacios o saltos de línea
            case "1":
                return agregarLibro();          // Ejecuta la función para agregar un libro
            case "2":
                return eliminarLibro();         // Ejecuta la función para eliminar un libro
            case "3":
                return listarLibros();          // Muestra la lista de libros
            case "4":
                return prestarLibro();          // Registra un préstamo
            case "5":
                return devolverLibro();         // Registra una devolución
            case "6":
                return controlDisponibilidad(); // Verifica disponibilidad de un libro
            case "0":
                console.log("Saliendo...");
                return rl.close();              // Cierra la interfaz y termina el programa
            default:
                console.log("\n Opción no válida.\n");
                return init();                  // Reinicia el menú si la opción no existe
        }
    });
};

// Llamamos a init() para iniciar el programa al ejecutar el archivo.
init();
