// const nombre = "Eli";
// const edad = 30;
const altura = 1.50;

// Creación de objetos con object literal
const persona = {
    nombre: "Axl",
    edad: 23,
    altura: 1.63
}

// Imprimir 
console.log(persona.nombre),


// Acceso por punto 
console.log(persona.nombre)
// Acceder a las propiedades por corchete
console.log(persona['edad'])

// Agregamos mas propiedades al objeto
persona.imagen = "imagen.jpg"

console.log(persona);

// Eliminando propiedades del objeto
delete persona.altura;
console.log(persona);

// Modificamos el valor de una propiedad o llave
persona.nombre ="Elizabeth";
console.log(persona);

// Adignado el valor de la propiedades del objeto a una variable
const nom = persona.nombre
console.log(nom);

//Destructuring
// const {nombre} = persona;
// console.log(nombre);

// const {edad} = persona;
// console.log(edad);

const {nombre, edad} = persona;
console.log(nombre, edad);








/**
 * Declara un objeto animal, con las propiedades raza, 
 * tamaño y color muestra el objeto en consola 
 * y luego imprime cada propiedad por separado.
 */
const animal = {
    "raza" : "Thunderiano",
    "tamaño" : 2.05,
    "color" : "Anaranjado",
}

console.log(animal.raza)
console.log(animal.tamaño)
console.log(animal.color)

/**
 * Al objeto animal agrega una nueva propiedad (la que desees) 
 * imprímela en consola y luego elimina la propiedad raza.
 */
animal.nombre = "Leon-Ó"
delete animal.raza;

/**
 * Crea un objeto usuario con las propiedades usuario, email y rol, 
 * usa destructuring para crear variables con esas propiedades y mostrarlas en consola.
 */
const user = {
    'usuario': 'ander-ortiz',
    'email': 'anderortiz.email.com',
    'rol': 'Dev Senior',
}

const {usuario, email, rol} = user
console.log({usuario,email,rol});
