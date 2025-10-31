import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const mostrarDiaSemana = (numero) => {
    rl.close();
    numero = parseInt(numero);

    let dia;
    switch (numero) {
        case 1: dia = 'Lunes'; break;
        case 2: dia = 'Martes'; break;
        case 3: dia = 'Miércoles'; break;
        case 4: dia = 'Jueves'; break;
        case 5: dia = 'Viernes'; break;
        case 6: dia = 'Sábado'; break;
        case 7: dia = 'Domingo'; break;
        default:
            console.log(' Error: número fuera de rango (1-7)');
            return;
    }

    console.log(`Día de la semana: ${dia}`);
}

rl.question('Ingrese un número del 1 al 7: ', mostrarDiaSemana);
