/**Solicita la edad al usuario y muestra en qué categoría está
-          Niñez 0-11
-          Adolescencia: 12-17
-          Adultez: 18-59
-          Vejez: 60+ */
import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

rl.question('Ingrese su edad: ', edad => {
    rl.close()
    if (edad < 0) {
        console.log(`Ingrese una edad valida`);
    } else if (edad < 12) {
        console.log('Es menor de edad');
    } else if (edad <= 18) {
        console.log(`Es adulto`);
    } else if (edad <= 60) {
        console.log(`Es adulto`);
    } else {
        console.log('Es adulto mayor');
    }
})