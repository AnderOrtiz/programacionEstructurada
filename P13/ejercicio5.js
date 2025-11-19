import { createInterface } from 'readline';

const rl = createInterface({ input: process.stdin, output: process.stdout });

let nombres = [];
let cantidades = [];

const menu = () => {
    rl.question("1 agregar, 2 vender, 3 mostrar, 4 salir: ", (op) => {
        if (op === "1") {
            rl.question("Producto: ", (p) => {
                rl.question("Cantidad: ", (c) => {
                    nombres.push(p);
                    cantidades.push(parseInt(c));
                    menu();
                });
            });
        } else if (op === "2") {
            rl.question("Producto a vender: ", (p) => {
                let index = nombres.indexOf(p);
                if (index === -1) {
                    console.log("No existe");
                    menu();
                } else {
                    rl.question("Cantidad a vender: ", (cant) => {
                        let q = parseInt(cant);
                        if (q > cantidades[index]) {
                            console.log("No hay suficiente stock");
                        } else {
                            cantidades[index] -= q;
                        }
                        menu();
                    });
                }
            });
        } else if (op === "3") {
            for (let i = 0; i < nombres.length; i++) {
                console.log(nombres[i], cantidades[i]);
            }
            menu();
        } else {
            rl.close();
        }
    });
};

menu();