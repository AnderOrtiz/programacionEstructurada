import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escribe una operación ejemplo: 10 + 20, 7.5 * 3, 100 / 0 \n", (operacion) => {
    const toArray = operacion.split(' ')
    const num1 = parseFloat(toArray[0]),
        num2 = parseFloat(toArray[2]),
        operador = toArray[1]

        let res;

    switch (operador) {
        case '+':
            res = num1 + num2
            console.log(`${num1} ${operador} ${num2} = ${res}`);
            break;
        case '-':
            res = num1 - num2
            console.log(`${num1} ${operador} ${num2} = ${res}`);
            break;
        case '*':
            res = num1 * num2
            console.log(`${num1} ${operador} ${num2} = ${res}`);
            break;
        case '/':
            res = num1 / num2
            console.log(`${num1} ${operador} ${num2} = ${res}`);
            break;
        default:
        console.error('Operación no valida')
            break;
    }
    rl.close()
})