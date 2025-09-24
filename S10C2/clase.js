const numeros = [10, 20, 40, 50];

console.table(numeros);

const meses = new Array('marzo', 'septiembre', 'noviembre');

console.table(meses);

const deTodo = ['que tal', 20, null, true, { nombre: 'Ander', trabajo: 'programador' }, [1, 2, 3]];
console.log(deTodo[5][1]);

//Modificamos los valores de un arreglo
numeros[1] = 80;
console.log(numeros);

meses.push('abril');
console.log(meses);

meses.pop();
console.log(meses);

meses.shift();
console.log(meses);

meses.unshift("enero");
console.log(meses);

for (i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}