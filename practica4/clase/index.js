import { stdin, stdout } from "process";
import readline from "readline";

//entrada de datos desde consola
const rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

//objeto principal, estructura
const inventario = {
    productos: [],

    agregarProducto: function () {
        rl.question("Ingresa el nombre del producto: ", (nombre) => {
            rl.question("Ingrese la cantidad de producto disponible: ", (cantidad) => {
                rl.question("Ingrese el precio unitario del producto: ", (precio) => {
                    rl.question("Ingrese el nombre del proveedor: ", (nombreProveedor) => {
                        rl.question("Ingrese el teléfono del proveedor: ", (telefono) => {
                            const id = Math.floor(Math.random() * 1000 + 1),
                                stock = parseInt(cantidad),
                                decimalPrecio = parseFloat(precio);

                            if (nombre && !isNaN(stock) && !isNaN(decimalPrecio)) {
                                const producto = {
                                    id,
                                    nombre,
                                    cantidad: stock,
                                    precio: decimalPrecio,
                                    proveedor: {
                                        nombreProveedor,
                                        telefono,
                                    },
                                };
                                this.productos.push(producto);
                                console.log("Producto agregado con éxito.");
                            } else {
                                console.log("No se puede agregar el producto, revisa que los datos sean correctos.");
                            }
                            main();
                        });
                    });
                });
            });
        });
    },

    actualizarStock: function () {
        rl.question("Producto que deseas buscar: ", (nombre) => {
            rl.question("Valor nuevo del stock: ", (cantidad) => {
                const producto = this.productos.find((pro) => pro.nombre === nombre),
                    newStock = parseInt(cantidad);

                if (!producto) {
                    console.log("Producto no encontrado.");
                } else if (isNaN(newStock)) {
                    console.log("Valor no válido en el stock.");
                } else {
                    producto.cantidad = newStock;
                    console.log("Producto actualizado:", JSON.stringify(producto, null, 2));
                }
                main();
            });
        });
    },

    listarProductos: function () {
        if (this.productos.length === 0) {
            console.log("No hay productos registrados.");
        } else {
            console.log("Lista de productos:");
            console.log(JSON.stringify(this.productos, null, 2));
        }
        main();
    },

    buscarPorProveedor: function () {
        rl.question("Ingrese el nombre del proveedor a buscar: ", (nombreProveedor) => {
            const encontrados = this.productos.filter(
                (pro) => pro.proveedor.nombreProveedor === nombreProveedor
            );

            if (encontrados.length > 0) {
                console.log("Productos encontrados:");
                console.log(JSON.stringify(encontrados, null, 2));
            } else {
                console.log("No se encontraron productos con ese proveedor.");
            }
            main();
        });
    },
};

function mostrarOpciones() {
    console.log(`
=============================
        SISTEMA INVENTARIO
=============================
1. Agregar Productos 
2. Buscar Productos y actualizar 
3. Listar productos 
4. Buscar por proveedor 
5. Salir del Sistema 
`);
}

function main() {
    mostrarOpciones();
    rl.question("Seleccione una opción: ", (opt) => {
        const opcion = parseInt(opt);
        switch (opcion) {
            case 1:
                inventario.agregarProducto();
                break;
            case 2:
                inventario.actualizarStock();
                break;
            case 3:
                inventario.listarProductos();
                break;
            case 4:
                inventario.buscarPorProveedor();
                break;
            case 5:
                console.log("Saliendo del sistema...");
                rl.close();
                break;
            default:
                console.log("Opción no válida.");
                main();
        }
    });
}

main();