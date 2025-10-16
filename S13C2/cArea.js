import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularArea(base, altura) {
    let calculo = parseFloat(base * altura);
    return calculo
}

rl.question("Ingrese la base del rectángulo: ", base => {
    rl.question('Ingrese la altura del rectángulo: ', altura => {
        // let resultado = calcularArea(base, altura)
        // console.log(`El area del rectángulo es: ${resultado}`);
        console.log(`El area del rectángulo es: ${calcularArea(base, altura)}`);
        
        rl.close()
    })
})