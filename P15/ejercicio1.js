import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });

let libros = [
    {
        titulo: 'the shining',
        autor: 'Stephen King',
        year: 1977,
        generos: ['Novela', 'Terror', 'Ficción gótica', 'Ficción sobrenatural'],
    }
];

// ---------------- FUNCIONES ----------------

const crearLibro = (titulo, autor, year, generos) => {
    generos = generos.split(',').map(g => g.trim());

    return { titulo, autor, year, generos };
};

// ----------- 1) AGREGAR LIBRO ---------------
const agregarLibro = () => {
    rl.question('Ingresa el título del libro: ', (titulo) => {
        titulo = titulo.trim();
        if (titulo === '') {
            console.error('\n El título es obligatorio \n');
            return agregarLibro();
        }

        rl.question('Ingresa el autor del libro: ', (autor) => {
            autor = autor.trim();

            rl.question('Ingresa el año del libro: ', (year) => {
                year = parseInt(year);

                if (isNaN(year) || year <= 0) {
                    console.error('\n Año inválido \n');
                    return agregarLibro();
                }

                rl.question('Ingresa los géneros separados por coma: ', (generos) => {

                    const libro = crearLibro(titulo, autor, year, generos);
                    libros.push(libro);

                    console.log('\n Libro agregado correctamente\n');
                    init();
                });
            });
        });
    });
};

// ----------- 2) BUSCAR LIBRO ----------------
const buscarLibro = () => {
    rl.question('\nBuscar por (1) título o (2) autor: ', (op) => {
        if (op !== '1' && op !== '2') {
            console.log("Opción inválida");
            return buscarLibro();
        }

        const campo = op === '1' ? 'titulo' : 'autor';

        rl.question(`Ingresa el ${campo}: `, (texto) => {
            texto = texto.trim().toLowerCase();

            const resultados = libros.filter(lib =>
                lib[campo].toLowerCase().includes(texto)
            );

            console.log("\n Resultados encontrados:");
            console.log(resultados.length > 0 ? resultados : "No se encontraron coincidencias");

            init();
        });
    });
};

// ----------- 3) LISTAR LIBROS ---------------
const listarLibros = () => {
    rl.question('\n¿Filtrar por género? (s/n): ', (resp) => {
        resp = resp.toLowerCase();

        if (resp === 's') {
            rl.question('Ingresa el género: ', (gen) => {
                gen = gen.toLowerCase();

                const filtrados = libros.filter(lib =>
                    lib.generos.some(g => g.toLowerCase().includes(gen))
                );

                console.log("\n Libros filtrados:");
                console.log(filtrados.length ? filtrados : "No se encontraron libros con ese género");
                init();
            });

        } else {
            console.log("\n Todos los libros: ");
            console.log(libros);
            init();
        }
    });
};

// ----------- 4) ELIMINAR LIBRO ---------------
const eliminarLibro = () => {
    rl.question('Ingresa el título del libro a eliminar: ', (titulo) => {
        titulo = titulo.trim().toLowerCase();

        const index = libros.findIndex(lib => lib.titulo.toLowerCase() === titulo);

        if (index === -1) {
            console.log("\n No se encontró el libro\n");
        } else {
            libros.splice(index, 1);
            console.log("\n Libro eliminado correctamente\n");
        }

        init();
    });
};

// ----------- 5) ESTADÍSTICAS ----------------
const estadisticas = () => {
    if (libros.length === 0) {
        console.log("\n No hay libros en la biblioteca.\n");
        return init();
    }

    const cantidad = libros.length;
    const masAntiguo = libros.reduce((a, b) => a.year < b.year ? a : b);
    const masReciente = libros.reduce((a, b) => a.year > b.year ? a : b);

    const generosSet = new Set();
    libros.forEach(lib => lib.generos.forEach(g => generosSet.add(g)));

    console.log("\n ESTADÍSTICAS:");
    console.log(`Total de libros: ${cantidad}`);
    console.log(`Libro más antiguo: ${masAntiguo.titulo} (${masAntiguo.year})`);
    console.log(`Libro más reciente: ${masReciente.titulo} (${masReciente.year})`);
    console.log("Géneros disponibles:", [...generosSet]);

    init();
};

// ---------------- MENÚ ----------------

const menu = `
========= MENÚ DE BIBLIOTECA PERSONAL =========
1) Agregar libros
2) Buscar libros
3) Listar libros
4) Eliminar libros
5) Estadísticas
6) Salir
===============================================
`;

const init = () => {
    rl.question(menu + 'Ingresa una opción (1-6): ', (option) => {

        switch (option) {
            case '1': agregarLibro(); break;
            case '2': buscarLibro(); break;
            case '3': listarLibros(); break;
            case '4': eliminarLibro(); break;
            case '5': estadisticas(); break;
            case '6':
                console.log("\n Hasta luego\n");
                rl.close();
                break;
            default:
                console.log("Opción inválida\n");
                init();
        }
    });
};

init();
