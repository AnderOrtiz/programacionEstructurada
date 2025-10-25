function crearGestorTareas() {
    
    const tareas = []; 

    
    let idCounter = 1;

    
    return {
        agregarTarea: function (descripcion) {
            if (!descripcion || typeof descripcion !== "string") throw new Error("Descripción inválida");
            const tarea = { id: idCounter++, descripcion, completada: false };
            tareas.push(tarea);
            return tarea;
        },
        completarTarea: function (id) {
            const t = tareas.find(x => x.id === id);
            if (!t) throw new Error("Tarea no encontrada");
            t.completada = true;
            return t;
        },
        listarPendientes: function () {
            return tareas.filter(t => !t.completada).map(t => ({ id: t.id, descripcion: t.descripcion }));
        },
        contarTareas: function () {
            return tareas.length;
        },
        listarTodas: function () { 
            return tareas.slice();
        }
    };
}


const gestor = crearGestorTareas();
const ta1 = gestor.agregarTarea("Hacer la práctica 10");
gestor.agregarTarea("Leer documentación");
console.log("Total tareas:", gestor.contarTareas()); 
gestor.completarTarea(ta1.id);
console.log("Pendientes:", gestor.listarPendientes()); 

