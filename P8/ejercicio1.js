

// --- Función formatearSaludo ---
/*esta función lo que hace es retornar un saludo 
que depende la hora dice buenos dias o buenas tardes, etc.
si es mayor a 18 le agrega un tratado y luego su nombre y el complemento*/
function formatearSaludo(persona, horaDelDia) {
    const { nombre, edad } = persona;
    let saludoHora;

    switch (horaDelDia.toLowerCase()) {
        case 'mañana': saludoHora = 'Buenos días'; break;
        case 'tarde': saludoHora = 'Buenas tardes'; break;
        case 'noche': saludoHora = 'Buenas noches'; break;
        default: saludoHora = 'Hola';
    }

    const tratamiento = edad >= 18 ? 'Sr./Sra.' : '';
    return `${saludoHora} ${tratamiento} ${nombre}, que tenga una excelente ${horaDelDia}.`;
}

// --- Función calcularArea ---
// Esta función multiplica pi*r^2 y
// retorna el area con solo 2 decimales
function calcularArea(radio) {
    const area = Math.PI * Math.pow(radio, 2);
    return area.toFixed(2);
}

console.log(formatearSaludo({ nombre: 'Anderson', edad: 15 }, 'mañana'));
console.log(formatearSaludo({ nombre: 'Lucía', edad: 21 }, 'tarde'));

console.log(`Área del círculo (radio 5): ${calcularArea(5)}`);
console.log(`Área del círculo (radio 10): ${calcularArea(10)}`);


