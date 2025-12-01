import { libros } from "../data/libros.js";
import { init } from "../main.js";
import { rl } from "../services/rl.js";

export const eliminarLibro = () => {
rl.question('Ingrese el titulo del libro a borrar: ', tituloInput => {
const titulo = tituloInput.trim();
// Si el usuario no escribió nada, avisamos y volvemos al menú
if (!titulo) {
console.log("\nNo ingresaste ningún título.\n");
return init();
}

// Buscamos el índice ignorando mayúsculas/minúsculas
const index = libros.findIndex(_l_ => l.titulo.toLowerCase() === titulo.toLowerCase());

// Si no existe el libro, informamos y volvemos al menú (antes solo hacía return false)
if (index === -1) {
console.log(`\nNo se encontró ningún libro con el título "${titulo}".\n`);
return init();
}

// Eliminamos el libro y mostramos el título real (con la capitalización original)
const [eliminado] = libros.splice(index, 1);
console.log(`\nLibro "${eliminado.titulo}" borrado exitosamente.\n`);
init();
});
};