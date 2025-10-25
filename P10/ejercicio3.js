/**Crea una arrow function llamada ordenarPorLongitud que reciba un array de strings
y lo devuelva ordenado por la longitud de cada palabra (de menor a mayor). */

const ordenarPorLongitud = (arrStrings) => arrStrings.toSorted((a, b) => a.length - b.length);

console.log(ordenarPorLongitud(["perro", "gato", "elefante", "ho"]));