/**Escriba un programa que solicite al usuario una palabra o cadena de texto, crea una
función que reciba como parámetro el texto y devuelva la cantidad de caracteres que
contiene. */
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

const cantidadTexto = (texto) => {
    rl.close()
    const caracter = texto.replaceAll(' ', '')
    console.log(`"${texto}" tinene ${caracter.length} caracteres`);
}

rl.question('Ingrese un texto: ', cantidadTexto)