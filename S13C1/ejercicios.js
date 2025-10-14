const numAlCuadrado = (num) => console.log(`EL cuadrado de ${num} es: ${num * num}`);

numAlCuadrado(3);

const avg3Num = (num1, num2, num3) => {
    const avg = (num1 + num2 + num3) / 3;
    return avg
}

console.log(`El promedio es de: ${avg3Num(2, 3, 4)}`);

const areaTriangulo = (b, h) => b * h;

console.log(`El area del triángulo es de ${areaTriangulo(4, 7)}`);