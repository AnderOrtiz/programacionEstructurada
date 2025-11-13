import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) return "Error: No se puede dividir entre 0";
    return a / b;
}

function mostrarMenu() {
    console.log(`
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Salir
`);
}

function iniciar() {
    mostrarMenu();
    rl.question("Elige una opción: ", (opcion) => {
        if (opcion == 5) {
            console.log("Saliendo del programa...");
            rl.close();
            return;
        }

        rl.question("Ingrese el primer número: ", (num1) => {
            rl.question("Ingrese el segundo número: ", (num2) => {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                let resultado;

                switch (parseInt(opcion)) {
                    case 1:
                        resultado = sumar(num1, num2);
                        break;
                    case 2:
                        resultado = restar(num1, num2);
                        break;
                    case 3:
                        resultado = multiplicar(num1, num2);
                        break;
                    case 4:
                        resultado = dividir(num1, num2);
                        break;
                    default:
                        console.log("Opción no válida");
                        rl.close();
                        return;
                }

                console.log("Resultado:", resultado);
                rl.close();
            });
        });
    });
}

iniciar();
