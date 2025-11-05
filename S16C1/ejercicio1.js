/**Solicitar al usuario y verificar si esta es correcta o no*/

import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const contra = '123'

rl.question('Ingrese la contraseña: ', pass => {
    if (pass == contra) {
        console.log('Contraseña correcta');
    } else {
        console.log('Contraseña incorrecta');
    }
    rl.close()
})