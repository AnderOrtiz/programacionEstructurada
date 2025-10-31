import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

let intentos = 0;
const usuarioCorrecto = 'admin',
    contraseñaCorrecta = '1234',

    verificarUsuario = (usuario) => {
        if (usuario !== usuarioCorrecto) {
            console.log('Usuario no encontrado');
            rl.close();
        } else {
            pedirContraseña();
        }
    },

    pedirContraseña = () => {
        rl.question('Ingrese contraseña: ', (contraseña) => {
            if (contraseña === contraseñaCorrecta) {
                console.log('Acceso concedido');
                rl.close();
            } else {
                intentos++;
                if (intentos < 3) {
                    console.log('Contraseña incorrecta, intente nuevamente');
                    pedirContraseña();
                } else {
                    console.log('Demasiados intentos fallidos');
                    rl.close();
                }
            }
        });
    }

rl.question('Ingrese usuario: ', verificarUsuario)