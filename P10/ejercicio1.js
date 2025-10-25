/**Crea una arrow function llamada filtrarPares que reciba un array de números y
devuelva solo los números pares. */

const filtrarPares = (arr) => arr.filter(n => n % 2 == 0);

numArr = [1, 2, 3, 4, 5, 6];

console.log(filtrarPares(numArr));