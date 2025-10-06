import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// const gastos = [];
// let total = 0;

// function pedirGastos(mes = 1) {
//     if (mes > 3) {
//         gastos.forEach((gasto, i) => console.log(`Mes ${i + 1}: $${gasto}`));
//         console.log(`Total: $${total}`);
//         rl.close();
//         return;
//     }

//     rl.question(`Ingresa el gasto del mes ${mes}: `, (gasto) => {
//         const valor = parseFloat(gasto);
//         if (isNaN(valor)) {
//             console.log('Por favor ingresa un número válido.');
//             return pedirGastos(mes); 
//         }

//         gastos.push(valor);
//         total += valor;

//         pedirGastos(mes + 1); 
//     });
// }

// pedirGastos();

// const gasolinalbArr = [];
// let total = 0;

// function pedirGastos(gasolina = 1) {
//     if (gasolina > 3) {
//         const promedio = total/gasolinalbArr.length
//         console.log(`Promedio total de gasto en gasolina es de: $${promedio}`);
//         rl.close();
//         return;
//     }

//     rl.question(`Ingresa el gasto de la gasolina en el viaje ${gasolina}: `, (gasto) => {
//         const valor = parseFloat(gasto);
//         if (isNaN(valor)) {
//             console.log('Por favor ingresa un número válido.');
//             return pedirGastos(gasolina);
//         }

//         gasolinalbArr.push(valor);
//         total += valor;

//         pedirGastos(gasolina + 1);
//     });
// }

// pedirGastos();

const precioProductosArr = [];
let total = 0;

// function pedirGastos(precioProducto = 1) {
//     if (precioProducto > 3) {
//         const IVA = 1.13;
//         console.log('=== TOTAL DE COMPRA ===');

//         console.log(`El subtotal de la compra es de: $${total}`);
//         console.log(`El total (+iva) de la compra es de: $${total*IVA}`);
//         rl.close();
//         return;
//     }

//     rl.question(`Ingresa el precio del producto ${precioProducto}: `, (gasto) => {
//         const valor = parseFloat(gasto);
//         if (isNaN(valor)) {
//             console.log('Por favor ingresa un número válido.');
//             return pedirGastos(precioProducto);
//         }

//         precioProductosArr.push(valor);
//         total += valor;

//         pedirGastos(precioProducto + 1);
//     });
// }

// pedirGastos();

let sueldoArr = [];

rl.question('Ingrese el sueldo base: ', (sueldoBase) => {
    sueldoArr.push(parseFloat(sueldoBase));
    rl.question('Ingrese el bono: ', (bono) => {
        sueldoArr.push(parseFloat(bono));
        rl.question('Ingrese el descuento por seguro: ', (descuento) => {
            sueldoArr.push(parseFloat(descuento));
            rl.close();
            console.log(`El sueldo base: $${sueldoArr[0]}`);
            console.log(`El bono: $${sueldoArr[1]}`);
            console.log(`El descuento por seguro: $${sueldoArr[2]}`);

            const salarioFinal = sueldoArr[0] + sueldoArr[1] - sueldoArr[2];

            console.log(`El salario final: $${salarioFinal}`);
        })
    })
})