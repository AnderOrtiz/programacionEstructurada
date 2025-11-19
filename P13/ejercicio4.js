import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

let inicio, fin;

rl.question("Número inicial: ", (n1) => {
    inicio = parseInt(n1);
    rl.question("Número final: ", (n2) => {
        fin = parseInt(n2);

        rl.question("Filtro: pares, impares o multiplo: ", (filtro) => {
            if (filtro === "pares") {
                for (let i = inicio; i <= fin; i++) {
                    if (i % 2 === 0) console.log(i);
                }
                rl.close();
            } else if (filtro === "impares") {
                for (let i = inicio; i <= fin; i++) {
                    if (i % 2 !== 0) console.log(i);
                }
                rl.close();
            } else if (filtro === "multiplo") {
                rl.question("Número base: ", (m) => {
                    let base = parseInt(m);
                    for (let i = inicio; i <= fin; i++) {
                        if (i % base === 0) console.log(i);
                    }
                    rl.close();
                });
            } else {
                rl.close();
            }
        });
    });
});
