/**
 * Ejercicio 3: Juego de potencias aleatorias 
Genera dos números aleatorios: 
• La base debe ser un número entre 2 y 10. 
Manejo de Estructura de Datos 
Programacion Estructurada
• El exponente debe ser un número entre 1 y 5. 
El programa debe pedir al usuario el resultado de la potencia. 
• Convierte la respuesta con parseInt. 
• Comprueba si es correcta comparando con Math.pow(base, exponente). 
• Si el usuario falla, muestra la respuesta correcta y la diferencia absoluta con 
Math.ab
 */
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 const base = Math.floor(Math.random() * 9) + 2,
    exponente = Math.floor(Math.random() * 5) + 1,
    respuestaCorrecta = Math.pow(base, exponente);

rl.question(`¿Cuánto es ${base} elevado a la ${exponente}? `, (respuestaUsuario) => {
    const respuesta = parseInt(respuestaUsuario);
    if (respuesta === respuestaCorrecta) {
        console.log("Correcto.");
    } else {
        const diferencia = Math.abs(respuestaCorrecta - respuesta);
        console.log("Incorrecto.");
        console.log(`La respuesta correcta era: ${respuestaCorrecta}`);
        console.log(`La diferencia absoluta fue de: ${diferencia}`);
    }
    rl.close();
});