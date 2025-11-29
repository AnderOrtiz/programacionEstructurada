import { libros } from "../data/libros.js";
import { init, rl } from "../main.js";

export const eliminarLibro = () => {
    rl.question('Ingrese el titulo del libro a borrar: ', titulo => {
        titulo = titulo.toLowerCase();
        const index = libros.findIndex(l => l.titulo.toLowerCase() === titulo);

        if (index === -1) return false;

        libros.splice(index, 1);
        console.log(`\n Libro "${titulo}" borrado exitosamente\n`)
        init()
    })
};
