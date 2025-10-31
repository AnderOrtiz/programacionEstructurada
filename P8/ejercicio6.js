/**Esta función resibe varios argumentos pero solo nombre es obligatorio
 * los demas tienen un valor por defecto
 */
function crearPerfil(nombre, edad = 18, ciudad = "No especificada", profesion = "Estudiante") {
    return { nombre, edad, ciudad, profesion };
}

// Ejemplos de como quedaria si usamos lo valores por defecto
console.log(crearPerfil("Anderson"));
console.log(crearPerfil("Lucía", 25));
console.log(crearPerfil("Carlos", 30, "Guatemala"));
console.log(crearPerfil("Sofía", 28, "Madrid", "Ingeniera"));
