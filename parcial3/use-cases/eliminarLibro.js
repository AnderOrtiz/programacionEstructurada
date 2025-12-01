import { libros } from "../data/libros.js";
import { init } from "../main.js";
import { rl } from "../services/rl.js";


export const eliminarLibro = () => {
    rl.question('Ingrese el titulo del libro a borrar: ', tituloInput => {
        const titulo = tituloInput.trim();
        if (!titulo) {
            console.log("\nNo ingresaste ningún título.\n");
            return init();
        }

        const index = libros.findIndex(l => l.titulo.toLowerCase() === titulo.toLowerCase());

        if (index === -1) {
            console.log(`\nNo se encontró ningún libro con el título "${titulo}".\n`);
            return init();
        }

        const [eliminado] = libros.splice(index, 1);
        console.log(`\nLibro "${eliminado.titulo}" borrado exitosamente.\n`);
        init();
    });
};
