// Importamos el módulo
import readline from 'readline'; 
// const readline = require('node:readline');

//Creamos una interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// //Realizar la pregunta al usuario
// rl.question("Insert name ", (nombre) => {
//     console.log(`Welcome back ${nombre}`);
//     rl.close();
// })

// rl.question("Insert your city name: ", (city)=> {
//     console.log(`Welcome to ${city}`);
//     rl.close();
// })

// rl.question("Insert your favorite color: ", (color)=> {
//     console.log(`${color} eh... I pretty like that one too`);
//     rl.close();
// })

rl.question("Insert first word: ", (p1) => {
    rl.question("Insert second word: ", (p2) => {   
        console.log(`${p1} ${p2} `);
        rl.close();
    });
});