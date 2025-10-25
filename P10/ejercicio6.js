/** Implementa una función crearCalculadoraAvanzada con funciones anidadas que
demuestre el scope chain en 3 niveles. La función externa define operación, la
intermedia define el primer número, y la interna recibe el segundo número y
ejecuta la operación */


function crearCalculadoraAvanzada(operacion) {
    return function (a) {

        return function (b) {

            switch (operacion) {
                case "sumar":
                    return a + b;
                case "restar":
                    return a - b;
                case "multiplicar":
                    return a * b;
                case "dividir":
                    if (b === 0) return "Error: división entre cero";
                    return a / b;
                default:
                    return "Operación no válida";
            }
        };
    };
}
