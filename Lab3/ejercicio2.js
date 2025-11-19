import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const verificarSaldo = (saldo, precio) => {
    rl.close();

    if (saldo >= precio) {
        console.log("La compra puede realizarse.");
    } else {
        console.log("No tiene fondos suficientes.");
    }
}

rl.question("Ingrese el saldo disponible en su cuenta: ", (saldo) => {
    rl.question("Ingrese el precio del producto: ", (precio) => {
        verificarSaldo((saldo * 1), (precio * 1))
    });
});