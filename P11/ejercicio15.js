import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

// Verificar si la edad es válida
const verificarEdad = (edadInput) => {
    const edad = parseInt(edadInput.trim());

    if (isNaN(edad) || edad <= 0) {
        console.log('Por favor, ingrese una edad válida.');
        rl.close();
    } else {
        rl.question('Ingrese el día de la semana: ', (diaInput) => {
            procesarBoleto(edad, diaInput);
        });
    }
};

// Calcular el precio final del boleto
const procesarBoleto = (edad, diaInput) => {
    const dia = diaInput.trim().toLowerCase();
    const precioBase = 10;
    let descuento = 0;

    if (dia === 'miércoles' || dia === 'miercoles') {
        descuento = 0.25;
    }

    if (edad < 12 || edad > 65) {
        descuento = Math.max(descuento, 0.40);
    }

    const precioFinal = precioBase * (1 - descuento);
    console.log(`Precio final del boleto: $${precioFinal.toFixed(2)}`);
    rl.close();
};

rl.question('Ingrese su edad: ', verificarEdad);