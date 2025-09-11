
/* Ejercicio 2: Registro de Calificaciones
Crear un sistema que maneje:
• Array de materias con sus calificaciones
• Método para calcular promedio
• Método para determinar estado académico
 */

import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let asignaturas = [
    {nombre: "Métodos I", nota: 9.5},
    {nombre: "Matemáticas I", nota: 8.4},
    {nombre: "Programación I", nota: 7.7},
    {nombre: "Diseño Web", nota: 8.6},
    {nombre: "Inglés I", nota: 9.8},
]

const estadoAcademico = ["activo", "inactivo", "egresado", "expulsado"]

function calcularPromedio() {
    const sumaNotas = asignaturas.reduce((acum, materia) => acum + materia.nota, 0),
        promedio = sumaNotas / asignaturas.length;
    console.log(`El promedio de notas es: ${promedio.toFixed(2)}`)
}

function mostrarEstados() {
    console.log("==== Estado académico del estudiante ====")
    estadoAcademico.forEach((estado, i) => {
        console.log(`${i + 1} - ${estado.toUpperCase()}`)
    })
    console.log("0 - Salir")


    rl.question("Seleccione una opción: ", (seleccion) => {
        const opcion = parseInt(seleccion)

        if (opcion >= 1 && opcion <= estadoAcademico.length) {
            const estadoSeleccionado = estadoAcademico[opcion - 1]
            console.log(`El estado actual del estudiante es: ${estadoSeleccionado.toUpperCase()}`)
        } else if (opcion === 0) {
            console.log("Muchas gracias por usar el sistema")
        } else {
            console.log("Opción inválida. Inténtelo nuevamente")
        }
        rl.close()
    })
}

(function main() {
    calcularPromedio()
    mostrarEstados()
})();
