// importar el módulo
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una frase: ", (frase) => {
    console.log(`\n === Tratamiento de cadenas ===`)
    
    //
    const fraseLength = frase.length
    console.log({fraseLength});

    // toUpperCasa
    const fraseToUpperCase = frase.toUpperCase();
    console.log(`La frase en mayusculas es : ${fraseToUpperCase}`)

    // toLowerCase
    const fraseToLowercase = frase.toLocaleLowerCase();
    console.log(`La frase en minusculas es : ${fraseToLowercase}`)

    // trim
    const fraseTrim = frase.trim();
    console.log(`La frase sin espacios al inicio y al final es : ${fraseTrim}`)


    // substring
    const fraseSubString = frase.substring(2,6); // Solo toma 4 caracteres de 2 a 5
    console.log(`Los caracteres de la subfrase son : ${fraseSubString}`)

    // slice
    const subCadenasSlice = frase.slice(0,5);
    console.log(`${subCadenasSlice}`)

    const subCadenasSlice2 = frase.slice(-5);
    console.log(`${subCadenasSlice2}`)

    // replace
    const fraseReempazada = frase.replace("Hola","Adios");
    console.log(`La frase con "Hola" reemplazado por "Adios" es: ${fraseReempazada}`)

    // split
    const fraseArray =  frase.split('');
    console.log(`La frase dicidida en palabras es: ${fraseArray}`);


    const incluyeHola =  frase.includes('hola');
    console.log(`La frase incluye la palabra 'Hola': ${incluyeHola}`);

    const indiceHola =  frase.indexOf('Hola')
    console.log(`EL indice de la primera ocurrencia de 'hola es ${indiceHola}`)

    const empiezaConHola =  frase.startsWith('Hola')
    console.log(`La frase empieza con Hola ${empiezaConHola}`)

    // ends with
    const terminaConHola =  frase.endsWith('adios')
    console.log(`La frase termina con adios ${terminaConHola}`)



    rl.close()
})
