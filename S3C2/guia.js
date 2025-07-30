import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Nota 1: ", (n1) =>{
//     rl.question("Nota 2: ", (n2) =>{
//         rl.question("Nota 3: ", (n3) =>{
//             const avg = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3
//             console.log(`El promedio de notas es de ${avg}`);
//             rl.close()
//         })
//     })  
// })

// rl.question("Insert kilómetros: ", (km) => {
//     const lmi = parseFloat(km)*0.621371;
//     console.log(`${km} kilómetros = ${lmi.toFixed(2)} millas`)
//     rl.close()
// })

rl.question("Precio unitario: ", (b) =>{
    rl.question("cantidad de productos: ", (h) =>{
        const costoTotal = parseFloat(b) * parseInt(h)
        console.log(`El costo total es de ${costoTotal}`);
        rl.close()
    })
})
