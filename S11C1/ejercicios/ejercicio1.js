import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const nombres = [];

rl.question('Ingrese el primer nombre: ', (nombre1) => {
    nombres.push(nombre1);
    rl.question('Ingrese el segundo nombre: ', (nombre2) => {
        nombres.push(nombre2);
        rl.question('Ingrese el tercer nombre: ', (nombre3) => {
            nombres.push(nombre3);
            rl.close()
            for (let i = 0; i < nombres.length; i++) {
                console.log(`El nombre número ${i + 1} es: ${nombres[i]}`);
            }
        })
    })
})