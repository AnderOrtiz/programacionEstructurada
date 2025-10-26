import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const calcularSalarioTotal = (salarioBase, horasExtras, valorHora) => {
    rl.close();
    const pagoExtras = horasExtras * (valorHora * 1.5),
        salarioTotal = salarioBase + pagoExtras;
    return salarioTotal;
};

rl.question("Ingrese su salario base: ", (salarioBase) => {
    rl.question("Ingrese el número de horas extras trabajadas: ", (horasExtras) => {
        rl.question("Ingrese el valor de una hora normal: ", (valorHora) => {

            const total = calcularSalarioTotal((salarioBase * 1), (horasExtras * 1), (valorHora * 1));

            console.log(`Su salario total es: $${total.toFixed(2)}`);
        });
    });
});
