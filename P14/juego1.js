import readline from "readline";

// Crear interfaz readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// --- Jugadores ---
const jugador1 = { nombre: "Jugador 1", puntos: 0, racha: 0 };
const jugador2 = { nombre: "Jugador 2", puntos: 0, racha: 0 };

let turno = 1; // alterna turnos
let preguntasTotales = 10; // 5 por jugador

// --- Variables globales del nivel ---
let minNum = 10;
let maxNum = 99;

// === Función para crear número según nivel ===
const crearNumero = () => {
    return String(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
};

// === Generar operación ===
const generarOperacion = () => {

    const numero = crearNumero();
    const op = Math.floor(Math.random() * 4) + 1;

    const mitad = Math.floor(numero.length / 2);
    const n1 = parseInt(numero.slice(0, mitad));
    const n2 = parseInt(numero.slice(mitad));

    let operador, resultadoCorrecto;

    switch (op) {
        case 1: operador = "+"; resultadoCorrecto = n1 + n2; break;
        case 2: operador = "-"; resultadoCorrecto = n1 - n2; break;
        case 3: operador = "*"; resultadoCorrecto = n1 * n2; break;
        case 4: operador = "/"; resultadoCorrecto = Number((n1 / n2).toFixed(2)); break;
    }

    return { n1, n2, operador, resultadoCorrecto };
};

// === Lógica de turnos ===
const jugarTurno = () => {

    if (turno > preguntasTotales) {
        console.log("\n=== RESULTADOS FINALES ===");
        console.log(`${jugador1.nombre}: ${jugador1.puntos} puntos`);
        console.log(`${jugador2.nombre}: ${jugador2.puntos} puntos`);

        if (jugador1.puntos > jugador2.puntos) console.log("🏆 ¡Gana Jugador 1!");
        else if (jugador2.puntos > jugador1.puntos) console.log("🏆 ¡Gana Jugador 2!");
        else console.log("🤝 Empate total");

        return rl.close();
    }

    const jugadorActual = turno % 2 === 1 ? jugador1 : jugador2;

    console.log(`\nPregunta ${turno}/10 — Turno de ${jugadorActual.nombre}`);

    const { n1, n2, operador, resultadoCorrecto } = generarOperacion();

    rl.question(`¿Resultado de ${n1} ${operador} ${n2}? `, (respuesta) => {
        const userValue = Number(respuesta.replace(",", "."));

        if (isNaN(userValue)) {
            console.log("❌ No es un número. Se cuenta como incorrecto.");
            jugadorActual.racha = 0;
        } else if (userValue === resultadoCorrecto) {
            console.log("✅ Correcto! +10 puntos");
            jugadorActual.puntos += 10;
            jugadorActual.racha++;

            if (jugadorActual.racha === 3) {
                console.log("🔥 Racha de 3! +5 puntos adicionales");
                jugadorActual.puntos += 5;
                jugadorActual.racha = 0;
            }
        } else {
            console.log(`❌ Incorrecto. La respuesta era ${resultadoCorrecto}`);
            jugadorActual.racha = 0;
        }

        turno++;
        jugarTurno();
    });
};

// === Preguntar nivel ===
const seleccionarNivel = () => {
    console.log("Selecciona nivel:");
    console.log("1) Fácil (10–99)");
    console.log("2) Medio (1000–9999)");
    console.log("3) Difícil (100000–9999999)");

    rl.question("Escribe 1,2 o 3: ", (opcion) => {
        switch (opcion) {
            case "1": minNum = 10; maxNum = 99; break;
            case "2": minNum = 1000; maxNum = 9999; break;
            case "3": minNum = 100000; maxNum = 9999999; break;
            default:  minNum = 10; maxNum = 99;
        }

        console.log("\nCada jugador responderá 5 preguntas.");
        console.log("Gana el que tenga más puntos.\n");

        jugarTurno();
    });
};

seleccionarNivel();
