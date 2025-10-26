/**Escriba un programa que solicite al usuario el precio de tres productos, y cree una
función que permita calcular la suma total del precio de los tres productos, mostrar
en consola la suma.  */

import { createInterface } from 'readline'

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

const sumaTotalFunction = (product1, product2, product3) => {
    rl.close()
    const sumaToal = (product1 * 1) + (product2 * 1) + (product3 * 1);
    console.log(`La suma de ${product1} + ${product2} + ${product3} = ${sumaToal}`);
}

rl.question('Ingrese el precio del primer producto: ', precio1 => {
    rl.question('Ingrese el precio del segundo producto: ', precio2 => {
        rl.question('Ingrese el precio del tercer producto: ', precio3 => {
            sumaTotalFunction(precio1, precio2, precio3)
        })
    })
})