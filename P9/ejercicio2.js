function crearPerfil(nombre, edad = 18, ciudad = "No especificada", profesion = "Estudiante") {
    if (!nombre) {
        throw new Error("El nombre es obligatorio");
    }

    return {
        nombre,
        edad,
        ciudad,
        profesion
    };
}

console.log(crearPerfil('Ander'));