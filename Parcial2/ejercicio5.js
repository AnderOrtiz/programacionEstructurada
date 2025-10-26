/**Solicite al usuario una cadena y utilice una función que permita devolver el texto en
mayúsculas.*/

import {createInterface} from 'readline'

const rl = createInterface({
    input:process.stdin,
    output:process.stdout,
})

const aMayusculas = (texto) => {
    rl.close()
    console.log(texto.toUpperCase());
}

rl.question('Ingrese un texto: ', aMayusculas)