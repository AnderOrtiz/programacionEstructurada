import readline from 'readline';
import { stdin, stdout } from 'process';

const rl = readline.createInterface({ input: stdin, output: stdout });

const nombres = [];

const pedirNombre = () => {
    rl.question('Ingresa un nombre (o presiona Enter para terminar): ', (nombre) => {
        if (nombre === '') {
            // Preguntar qué nombre buscar
            rl.question('Ingresa el nombre que deseas buscar: ', (buscar) => {
                const encontrado = nombres.find(n => n.toLowerCase() === buscar.toLowerCase());
                if (encontrado) {
                    console.log(`${buscar} está en el array.`);
                } else {
                    console.log(`${buscar} NO está en el array.`);
                }
                rl.close();
            });
        } else {
            nombres.push(nombre);
            pedirNombre();
        }
    });
};

pedirNombre();
