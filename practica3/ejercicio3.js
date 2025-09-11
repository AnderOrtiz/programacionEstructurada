/* Ejercicio 3: Lista de Tareas
Implementar un sistema de tareas pendientes con:
• Array de tareas (objetos con título, descripción, completada)
• Método para marcar como completada
• Método para filtrar tareas pendientes */

import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tareas = [
    { titulo: "Proyecto Final", descripcion: "Desarrollar el proyecto final de la materia usando React y TypeScript", completada: false },
    { titulo: "Examen Parcial", descripcion: "Estudiar todos los temas vistos hasta la semana 8 y repasar ejercicios de práctica", completada: true },
    { titulo: "Base de Datos", descripcion: "Normalizar la base de datos hasta 3FN y entregar el diagrama ER", completada: false },
    { titulo: "Física II", descripcion: "Resolver la guía de problemas de movimiento armónico simple", completada: true },
    { titulo: "Laboratorio de Redes", descripcion: "Configurar una red LAN con direccionamiento IP estático", completada: false },
    { titulo: "Ensayo Filosofía", descripcion: "Escribir un ensayo sobre la ética en la tecnología", completada: false },
    { titulo: "Práctica de Algoritmos", descripcion: "Implementar búsqueda binaria y ordenamiento burbuja en JavaScript", completada: true }
]

console.log("=== LISTA DE TAREAS PENDIENTES ===")
const tareasPendientes = tareas.filter(tarea => !tarea.completada)
    tareasPendientes.forEach((tarea, index) => {
    console.log(`${index + 1}. ${tarea.titulo}`)
})

rl.question("Ingrese el número de la tarea recien completada: ", (index) => {
    const buscarTarea = tareasPendientes.find(
        tarea => tarea === tareasPendientes[index - 1]
    )

    if (buscarTarea) {
        buscarTarea.completada = true
        console.log(`Tarea: ${buscarTarea.titulo} marcada como completada`)
    } else {
        console.log("Tarea no encontrada")
    }
    
    rl.close()
})