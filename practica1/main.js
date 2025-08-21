import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// rl.question("Ingrese el palíndromo ", (palindromo) => {
//     const palindromo1 = palindromo.trim().toLowerCase().split('').join(",")
//     const palindromo2 = palindromo.trim().toLowerCase().split('').reverse().join(",")
//     const isPalindromo = (palindromo1 == palindromo2)? 'Es palíndromo ':'No es palíndromo';
//     console.log(isPalindromo);
    
//     rl.close()
// })

rl.question("Ingrese la palabra ", (palabra) => {
    const first = palabra.trim().substring(0,1)
    const isCapitalice = (first === first.toUpperCase())?'Empieza en mayuscula':'No empieza en mayuscula';
    console.log(isCapitalice);
    rl.close()
})

// let word = "Hola esto es Js";

// console.log(word.toLocaleLowerCase());
// console.log(word.toUpperCase());
// console.log(word.trim().split(/\s+/));
// console.log(word.replaceAll(' ',''));
// console.log(word.trim().split('').reverse().join(''));
// console.log(word.replaceAll(' ','').split(''));
