import { libros } from "../data/libros.js";
import { init, rl } from "../main.js";

export const listarLibros = () => {
    rl.question('\nBuscar por: \n(1) título \n(2) autor \n(3) listar todos\n\n Elige una opción (1-3) : ', (op) => {

        if (!['1', '2', '3'].includes(op)) {
            console.log("Opción no válida");
            return listarLibros();
        }


        if (op === '3') {
            console.log("\nLista completa de libros:\n");
            console.log(libros);
            return init();
        }

        const campo = op === '1' ? 'titulo' : 'autor';

        rl.question(`Ingresa el ${campo}: `, (texto) => {
            texto = texto.trim().toLowerCase();

            const resultados = libros.filter(lib =>
                lib[campo].toLowerCase().includes(texto)
            );

            console.log("\nResultados encontrados:");
            console.log(resultados.length > 0 ? resultados : "No se encontraron coincidencias");

            init();
        });
    });
};
