const factorialIIFE = (n => (function (x) {
    if (x < 0) throw new Error("No existe factorial para negativos");
    let r = 1;
    for (let i = 2; i <= x; i++) r *= i;
    return console.log(`El factorial de ${x} es ${r}`);
})(n));

factorialIIFE(6)