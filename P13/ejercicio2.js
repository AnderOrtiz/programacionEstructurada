import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

let productos = [];
let precios = [];
let total;
let contador = 1;
let intentos = 3;

const pedirProducto = (entrada) => {
    productos.push(entrada);
    rl.question("Precio: ", (p) => {
        precios.push(parseFloat(p));
        if (contador < total) {
            contador++;
            rl.question("Producto: ", pedirProducto);
        } else {
            rl.question("Producto a buscar: ", buscar);
        }
    });
};

const buscar = (entrada) => {
    let index = productos.indexOf(entrada);
    if (index !== -1) {
        console.log("Precio:", precios[index]);
        rl.close();
    } else {
        intentos--;
        if (intentos > 0) {
            rl.question("No existe. Intenta de nuevo: ", buscar);
        } else {
            console.log("Producto no encontrado");
            rl.close();
        }
    }
};

rl.question("Cantidad de productos: ", (n) => {
    total = parseInt(n);
    rl.question("Producto: ", pedirProducto);
});
