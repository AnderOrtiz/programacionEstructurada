import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escribe un número decimal: ", (float) => {

console.log(`El número cuando round es: ${Math.round(float)}`)
console.log(`El número cuando floor es: ${Math.floor(float)}`)
console.log(`El número cuando ceil es: ${Math.ceil(float)}`)
console.log(`El número cuando trunc es: ${Math.trunc(float)}`)

    rl.close()
})