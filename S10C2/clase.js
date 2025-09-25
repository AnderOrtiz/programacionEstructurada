function crearContador() {
    let contador = 0;
    return function () {
        contador++;
        return contador
    }
}

let contador1 = crearContador();
let contador2 = crearContador();
console.log(contador1());
console.log(`${contador1()} <= constador 1\n`);
console.log(`Hola soy contador2, mi valor es: ${contador2()}`);

// El saldo de una cuenta bancaria
function cuentaDeAhorro(inicial) {
    let saldo = inicial;
    return {
        verSaldo: () => saldo,
        depositar: x => saldo += x,
        retirar: x => saldo -= x,
    }
}


let micuenta = cuentaDeAhorro(100)
micuenta.depositar(250)
micuenta.retirar(110)
console.log(`tu saldo es: ${micuenta.verSaldo()}`)


let numeros = [1,2,3,4]
function recorrerArrays (arr, callback) {
    for (const item of arr) {
        callback(item)
    }
}

recorrerArrays(numeros, n => console.log(n*n));

function procesarUsuario(nombre, callback) {
    console.log(`procesando usuario ${nombre}, espere...`);
    callback(nombre)
}

procesarUsuario('Ander', function (nombre) {
    console.log(`Ya estas siendo procesado ${nombre}`);
})


const sumar = (a,b) => a + b
const saludo = () => "Hola mundo"
console.log(sumar(40,55))
console.log(saludo())

const pares = [2,4,6,8]
const exponente = pares.map(x => x * x)
console.log("Array normal", pares)
console.log("Elevado a si mismo", exponente)