import readline from "readline";

// Crear interfaz readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// === Función para generar secuencia secreta ===
const generarSecuencia = () => {
    const arr = [];
    for (let i = 0; i < 4; i++) {
        arr.push(Math.floor(Math.random() * 9) + 1); // 1–9
    }
    return arr;
};

// === Evaluar intento del usuario ===
const evaluarIntento = (secreto, intento) => {
    const resultado = [];
    const copiaSecreto = [...secreto];

    // Primero: ✓ números correctos en la posición correcta
    for (let i = 0; i < 4; i++) {
        if (intento[i] === copiaSecreto[i]) {
            resultado[i] = "✓";
            copiaSecreto[i] = null; // se consume
        }
    }

    // Segundo: ↺ números correctos en posición incorrecta
    for (let i = 0; i < 4; i++) {
        if (resultado[i] === "✓") continue;

        const idx = copiaSecreto.indexOf(intento[i]);
        if (idx !== -1) {
            resultado[i] = "↺";
            copiaSecreto[idx] = null;
        } else {
            resultado[i] = "✗";
        }
    }

    return resultado;
};

// === Lógica principal del juego ===
const jugar = () => {
    console.log("=== Adivina la Secuencia ===");
    console.log("Debes adivinar una secuencia de 4 dígitos entre 1 y 9.");
    console.log("Tienes 10 intentos.");
    console.log("✓ = correcto | ↺ = existe pero mal ubicado | ✗ = no existe\n");

    const secreto = generarSecuencia();
    let intentos = 0;

    // Para debug (puedes activarlo si quieres ver la secuencia)
    // console.log("DEBUG:", secreto);

    const pedirIntento = () => {
        if (intentos >= 10) {
            console.log("\n❌ Has agotado los 10 intentos.");
            console.log("La secuencia era:", secreto.join(" "));
            return rl.close();
        }

        rl.question(`Intento ${intentos + 1}/10 - Ingresa 4 números separados por espacios: `, (respuesta) => {
            const partes = respuesta.split(" ").filter(Boolean);

            // Validación
            if (partes.length !== 4 || partes.some(n => isNaN(n) || n < 1 || n > 9)) {
                console.log("Entrada inválida. Debes ingresar 4 números entre 1 y 9.\n");
                return pedirIntento();
            }

            const intentoArr = partes.map(Number);
            const resultado = evaluarIntento(secreto, intentoArr);

            console.log("Pistas:", resultado.join(" "));

            // ¿Ganó?
            if (resultado.every(r => r === "✓")) {
                console.log("\n🎉 ¡Felicidades! Adivinaste la secuencia.");
                return rl.close();
            }

            intentos++;
            pedirIntento();
        });
    };

    pedirIntento();
};

jugar();
