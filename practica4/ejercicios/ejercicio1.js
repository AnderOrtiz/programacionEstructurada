/**
 * Ejercicio 1: Registro de Empleados
    • Crea un programa que permita:
    • Registrar empleados con: nombre, edad, departamento y salario
    • Mostrar todos los empleados
    • Buscar empleado por nombre
    • Calcular salario promedio
 */

import { log } from 'console';
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registroEmpleados = {
    empleados: [{
        id : 1,
        nombre : 'Ander',
        edad: 19,
        departamento: "Jan Miguel",
        salario: 100,
    }],

    registrarEmpleado: () => {
        rl.question('Ingrese el nombre: \n', (nombre) => {
            rl.question('Ingrese la edad \n', (edadText) => {
                rl.question('Ingrese el departamento\n', (departamento) => {
                    rl.question('Ingrese el salario \n', (salarioText) => {

                        const id = Math.floor(Math.random() * 1000 + 1),
                            edad = parseInt(edadText),
                            salario = parseFloat(salarioText);

                        if (nombre && !isNaN(edad) && departamento && !isNaN(salario)) {
                            const empleado = {
                                id,
                                nombre,
                                edad,
                                departamento,
                                salario,
                            }

                            if (registroEmpleados.empleados.push(empleado)) {
                                console.log(`Emepleado agregado con exito ${JSON.stringify(empleado, null, 2)}`);
                            } else {
                                console.error('No pudimos agregar el empleado');
                            };
                        };
                        main();
                    })
                })
            })
        })
    },

    mostrarEmpleados: () => {
        if (registroEmpleados.empleados.length === 0) {
            console.warn('No hay empleados')
        } else {
            console.log('Lista de empleados');
            console.log(JSON.stringify(registroEmpleados.empleados, null, 2));
        }
        main()
    },

    buscarEmpleado: () => {
        rl.question('Ingrese el nombre del empleado \n', (nombreEmpleado) => {

            const encontrados = registroEmpleados.empleados.filter(
                user => user.nombre.toLowerCase() === nombreEmpleado.toLowerCase()
            );

            if (encontrados.length > 0) {
                console.log("Empleados encontrados:");
                console.log(JSON.stringify(encontrados, null, 2));
            } else {
                console.log("No se encontraron los empleados.");
            }
            main();

        })
    },

    salarioPromedio: () => {
        let salarios = 0
        registroEmpleados.empleados.forEach(empleado => {
            salarios += empleado.salario
        });
        const salarioPromedio = salarios/registroEmpleados.empleados.length

        console.log({salarioPromedio});
        
        main()
    }


}

function mostrarOpciones() {
    console.log(`
=============================
    REGISTRO DE EMPLEADOS
=============================
1. Agregar empleado 
2. Mostar empleados
3. Buscar empleado
4. Calcular salario promedio
5. Salir del Sistema 
`);
}

function main() {
    mostrarOpciones();
    rl.question("Seleccione una opción: ", (opt) => {
        const opcion = parseInt(opt);
        switch (opcion) {
            case 1:
                registroEmpleados.registrarEmpleado();
                break;
            case 2:
                registroEmpleados.mostrarEmpleados();
                break;
            case 3:
                registroEmpleados.buscarEmpleado();
                break;
            case 4:
                registroEmpleados.salarioPromedio();
                break;
            case 5:
                rl.close();
                break;
            default:
                console.log("Opción no válida.");
                main();
        }
    });
}

main();