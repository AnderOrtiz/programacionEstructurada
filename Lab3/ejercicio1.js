import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

// peso / altura

const calcularIMC = (peso, altura) => {
    rl.close()
    const IMC = peso / (altura * altura)

    if (IMC < 18.5) {
        console.log("Bajo peso");
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        console.log("Normal");
    } else if (IMC >= 25 && IMC <= 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidad");
    }
}

rl.question('Ingrese el peso (kg): ', peso => {
    rl.question('Ingrese la altura (m): ', altura => {
        calcularIMC((peso * 1), (altura * 1))
    })
})