import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numeros = [];

rl.question('Ingrese el primer número: ', (numero1) => {
    numeros.push(numero1);
    rl.question('Ingrese el segundo número: ', (numero2) => {
        numeros.push(numero2);
        rl.question('Ingrese el tercer número: ', (numero3) => {
            numeros.push(numero3);
            rl.close()
            let suma = 0;
            numeros.forEach(numero => {
                suma += numero * 1;
            })
            const promedio = suma / numeros.length;
            console.log(`El promedio es de: ${promedio}`);
        })
    })
})