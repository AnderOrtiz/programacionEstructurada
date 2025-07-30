import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Primer número ", (n1) =>{
//     rl.question("Segundo número ", (n2) =>{
//         const suma = parseInt(n1) + parseInt(n2)
//         console.log(suma);
//         rl.close()
//     })
// })


// rl.question("Insert Celcius: ", (celcius) => {
//     const fahrenheit = (celcius*(9/5))+32
//     console.log(`${celcius} celcius = ${fahrenheit} fahrenheit`)
//     rl.close()
// })


rl.question("Insert base: ", (b) =>{
    rl.question("Insert altura ", (h) =>{
        const area = parseInt(b) * parseInt(h)
        console.log(`El area es de ${area}`);
        rl.close()
    })
})