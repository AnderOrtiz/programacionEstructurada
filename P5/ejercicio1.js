let transacciones = [
    { id: 1, tipo: "deposito", monto: 1000, fecha: "2024-01-15", categoria: "salario" },
    { id: 2, tipo: "retiro", monto: 200, fecha: "2024-01-16", categoria: "compras" },
    { id: 3, tipo: "deposito", monto: 500, fecha: "2024-01-17", categoria: "freelance" }
];


function procesarTransacciones(...nuevasTransacciones) { // este no es spread operator es rest operator
    nuevasTransacciones.forEach(tx => {
        if (!tx.id || !tx.tipo || !tx.monto || !tx.fecha) {
            throw new Error("Transacción inválida: falta información");
        }
    });

    transacciones = [...transacciones, ...nuevasTransacciones]; //Este es spread operator

    console.log("Transacciones actualizadas:", transacciones);
}


function calcularBalance() {
    return transacciones.reduce((balance, tx) => {
        if (tx.tipo === "deposito") return balance + tx.monto;
        if (tx.tipo === "retiro") return balance - tx.monto;
        return balance;
    }, 0);
}


function analizarGastos(periodo = "mes") {

    const gastos = transacciones.filter(tx => tx.tipo === "retiro");

    return gastos.reduce((resumen, tx) => {
        resumen[tx.categoria] = (resumen[tx.categoria] || 0) + tx.monto;
        return resumen;
    }, {});
}


function buscarTransacciones(criterios = {}) {
    const { tipo, categoria, fecha } = criterios;
    // console.log({ tipo }, { categoria }, { fecha });

    return transacciones.filter(tx => {
        return (!tipo || tx.tipo === tipo) &&
            (!categoria || tx.categoria === categoria) &&
            (!fecha || tx.fecha === fecha);
    });
}

procesarTransacciones(
    { id: 4, tipo: "retiro", monto: 150, fecha: "2024-01-20", categoria: "transporte" },
    { id: 5, tipo: "deposito", monto: 1200, fecha: "2024-01-22", categoria: "salario" }
);

console.log("Balance actual:", calcularBalance());

console.log("Gastos por categoría:", analizarGastos());

console.log("Buscar solo depósitos:", buscarTransacciones({ categoria: "transporte" }));