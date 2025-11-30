import { libros } from "../data/libros.js";
import { init, rl } from "../main.js";

/**
 * Función principal para listar y buscar libros en el sistema
 * Permite al usuario buscar por título, autor o listar todos los libros disponibles
 */
export const listarLibros = () => {
  // Muestra el menú de opciones de búsqueda al usuario
  rl.question(
    '\nBuscar por: \n(1) título \n(2) autor \n(3) listar todos\n\n Elige una opción (1-3) : ',
    (op) => {
      // Valida que la opción ingresada sea válida (1, 2 o 3)
      if (!['1', '2', '3'].includes(op)) {
        console.log("Opción no válida");
        return listarLibros(); // Vuelve a mostrar el menú si la opción no es válida
      }

      // Si el usuario elige la opción 3, muestra todos los libros
      if (op === '3') {
        console.log("\nLista completa de libros:\n");
        console.log(libros);
        return init(); // Regresa al menú principal
      }

      // Determina el campo de búsqueda según la opción elegida
      // Opción 1 = título, Opción 2 = autor
      const campo = op === '1' ? 'titulo' : 'autor';

      // Solicita al usuario el texto a buscar
      rl.question(`Ingresa el ${campo}: `, (texto) => {
        // Limpia y normaliza el texto ingresado (elimina espacios y convierte a minúsculas)
        texto = texto.trim().toLowerCase();

        // Filtra los libros que contengan el texto buscado en el campo seleccionado
        const resultados = libros.filter(lib =>
          lib[campo].toLowerCase().includes(texto)
        );

        // Muestra los resultados de la búsqueda
        console.log("\nResultados encontrados:");
        console.log(
          resultados.length > 0 ? resultados : "No se encontraron coincidencias"
        );

        // Regresa al menú principal después de mostrar los resultados
        init();
      });
    }
  );
};