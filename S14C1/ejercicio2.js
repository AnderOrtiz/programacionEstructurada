/** Escriba un programa que solicite al usuario una cadena de texto, este programa debe
de contener una función que reciba la cadena como parámetro y devuelva una nueva
cadena donde la primera letra de cada palabra esté en mayúsculas. */
import readline from 'readline'

const toUpperCaseAll = (palabra) => {
    rl.close()
    console.log(
        palabra
            .split(' ')
            .filter(palabra => palabra.trim() !== "")
            .map(palabra => palabra[0].toUpperCase() + palabra.slice(1).toLowerCase())
            .join(" ")
    );
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Escribe una cadena de texto: ", toUpperCaseAll);
