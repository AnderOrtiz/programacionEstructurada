let a = 15;
let b = 4;

// suma = a+b;
// console.log(`La suma de a + b es: ${suma} `);
// console.log('Resta: ', a - b);
// console.log('Multiplicación: ', a * b);
// console.log('División: ', a / b);
// console.log('Modulo: ', a % b);

//OPERADORES DE COMPARACIÓN
// let edad1 = 20;
// let edad2 = 25;

// console.log("Comparación estracta ", edad1 === edad2);



// console.log("Edad 1 > Edad 2?", edad1 > edad2);
// console.log("Edad 1 < Edad 2?", edad1 < edad2);
// console.log("Edad 1 == Edad 2?", edad1 == edad2);
// console.log("Edad 1 != Edad 2?", edad1 != edad2);
// console.log("Edad 1 >= Edad 2?", edad1 >= edad2);
// console.log("Edad 1 <= Edad 2?", edad1 <= edad2);

//OPERADORES DE ASIGNACIÓN

let puntos = 0;

puntos += 10;
puntos -= 5;
puntos *= 2;

console.log(puntos);

let tieneTarea = false;
let estudio = true;

let puedeSalir = !tieneTarea && estudio;
// console.log(`Puede salir a jugar? ${puedeSalir}`);


//OPERADOR TERNARIO
let numero = 9;

let resultado = (numero % 2 === 0 )? `Es divisible es entre 2` : `No es divisible es entre 2` ;
console.log(resultado);
