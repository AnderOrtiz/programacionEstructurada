const estudiante = {
    nombre: "Juan",
    apellido: "Cruz",
    edad: "27 años",
    direccion: {
        paos: "El Salvador",
        calle: "Los almendros",
        numCasa:27,
    },
}

//acceso al objeto

console.log(estudiante);
console.log(estudiante.direccion);
console.log(estudiante['direccion']);

//Agregamos nueva propedad al objeto

estudiante.colorOjos = 'azules'
console.log(estudiante);

// Agregar propiedad al objeto aninado
estudiante.direccion.postal = '503'
console.log(estudiante.direccion);


//modificamos propiedad
estudiante.direccion.numCasa=20
console.log(estudiante.direccion)

//Eliminando propiedades del objeto anidado
delete estudiante.direccion.numCasa;
console.log(estudiante.direccion);
