/**  Ejercicio 1: Crear y llenar un array
Solicita al usuario la cantidad de elementos y luego los valores uno por uno. Al final
muestra el array completo por consola.*/
import readline from 'readline'
import { stdin, stdout } from 'process'

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

let arreglo = [],
    cantidad,
    contador = 0;

rl.question("Ingrese la cantidad de elementos del array: ", (num) => {
    cantidad = parseInt(num);

    const pedirValor = () => {
        if (contador < cantidad) {
            rl.question(`Ingrese el valor para la posición ${contador}: `, (valor) => {
                arreglo.push(valor);
                contador++;
                pedirValor();
            });
        } else {
            console.log("El arreglo ingresado es:", arreglo);
            rl.close();
        }
    };

    pedirValor();
});
