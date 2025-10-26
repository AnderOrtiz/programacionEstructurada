/** Cree una función que permita calcular el descuento de un producto. Solicite al usuario
el precio de un producto y el porcentaje de descuento, devuelva el precio final. */
import { createInterface } from 'readline'

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
})

const aplicarDescuento = (precio, descuento) => {
    rl.close()
    const descuentoAplicado = precio * (1 - (descuento / 100));
    console.log(`$${precio} con el descuento aplicado quedaria de: ${descuentoAplicado}`);
}

rl.question('Ingrese el precio del producto: ', precio => {
    rl.question('Ingrese el descuento: ', decuento => {
        aplicarDescuento((precio * 1), (decuento * 1))
    })
})