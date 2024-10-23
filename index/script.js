// Obtener referencias a los elementos HTML
const totalEquipos = document.getElementById('total-equipos');
const totalAlertas = document.getElementById('total-alertas');
const tempPromedio = document.getElementById('temp-promedio');
const equipoList = document.querySelector('.equipo-list');

// Función para cargar los datos de los equipos
function cargarEquipos() {
    // Simular datos de equipos (en la realidad, se obtendrían de la base de datos)
    const equipos = [
        { nombre: 'Equipo 1', temperatura: 25 },
        { nombre: 'Equipo 2', temperatura: 30 },
        { nombre: 'Equipo 3', temperatura: 28 }
    ];

    // Actualizar el contador de equipos
    totalEquipos.textContent = equipos.length;

    // Cargar los equipos en la lista
    equipos.forEach(equipo => {
        // Crear un elemento HTML para cada equipo
        const equipoItem = document.createElement('div');
        equipoItem.classList.add('equipo-item');
        equipoItem.innerHTML = `
            <h3>${equipo.nombre}</h3>
            <p>Temperatura: ${equipo.temperatura}°C</p>
            <button>Ver detalles</button>
        `;
        equipoList.appendChild(equipoItem);
    });
}

// Función para cargar los datos de las alertas
function cargarAlertas() {
    // Simular datos de alertas (en la realidad, se obtendrían de la base de datos)
    const alertas = [
        { equipo: 'Equipo 1', temperatura: 35, hora: '10:00' },
        { equipo: 'Equipo 2', temperatura: 40, hora: '11:30' }
    ];

    // Actualizar el contador de alertas
    totalAlertas.textContent = alertas.length;

    // Cargar las alertas en la lista (implementar la lógica para mostrarlas aquí)
}

// Función para calcular la temperatura promedio
function calcularTempPromedio() {
    // Obtener los datos de temperatura de los equipos (en la realidad, se obtendrían de la base de datos)
    const temperaturas = [25, 30, 28];

    // Calcular la temperatura promedio
    const promedio = temperaturas.reduce((sum, temp) => sum + temp, 0) / temperaturas.length;

    // Actualizar el valor de la temperatura promedio
    tempPromedio.textContent = promedio.toFixed(1) + '°C';
}

// Ejecutar las funciones al cargar la página
cargarEquipos();
cargarAlertas();
calcularTempPromedio();