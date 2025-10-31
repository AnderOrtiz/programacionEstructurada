import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const ordenarNumeros = (a, b, c) => {
    rl.close();

    let mayor, medio, menor;

    if (a >= b && a >= c) {
        mayor = a;
        if (b >= c) {
            medio = b; menor = c;
        } else {
            medio = c; menor = b;
        }
    } else if (b >= a && b >= c) {
        mayor = b;
        if (a >= c) {
            medio = a; menor = c;
        } else {
            medio = c; menor = a;
        }
    } else {
        mayor = c;
        if (a >= b) {
            medio = a; menor = b;
        } else {
            medio = b; menor = a;
        }
    }

    console.log(`Orden de mayor a menor: ${mayor}, ${medio}, ${menor}`);
}

rl.question('Ingrese el primer número: ', (a) => {
    rl.question('Ingrese el segundo número: ', (b) => {
        rl.question('Ingrese el tercer número: ', (c) => {
            ordenarNumeros((a * 1), (b * 1), (c * 1));
        });
    });
});
