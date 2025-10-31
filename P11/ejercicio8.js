import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const mostrarMes = (numero) => {
    rl.close();
    numero = parseInt(numero);

    let mes,
        dias;

    switch (numero) {
        case 1: mes = 'Enero'; dias = 31; break;
        case 2: mes = 'Febrero'; dias = 28; break;
        case 3: mes = 'Marzo'; dias = 31; break;
        case 4: mes = 'Abril'; dias = 30; break;
        case 5: mes = 'Mayo'; dias = 31; break;
        case 6: mes = 'Junio'; dias = 30; break;
        case 7: mes = 'Julio'; dias = 31; break;
        case 8: mes = 'Agosto'; dias = 31; break;
        case 9: mes = 'Septiembre'; dias = 30; break;
        case 10: mes = 'Octubre'; dias = 31; break;
        case 11: mes = 'Noviembre'; dias = 30; break;
        case 12: mes = 'Diciembre'; dias = 31; break;
        default:
            console.log('Error: número fuera de rango (1-12)');
            return;
    }

    console.log(`Mes: ${mes}, tiene ${dias} días.`);
}

rl.question('Ingrese un número del 1 al 12: ', mostrarMes);
