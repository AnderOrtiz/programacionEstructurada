// importar el módulo
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// rl.question("Ingrese una el código:( ej. PED-2025-00045) ", (codigo) => {
//     codigo = codigo.trim()
//     const year = codigo.substring(4,8);
//     const orden = codigo.substring(9,14);
//     console.log(`Año: ${year} \nOrden: ${orden}`)

// rl.question("Ingrese su nombre completo: ", (fullName) => {
//     fullName = fullName.trim().replaceAll(' ', '')
//     const fullNameLength = fullName.length
//     console.log(`El tamanño del nombre es de ${fullNameLength}`)

// a@gmail.com
// rl.question("Ingrese su correo: ", (correo) => {

//     correo = correo.trim().toLocaleLowerCase()
//     const dominio = correo.slice(-10, )

//     const verification = (dominio == '@gmail.com')? 
//     `Correo normalizado: ${correo}`: 
//     'Dominio del correo no valido';

//     console.log(verification)


// rl.question("Código aleatorio: ", (randomCode) => {

//     randomCode = randomCode.trim()

//     const last4Caracters = randomCode.slice(-4,)

//     console.log(last4Caracters)


rl.question("Ingrese el texto: ", (texto) => {

    texto = texto.trim()

    const coincidencia = texto.indexOf('error')

    console.log(coincidencia)

    rl.close()
})

