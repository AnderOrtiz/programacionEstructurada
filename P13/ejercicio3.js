import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

let a = 0;
let b = 0;
let c = 0;

const votar = (entrada) => {
    let voto = entrada.toUpperCase();
    if (voto === "A") a++;
    else if (voto === "B") b++;
    else if (voto === "C") c++;

    rl.question("Voto (A/B/C o fin): ", (v) => {
        if (v === "fin") {
            if (a > b && a > c) console.log("Gana A");
            else if (b > a && b > c) console.log("Gana B");
            else if (c > a && c > b) console.log("Gana C");
            else console.log("Empate");
            rl.close();
        } else {
            votar(v);
        }
    });
};

rl.question("Voto inicial (A/B/C o fin): ", votar);
