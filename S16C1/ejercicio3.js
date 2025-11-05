/**  Calcular el descuento según el monto de compra: solicite el monto de la compra y aplique un descuento:
-          monto Mayor o igual a 100 -> 10%
-          monto Entre 50 y 99 -> 5%
-          monto Menor a 50 -> sin descuento */

import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

function descuento(monto) {
    rl.close()
    let descuento = 0
    if (monto >= 100) {
        descuento = 0.10
    } else if (monto >= 50) {
        descuento = 0.05
    }
    console.log(`El monto es de $${(monto * 1) * (1 - descuento)}`);
}

rl.question('Ingrese el monto: ', descuento)

