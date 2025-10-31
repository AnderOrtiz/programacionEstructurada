import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const cuentaValida = '1234',
    pinValido = '4321';
let saldo = 1000,
    intentos = 0;

const verificarCuenta = (cuenta) => {
    if (cuenta !== cuentaValida) {
        console.log('Cuenta no encontrada');
        rl.close();
    } else {
        pedirPin();
    }
},

    pedirPin = () => {
        rl.question('Ingrese su PIN (4 dígitos): ', (pin) => {
            if (pin === pinValido) {
                pedirMonto();
            } else {
                intentos++;
                if (intentos < 3) {
                    console.log('PIN incorrecto, intente nuevamente');
                    pedirPin();
                } else {
                    console.log('Demasiados intentos fallidos');
                    rl.close();
                }
            }
        });
    },

    pedirMonto = () => {
        rl.question('Ingrese el monto a retirar: ', (monto) => {
            monto = parseFloat(monto);

            if (isNaN(monto) || monto <= 0) {
                console.log('Monto inválido');
                rl.close();
            } else if (monto > saldo) {
                console.log('Fondos insuficientes');
                rl.close();
            } else {
                saldo -= monto;
                console.log(`Retiro exitoso. Saldo restante: $${saldo}`);
                rl.close();
            }
        });
    };

rl.question('Ingrese número de cuenta (4 dígitos): ', verificarCuenta);