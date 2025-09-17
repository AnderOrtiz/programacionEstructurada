/**Ejercicio 1 */

const empleado = {
    nombreCompleto: 'Anderson Isaac Ortiz',
    edad: 19,
    salario: 100,
    activo: true,
    fechaIngreso: new Date(),
    habilidades: ['Programación', 'Composición', 'Analisis']
}

empleado.departamento = 'Contabilidad'
empleado.salario *= 0.15
delete empleado.activo
const habilidades = empleado.habilidades.join(', ')

console.log(`=== FICHA DE EMPLEADO ===
Nombre: ${empleado.nombreCompleto}
Edad: ${empleado.edad} años Salario: $${empleado.salario}
Departamento: ${empleado.departamento}
Año de ingreso: ${empleado.fechaIngreso.getFullYear()}
Habilidades (${empleado.habilidades.length}): ${habilidades}`)

/**Ejercicio 2 */

const computadora = {
    marca:'Asus',
    modelo:'Asus gamming 2025',
    especificaiones: {
        procesador:'14016k',
        ram: 12,
        almacenamiento: 500,
    }
}

computadora.especificaiones.ram = 16;
computadora.especificaiones.sistemaOperativo = 'Windows 11';
delete computadora.especificaiones.almacenamiento

console.log(`
    ===Computadora ${computadora.modelo}===
    marca = ${computadora.marca}
    modelo = ${computadora.modelo}
    especificaciones:
        procesador = ${computadora.especificaiones.procesador}
        ram = GB${computadora.especificaiones.ram}
        Sistema operativo = ${computadora.especificaiones.sistemaOperativo}
    `);


/**Ejercicio 3 */
// Declaración del objeto vehiculo
let vehiculo = {
    marca: "Toyota",
    año: 2022,
    seguro: {
        compania: "Seguros SV",
        numeroPoliza: "ABC12345",
        vigente: true
    }
};

vehiculo.seguro.compania = "Aseguradora Mundial";

vehiculo.seguro.fechaVencimiento = "2026-05-10";

delete vehiculo.seguro.vigente;

console.log(`Vehículo asegurado:
Marca: ${vehiculo.marca}
Año: ${vehiculo.año}
Seguro:
    Compañía: ${vehiculo.seguro.compania}
    Número de Póliza: ${vehiculo.seguro.numeroPoliza}
    Fecha de Vencimiento: ${vehiculo.seguro.fechaVencimiento}
    `);