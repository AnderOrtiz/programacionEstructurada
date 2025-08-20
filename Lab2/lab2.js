import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/* 1.Solicita un nombre completo de usuario, muestra en consola los primeros 5 caracteres de ese nombre, sin espacios, en minúscula y agrega @gmail.com al final para crear una dirección de correo con ese nombre de usuario. 3pts*/
// rl.question("Ingrese su nombre completo ", (nombre) => {
//     nombre = nombre.trim().toLowerCase().replaceAll(' ','') //puse replaceAll en el caso que el primer nombre sea menor a 5 caracteres
//     const gmail = nombre.substring(0,5) + '@gmail.com';
//     console.log({gmail})
//     rl.close()
// })


/*2.Pide al usuario un texto y reemplaza todas las vocales de este texto por símbolos (a=@, e=#, i=$, o=%, u=&). 3pts*/
// rl.question("Ingrese el texto ", (text) => {
//     text = text.trim().replaceAll('a','@').replaceAll('2','#').replaceAll('i','$').replaceAll('o','%').replaceAll('u','&')
//     console.log({text})
//     rl.close()
// })


/*3.	Solicita al usuario una frase que contenga la palabra usuario y muestra en qué posición aparece. 2pts */
// rl.question("Ingrese una frase con la palabra usuario en ella: ", (user) =>{
//     const coincidencia = user.indexOf('usuario')
//     console.log(`Coincidencia en la posición ${coincidencia}`)
//     rl.close()
// })


/*4.	Solicita al usuario una frase y muestra los primeros 6 caracteres de esa frase ingresada. 2pts */
// rl.question("Ingrese una frase: ", (frase) =>{
//     const primeros6 = frase.substring(0,6)
//     console.log(`Los primeros 6 caracteres son: ${primeros6}`)
//     rl.close()
// })
