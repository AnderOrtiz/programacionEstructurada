import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const calcularDescuento = (precio, miembro) => {
    rl.close();
    const esMiembro = miembro.toLowerCase() === 'si';
    const precioFinal = esMiembro ? precio * 0.8 : precio;
    console.log(`Precio final: $${precioFinal.toFixed(2)}`);
}

rl.question('Ingrese el precio: ', (precio) => {
    rl.question('¿Es miembro? (si/no): ', (miembro) => {
        calcularDescuento((precio * 1), miembro);
    });
});