import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function saludarSegunHora(hora) {
    if (hora >= 6 && hora <= 11) return "Buenos días";
    if (hora >= 12 && hora <= 17) return "Buenas tardes";
    if (hora >= 18 && hora <= 23) return "Buenas noches";
    if (hora >= 0 && hora <= 5) return "A dormir";
    return "Hora no válida";
}

rl.question("Ingresa la hora actual (0-23): ", (hora) => {
    hora = parseInt(hora);
    console.log(saludarSegunHora(hora));
    rl.close();
});
