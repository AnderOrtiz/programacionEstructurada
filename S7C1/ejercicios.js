/**
 * Una tienda online gestiona la información de sus productos. Cada producto debe tener:
Detalles (nombre, precio, categoria)
Inventario (stock, proveedor, ubicacion)
Historial (fechaIngreso, ultimaVenta, ventasTotales)
Tareas a realizar:
Crear el objeto producto.
Mostrar únicamente los detalles.
Aumentar el stock en 50 unidades.
Cambiar la categoría a "Electrónica".
Extraer el nombre y precio en variables separadas.
Mostrar el objeto actualizado.
 */

const miniBatman = {
    detalles: {
        nombre: 'Mini Batman',
        precio: 5.00,
        categoria: 'Juguete'
    },
    inventario: {
        stock: 20,
        proveedor: 'Tooncast',
        ubicacion: 'Narnia',
    },
    historial: {
        fechaDeIngreso: '22-12-2025',
        ultimaVenta: '23-12-2025',
        ventasTotales: 10,
    }
}

console.log(miniBatman.detalles);

miniBatman.inventario.stock = 50
console.log(miniBatman.inventario);

miniBatman.inventario.categoria = "Electrónica"
console.log(miniBatman.inventario);

const {nombre, precio} = miniBatman.detalles
console.log({nombre, precio});

console.log(miniBatman);



/**
 * Una aplicación móvil necesita gestionar los perfiles de sus usuarios. Se requiere crear un objeto anidado que contenga:
Información personal (nombre, edad, email)
Preferencias de la aplicación (idioma, notificaciones, tema)
Estadísticas de uso (fechaRegistro, ultimoAcceso, numeroSesiones).
Tareas a realizar:
Crear un objeto perfilUsuario con tres objetos anidados.
Mostrar cada sección de información por separado.
Cambiar el idioma de "español" a "inglés".
Actualizar la fecha de último acceso a la fecha actual.
Eliminar una preferencia innecesaria.
Extraer el email y el idioma en variables separadas.
Mostrar el perfil completo actualizado
 */

const perfilUsuario = {
    informacionPersonal: {
        nombre: 'Ander',
        edad: 19,
        email: 'ander@a.com'
    },
    preferencias: {
        idioma: 'Español',
        notificaciones: true,
        tema: 'oscuro'
    },
    estadisticasDeUso:{
        fechaRegistro: '1-09-2025',
        ultimoAcceso: '30-09-2025',
        numeroSesioes: 30,
    }
}

console.log(perfilUsuario.informacionPersonal);
console.log(perfilUsuario.preferencias);
console.log(perfilUsuario.estadisticasDeUso);

perfilUsuario.preferencias = 'Inglés';
perfilUsuario.estadisticasDeUso.ultimoAcceso = new Date
delete perfilUsuario.preferencias.tema

const idioma = perfilUsuario.preferencias
const {email} = perfilUsuario.informacionPersonal
console.log({idioma, email});
console.log(perfilUsuario);



/**
 * Una biblioteca maneja información de sus libros:
Información (titulo, autor, genero)
Disponibilidad (copias, prestados, ubicacion)
Registro (fechaPublicacion, fechaIngreso, ultimaRevision)
Tareas a realizar:
Crear el objeto libro.
Mostrar la información del autor.
Calcular cuántos ejemplares disponibles quedan (copias - prestados).
Actualizar la ultimaRevision con la fecha actual.
Cambiar el género del libro.
Extraer titulo y ubicacion en variables.
Mostrar el objeto actualizado.
 */

const libro = {
    informacion: {
        titulo: 'Harry Potter y la piedra filosofal',
        autor: 'J. K. Rowling',
        genero: 'magia',
    },
    disponibilidad: {
        copias: 2,
        prestados: 1,
        ubicacion: '2da planta'
    },
    registro:{
    fechaPublicacion:'01-09-2020',
    fechaIngreso:'01-10-2020',
    ultimaRevision:'10-09-2020',
},
}

console.log(libro.informacion.autor)
const disponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados
console.log(disponibles);
libro.registro.ultimaRevision = new Date
libro.informacion.genero = 'Ciencia-ficción';
const {titulo} = libro.informacion
const {ubicacion} = libro.disponibilidad
console.log({titulo, ubicacion});

console.log(libro);
