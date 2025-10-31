// --- Factorial ---
function factorial(n) {
    if (n === 0 || n === 1) return 1; // Caso base
    return n * factorial(n - 1);       // Caso recursivo
}

// --- Fibonacci ---
function fibonacci(n) {
    if (n <= 1) return n; // Casos base: fib(0)=0, fib(1)=1
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursión
}

// --- Sumar dígitos ---
function sumarDigitos(num) {
    if (num < 10) return num; // Caso base: un solo dígito
    return (num % 10) + sumarDigitos(Math.floor(num / 10)); // Caso recursivo
}


console.log("Factorial de 5:", factorial(5));
console.log("Fibonacci de 6:", fibonacci(6));
console.log("Suma de dígitos de 987:", sumarDigitos(987));
