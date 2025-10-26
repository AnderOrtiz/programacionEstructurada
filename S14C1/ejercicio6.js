/** Solicite al usuario una temperatura en grados celsius y cree una función que permita
convertir esa temperatura Celsius a Fahrenheit. */
import { createInterface } from 'readline'

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
})

const toFahrenheit = (Celsius) => {
    rl.close()
    const Fahrenheit = ((Celsius * 1) * 9 / 5) + 32
    console.log(Fahrenheit);
}

rl.question('Ingrese los grados Celsius: ', toFahrenheit)