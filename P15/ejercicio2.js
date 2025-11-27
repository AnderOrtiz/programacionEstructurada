import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });

// ============= UTILIDAD PARA VALIDAR =============
const validarNumero = (n) => !isNaN(n) && n > 0;

// ============= 1. INTERES SIMPLE =============
const interesSimple = () => {
    rl.question("Capital inicial: ", (capital) => {
        capital = parseFloat(capital);
        if (!validarNumero(capital)) return error(interesSimple);

        rl.question("Tasa anual (%): ", (tasa) => {
            tasa = parseFloat(tasa);
            if (!validarNumero(tasa)) return error(interesSimple);

            rl.question("Tiempo (años): ", (tiempo) => {
                tiempo = parseFloat(tiempo);
                if (!validarNumero(tiempo)) return error(interesSimple);

                const interes = capital * (tasa / 100) * tiempo;
                const total = capital + interes;

                console.log(`\nInterés generado: ${interes.toFixed(2)}`);
                console.log(`Monto total final: ${total.toFixed(2)}\n`);

                init();
            });
        });
    });
};

// ============= 2. INTERES COMPUESTO =============
const interesCompuesto = () => {
    rl.question("Capital inicial: ", (capital) => {
        capital = parseFloat(capital);
        if (!validarNumero(capital)) return error(interesCompuesto);

        rl.question("Tasa anual (%): ", (tasa) => {
            tasa = parseFloat(tasa);
            if (!validarNumero(tasa)) return error(interesCompuesto);

            rl.question("Periodos por año (ej: 12 para mensual): ", (n) => {
                n = parseInt(n);
                if (!validarNumero(n)) return error(interesCompuesto);

                rl.question("Años: ", (t) => {
                    t = parseFloat(t);
                    if (!validarNumero(t)) return error(interesCompuesto);

                    const monto = capital * Math.pow(1 + (tasa / 100) / n, n * t);
                    const interes = monto - capital;

                    console.log(`\nInterés generado: ${interes.toFixed(2)}`);
                    console.log(`Monto total final: ${monto.toFixed(2)}\n`);

                    init();
                });
            });
        });
    });
};

// ============= 3. TABLA DE AMORTIZACION =============
const amortizacion = () => {
    rl.question("Monto del préstamo: ", (P) => {
        P = parseFloat(P);
        if (!validarNumero(P)) return error(amortizacion);

        rl.question("Tasa mensual (%): ", (i) => {
            i = parseFloat(i) / 100;
            if (!validarNumero(i)) return error(amortizacion);

            rl.question("Número de cuotas: ", (n) => {
                n = parseInt(n);
                if (!validarNumero(n)) return error(amortizacion);

                const cuota = (P * i) / (1 - Math.pow(1 + i, -n));
                let saldo = P;

                console.log("\nTabla de Amortización:");
                console.log("Mes | Cuota | Interés | Capital | Saldo");

                for (let mes = 1; mes <= n; mes++) {
                    const interes = saldo * i;
                    const capital = cuota - interes;
                    saldo -= capital;

                    console.log(
                        `${mes} | ${cuota.toFixed(2)} | ${interes.toFixed(2)} | ${capital.toFixed(2)} | ${saldo.toFixed(2)}`
                    );
                }

                console.log("");
                init();
            });
        });
    });
};

// ============= 4. SIMULADOR DE AHORRO =============
const ahorro = () => {
    rl.question("Ahorro mensual: ", (deposito) => {
        deposito = parseFloat(deposito);
        if (!validarNumero(deposito)) return error(ahorro);

        rl.question("Tasa anual (%): ", (tasa) => {
            tasa = parseFloat(tasa);
            if (!validarNumero(tasa)) return error(ahorro);

            rl.question("Número de meses: ", (meses) => {
                meses = parseInt(meses);
                if (!validarNumero(meses)) return error(ahorro);

                const tasaMensual = tasa / 100 / 12;
                let saldo = 0;

                console.log("\nMes | Depósito | Interés | Saldo");

                for (let m = 1; m <= meses; m++) {
                    const interes = saldo * tasaMensual;
                    saldo += interes + deposito;

                    console.log(
                        `${m} | ${deposito.toFixed(2)} | ${interes.toFixed(2)} | ${saldo.toFixed(2)}`
                    );
                }

                console.log("");
                init();
            });
        });
    });
};

// ============= 5. COMPARADOR =============
const comparador = () => {
    console.log("\nComparador entre dos escenarios.");
    console.log("Escenario A y Escenario B.");
    console.log("Ambos usan interés compuesto básico.");

    rl.question("Capital A: ", (CA) => {
        CA = parseFloat(CA);
        if (!validarNumero(CA)) return error(comparador);

        rl.question("Tasa A (%): ", (TA) => {
            TA = parseFloat(TA);
            if (!validarNumero(TA)) return error(comparador);

            rl.question("Años A: ", (YA) => {
                YA = parseFloat(YA);
                if (!validarNumero(YA)) return error(comparador);

                rl.question("Capital B: ", (CB) => {
                    CB = parseFloat(CB);
                    if (!validarNumero(CB)) return error(comparador);

                    rl.question("Tasa B (%): ", (TB) => {
                        TB = parseFloat(TB);
                        if (!validarNumero(TB)) return error(comparador);

                        rl.question("Años B: ", (YB) => {
                            YB = parseFloat(YB);
                            if (!validarNumero(YB)) return error(comparador);

                            const montoA = CA * Math.pow(1 + TA / 100, YA);
                            const montoB = CB * Math.pow(1 + TB / 100, YB);

                            console.log(`\nMonto final A: ${montoA.toFixed(2)}`);
                            console.log(`Monto final B: ${montoB.toFixed(2)}`);

                            if (montoA > montoB) {
                                console.log("El escenario A es más beneficioso.\n");
                            } else if (montoB > montoA) {
                                console.log("El escenario B es más beneficioso.\n");
                            } else {
                                console.log("Ambos escenarios generan la misma ganancia.\n");
                            }

                            init();
                        });
                    });
                });
            });
        });
    });
};

// ============= MANEJO DE ERRORES =============
const error = (retryFn) => {
    console.log("\nDato inválido, inténtalo nuevamente.\n");
    retryFn();
};

// ============= MENÚ =============
const menu = `
============= CALCULADORA FINANCIERA =============
1) Interés simple
2) Interés compuesto
3) Tabla de amortización
4) Simulador de ahorro
5) Comparar dos escenarios
6) Salir
`;

const init = () => {
    rl.question(menu + "Selecciona una opción (1-6): ", (opcion) => {
        switch (opcion) {
            case "1": interesSimple(); break;
            case "2": interesCompuesto(); break;
            case "3": amortizacion(); break;
            case "4": ahorro(); break;
            case "5": comparador(); break;
            case "6": 
                console.log("Programa finalizado.");
                rl.close();
                break;
            default:
                console.log("Opción inválida.\n");
                init();
        }
    });
};

init();
