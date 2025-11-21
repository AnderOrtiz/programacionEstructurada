import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// === Función para generar números aleatorios según estrategia ===
const esPrimo = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

const generarNumero = (modo) => {
    const min = 1, max = 20;

    if (modo === 1) {
        // Aleatorio
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (modo === 2) {
        // Solo pares
        let n = Math.floor(Math.random() * (max - min + 1)) + min;
        return n % 2 === 0 ? n : n + 1 <= max ? n + 1 : n - 1;
    }

    if (modo === 3) {
        // Solo primos
        const primos = [];
        for (let i = min; i <= max; i++) {
            if (esPrimo(i)) primos.push(i);
        }
        return primos[Math.floor(Math.random() * primos.length)];
    }

    if (modo === 4) {
        // Combinación: aleatorio / par / primo
        const r = Math.floor(Math.random() * 3);
        return generarNumero([1, 2, 3][r]);
    }
};

// === Juego principal ===
const jugar = () => {
    console.log("=== Carrera de Números ===");

    rl.question("Ingresa un número objetivo (o Enter para aleatorio 50–100): ", (input) => {
        let objetivo = parseInt(input);

        if (isNaN(objetivo)) {
            objetivo = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        }

        console.log(`\nObjetivo seleccionado: ${objetivo}`);
        console.log("\nElige estrategia:");
        console.log("1) Aleatorio");
        console.log("2) Solo pares");
        console.log("3) Solo primos");
        console.log("4) Combinación (pares + primos + aleatorio)");

        rl.question("Escribe 1, 2, 3 o 4: ", (modoInput) => {
            let modo = parseInt(modoInput);
            if (![1, 2, 3, 4].includes(modo)) modo = 1;

            let posicion = 0;
            let rechazos = 0;
            const maxRechazos = 3;
            const historial = [];

            const turno = () => {
                const num = generarNumero(modo);
                console.log(`\nNúmero generado: ${num}`);
                console.log(`Posición actual: ${posicion}`);
                console.log(`Rechazos usados: ${rechazos}/${maxRechazos}`);

                rl.question("¿Aceptar este número? (s/n): ", (r) => {
                    const aceptar = r.toLowerCase().startsWith("s");

                    if (aceptar) {
                        posicion += num;
                        historial.push(num);
                        console.log(`Aceptado. Nueva posición: ${posicion}`);

                        if (posicion === objetivo) {
                            console.log("\n🎉 ¡Ganaste! Llegaste exacto al objetivo.");
                            console.log("Historial de números:", historial.join(", "));
                            return rl.close();
                        }

                        if (posicion > objetivo) {
                            console.log(`\n❌ Te pasaste (${posicion} > ${objetivo}). ¡Perdiste!`);
                            console.log("Historial:", historial.join(", "));
                            return rl.close();
                        }

                    } else {
                        rechazos++;
                        console.log(`Número rechazado. Ahora tienes ${rechazos}/${maxRechazos} rechazos.`);

                        if (rechazos >= maxRechazos) {
                            console.log("\n❌ Llegaste al límite de rechazos. ¡Perdiste!");
                            console.log("Historial:", historial.join(", "));
                            return rl.close();
                        }
                    }

                    turno();
                });
            };

            turno();
        });
    });
};

jugar();
