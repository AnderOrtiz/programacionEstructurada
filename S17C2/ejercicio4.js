import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularCosto(horas) {
    if (horas < 0 || isNaN(horas)) return "Error: número de horas no válido";
    if (horas === 1) return "Total a pagar: $2";
    if (horas >= 2 && horas <= 4) return "Total a pagar: $5";
    if (horas > 4) return "Total a pagar: $10";
}

rl.question("Ingrese cuántas horas estuvo estacionado: ", (horas) => {
    horas = parseInt(horas);
    console.log(calcularCosto(horas));
    rl.close();
});
