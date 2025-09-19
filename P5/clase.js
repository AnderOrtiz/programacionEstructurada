import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const estudiantes = [
    {nombre: 'Isaac Medrano', nota: 95},
    {nombre: 'Kevin', nota: 85},
    {nombre: 'Isaac Medrano', nota: 35},
    {nombre: 'Isaac Medrano', nota: 95},
]

const grupo = {mejorar: [], exelente:[]},
    numeros = [1,2,3,4,5,6,7,8,9]

estudiantes.forEach(estudiante => {
    if (estudiante.nota < 80){
        console.log(estudiante);
        grupo.mejorar.push(estudiante)
    }else{
        grupo.exelente.push(estudiante)
    }
});


numeros.map((num, index)=>{
    let par = num % 2 ===0
    if (par) {
        console.log(num, 'at index', index);
    }
})

let impares = numeros.map((num, index)=>{
    let par = num % 2 ===0
    if (par) {
        console.log(num, 'at index', index);
    }
});


//filter

let excelente = estudiantes.filter((estudiante) => estudiante.nota > 90)
console.log(excelente);

const almacenamiento = []

// rl.question('Ingresar nombres de estudiaste seguidos por coma: ', (nombres) => {
//     rl.question('Ingresar notas: ', (notas) => {
//         const nombresArr = nombres.split(',')
//         const notasArr = notas.split(',')

//         nombresArr.map((nombre, index) => {
//             almacenamiento.push({estudiante: nombre, notas: parseFloat(notasArr[index])}) 
//         });

//         console.log(almacenamiento);

//         rl.close()
//     })
// })
rl.close()

let notaTotal = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.nota, 0)
console.log('promedio', notaTotal/estudiantes.length);

const grupos = estudiantes.reduce((acc, estudiante) => {
    if (estudiante.nota >= 90) {
        acc.excelente.push(estudiante)
    } else if (estudiante.nota >= 70) {
        acc.bueno.push(estudiante)
    } else {
        acc.mejorar.push(estudiante)
    }
    return acc
}, {excelente: [], bueno: [], mejorar: []})

console.log(grupos);

const index = estudiantes.findIndex((estudiante) => estudiante.nombre == 'Kevin')
console.log(`index: ${index} data: ${estudiantes[index]}`);
