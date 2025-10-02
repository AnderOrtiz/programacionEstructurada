import readline from 'readline';
import { stdin, stdout } from 'process';

const rl = readline.createInterface({ input: stdin, output: stdout });

const numeros = [];

const pedirNumero = () => {
    rl.question('Ingresa un número (o presiona Enter para terminar): ', (num) => {
        if (num === '') {
            console.log('Array original:', numeros);

            // Eliminar duplicados usando filter e indexOf
            const unicos = numeros.filter((valor, indice) => numeros.indexOf(valor) === indice);
            console.log('Array sin duplicados:', unicos);

            rl.close();
        } else if (isNaN(num)) {
            console.log('Debes ingresar un número válido.');
            pedirNumero();
        } else {
            numeros.push(Number(num));
            pedirNumero();
        }
    });
};

pedirNumero();
