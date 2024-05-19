

// Función para actualizar la lista de postulaciones
function actualizarListaPostulaciones() {
    var listaPostulaciones = document.getElementById("listaPostulaciones");
    listaPostulaciones.innerHTML = "";

    // Obtener las postulaciones registradas desde localStorage
    var postulacionesRegistradas = JSON.parse(localStorage.getItem("postulacionesRegistradas")) || [];

    // Iterar a través del arreglo y mostrar cada postulación
    for (var i = 0; i < postulacionesRegistradas.length; i++) {
        var postulacion = postulacionesRegistradas[i];
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            Carrera: ${postulacion.carreraPostu}<br>
            Facultad: ${postulacion.facultadPostu}<br>
            Sueldo: ${postulacion.sueldoPostu}<br>
            Jornada: ${postulacion.jornada}<br>
            Detalles: ${postulacion.detalles}
        `;
        listaPostulaciones.appendChild(listItem);
    }
}



// Cargar la lista de postulaciones al cargar la página
window.onload = actualizarListaPostulaciones;


document.getElementById("regresar-opciones").addEventListener("click", function () {
    // Redirigir al usuario de vuelta a la página de registro de servicios
    window.location.href = "principal.html";
});