// import readline from 'readline'

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// rl.question("Ingrese un número ", (num) => {
//     const numCuadrado = parseInt(num)^2
//     const numRaiz = parseInt(num)**(1/2)
//     console.log({numCuadrado});
//     console.log({numRaiz});
//     rl.close()
// })

    const numLimite = 29,
        randomNum = Math.floor(Math.random()*numLimite) + 1;
    console.log(`El número ganador es: ${randomNum}`);


    // const numMax = Math.max(30, 52, 35, 1, 12, -3),
    // numMin = Math.min(30, 52, 35, 1, 12, -3);
    // console.log({numMax,numMin})

// rl.question("Ingrese el número de la habitación: ", (habitacion) => {
//     const piso = Math.ceil(habitacion / 10);
//     console.log(`La habitación ${habitacion} está en el piso ${piso}`);
//     rl.close()
// })