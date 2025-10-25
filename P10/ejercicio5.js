/**Escribe una IIFE que cree un contador privado con dos métodos
públicos: incrementar y obtenerValor. La IIFE debe retornar un objeto con estos
métodos */

const contador = (function () {
    let valor = 0;
    return {
        incrementar: function () { valor += 1; return valor; },
        obtenerValor: function () { return valor; },
        reiniciar: function () { valor = 0; }
    };
})();

console.log(contador.obtenerValor());
console.log(contador.incrementar());
console.log(contador.incrementar());
contador.reiniciar();
console.log(contador.obtenerValor());