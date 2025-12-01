// Exportamos un arreglo llamado "libros" para que pueda ser usado en otros módulos
export const libros = [
    {
        // Título del libro
        titulo: "the shining",
        // Autor del libro
        autor: "Stephen King",
        // Año de publicación
        year: 1977,
        // Lista de géneros del libro
        generos: ["Terror", "Sobrenatural"],
        // Indica si el libro está disponible para préstamo
        disponible: true,
        // Información del préstamo (null si no está prestado)
        prestamo: null
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        year: 1949,
        generos: ["Distopía", "Ciencia ficción"],
        disponible: false,
        // Si el libro está prestado, aquí se guarda a quién y cuándo
        prestamo: { usuario: "Carlos", fecha: "2025-02-01" }
    },
    {
        titulo: "to kill a mockingbird",
        autor: "Harper Lee",
        year: 1960,
        generos: ["Ficción", "Drama"],
        disponible: true,
        prestamo: null
    },
    {
        titulo: "the lord of the rings",
        autor: "J.R.R. Tolkien",
        year: 1954,
        generos: ["Fantasía", "Aventura"],
        disponible: false,
        prestamo: { usuario: "María", fecha: "2025-01-15" }
    },
    {
        titulo: "the hobbit",
        autor: "J.R.R. Tolkien",
        year: 1937,
        generos: ["Fantasía", "Aventura"],
        disponible: true,
        prestamo: null
    },
    {
        titulo: "fahrenheit 451",
        autor: "Ray Bradbury",
        year: 1953,
        generos: ["Distopía", "Ciencia ficción"],
        disponible: true,
        prestamo: null
    },
    {
        titulo: "pride and prejudice",
        autor: "Jane Austen",
        year: 1813,
        generos: ["Romance", "Clásico"],
        disponible: false,
        prestamo: { usuario: "Ana", fecha: "2025-02-10" }
    },
    {
        titulo: "the catcher in the rye",
        autor: "J.D. Salinger",
        year: 1951,
        generos: ["Ficción", "Coming of Age"],
        disponible: true,
        prestamo: null
    },
    {
        titulo: "the great gatsby",
        autor: "F. Scott Fitzgerald",
        year: 1925,
        generos: ["Ficción", "Drama"],
        disponible: true,
        prestamo: null
    },
    {
        titulo: "moby dick",
        autor: "Herman Melville",
        year: 1851,
        generos: ["Aventura", "Clásico"],
        disponible: false,
        prestamo: { usuario: "Luis", fecha: "2025-01-30" }
    }
];
