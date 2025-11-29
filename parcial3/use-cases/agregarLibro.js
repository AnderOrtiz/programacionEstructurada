import { libros } from "../data/libros.js";
import { init, rl } from "../main.js";


const crearLibro = (titulo, autor, year, generos) => {
    generos = generos.split(",").map(genero => genero.trim());

    return {
        titulo,
        autor,
        year,
        generos,
        disponible: true,
        prestamo: null
    };
};

export const agregarLibro = () => {
    rl.question('Ingresa el título del libro: ', (titulo) => {
        titulo = titulo.trim();
        if (titulo === '') {
            console.error('\n El título es obligatorio \n');
            return agregarLibro();
        }

        rl.question('Ingresa el autor del libro: ', (autor) => {
            autor = autor.trim();

            rl.question('Ingresa el año del libro: ', (year) => {
                year = parseInt(year);

                if (isNaN(year) || year <= 0) {
                    console.error('\n Año no válido \n');
                    return agregarLibro();
                }

                rl.question('Ingresa los géneros separados por coma: ', (generos) => {

                    const libro = crearLibro(titulo, autor, year, generos);
                    libros.push(libro);

                    console.log('\n Libro agregado correctamente\n');
                    init();
                });
            });
        });
    });
};