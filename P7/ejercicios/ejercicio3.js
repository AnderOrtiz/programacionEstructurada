/**  Ejercicio 2: Sumar todos los elementos
Pregunta al usuario los números a guardar en un array. 
Calcula y muestra la suma total usando reduce.*/
import readline from 'readline'
import { stdin, stdout } from 'process'

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

const numeros = [],
    pedirNumero = (lim) => {
        rl.question('Ingresa un número para agregar al array o presiona enter para terminar: ', (num) => {
            if (num == '') {
                rl.close()
                const filtrados = numeros.filter(num => num < lim)
                console.log(`Los número filtrados son: `, filtrados);

                return filtrados
            } else if (isNaN(num * 1)) {
                console.log(`${num} no es no número intente de nuevo `);
                pedirNumero(lim);
            } else {
                numeros.push(num * 1);
                pedirNumero(lim)
            }
        })
    }

rl.question('Ingresa el número límite: ', (lim) => {
    pedirNumero(lim * 1)
})
