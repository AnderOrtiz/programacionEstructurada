// Exportamos específicamente la función 'agregarLibro' desde su módulo correspondiente.
// Esto evita exportar todo el archivo y nos permite controlar qué funciones se exponen.
export { agregarLibro } from "./agregarLibro.js";

// Exportamos la función que permite eliminar un libro.
export { eliminarLibro } from "./eliminarLibro.js";

// Exportamos la función que lista todos los libros registrados.
export { listarLibros } from "./listarLibros.js";

// Exportamos la función encargada de manejar el préstamo de libros.
export { prestarLibro } from "./prestarLibro.js";

// Exportamos la función con la lógica para devolver libros prestados.
export { devolverLibro } from "./devolverLibro.js";

// Exportamos la función que verifica o controla si un libro está disponible.
export { controlDisponibilidad } from "./controlDisponibilidad.js";
