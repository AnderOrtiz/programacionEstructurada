// Importamos la función createInterface desde el módulo 'readline',
// que permite leer entradas del usuario desde la consola.
import { createInterface } from "readline";

// Creamos una interfaz de lectura llamada 'rl'
// que nos permite interactuar con el usuario por la terminal.
export const rl = createInterface({
    // 'input' indica de dónde se leerán los datos (la entrada estándar: el teclado).
    input: process.stdin,
    // 'output' indica dónde se mostrarán los mensajes (la salida estándar: la consola).
    output: process.stdout
});
