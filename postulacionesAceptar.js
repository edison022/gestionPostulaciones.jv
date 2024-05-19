document.addEventListener("DOMContentLoaded", function () {
    



    const listaServicios = document.getElementById("lista-servicios"); // Elemento con el id "lista-servicios".
    const listaAceptadas = document.getElementById("lista-aceptadas"); // Elemento con el id "lista-aceptadas".

    // Función para aceptar una postulación recibida
    function aceptarPostulacion(index) {
        const postulacionesRecibidas = JSON.parse(localStorage.getItem("servicios")) || [];
        const postulacion = postulacionesRecibidas[index];

        // Agrega la postulación aceptada al localStorage
        const postulacionesAceptadas = JSON.parse(localStorage.getItem("postulacionesAceptadas")) || [];
        postulacionesAceptadas.push(postulacion);
        localStorage.setItem("postulacionesAceptadas", JSON.stringify(postulacionesAceptadas));

        // Elimina la postulación recibida
        postulacionesRecibidas.splice(index, 1);
        localStorage.setItem("postulacionesRecibidas", JSON.stringify(postulacionesRecibidas));

        mostrarPostulacionesRecibidas();
        mostrarPostulacionesAceptadas();
    }

    // Función para mostrar las postulaciones recibidas
    function mostrarPostulacionesRecibidas() {
        listaServicios.innerHTML = ""; // Limpia la lista antes de mostrar las postulaciones recibidas.

        const postulacionesRecibidas = JSON.parse(localStorage.getItem("servicios")) || [];

        if (postulacionesRecibidas.length === 0) {
            listaServicios.innerHTML = "<p>No se han recibido ninguna postulación.</p>";
        } else {
            postulacionesRecibidas.forEach(function (postulacion, index) {
                const li = document.createElement("li");
                li.innerHTML = `<strong>Área #${index + 1}:</strong> ${postulacion.seleccion}<br><strong>Experiencia como docente:</strong> ${postulacion.valor}<br/><strong>Nivel académico:</strong> título de ${postulacion.meses} nivel<br><strong>Nombre:</strong> ${postulacion.nombre}<br><strong>Correo:</strong> ${postulacion.correo}<br><strong>Número de contacto:</strong> ${postulacion.contacto}<br>`;

                // Agregar un botón para aceptar la postulación
                const aceptarButton = document.createElement("button");
                aceptarButton.textContent = "Aceptar";
                aceptarButton.addEventListener("click", function () {
                    aceptarPostulacion(index);
                });

                // Agregar un botón para borrar la postulación
                const borrarButton = document.createElement("button");
                borrarButton.textContent = "Borrar";
                borrarButton.addEventListener("click", function () {
                    borrarPostulacionRecibida(index);
                });

                li.appendChild(aceptarButton);
                li.appendChild(borrarButton);
                listaServicios.appendChild(li);
            });
        }
    }

        // Función para mostrar las postulaciones aceptadas
        function mostrarPostulacionesAceptadas() {
            listaAceptadas.innerHTML = ""; // Limpia la lista antes de mostrar las postulaciones aceptadas.
    
            const postulacionesAceptadas = JSON.parse(localStorage.getItem("postulacionesAceptadas")) || [];
    
            if (postulacionesAceptadas.length === 0) {
                listaAceptadas.innerHTML = "<p>No se han aceptado ninguna postulación.</p>";
            } else {
                postulacionesAceptadas.forEach(function (postulacion, index) {
                    const li = document.createElement("li");
                    li.innerHTML = `<strong>Área aceptada #${index + 1}:</strong> ${postulacion.seleccion}<br><strong>Experiencia como docente:</strong> ${postulacion.valor}<br/><strong>Nivel académico:</strong> título de ${postulacion.meses} nivel<br><strong>Nombre:</strong> ${postulacion.nombre}<br><strong>Correo:</strong> ${postulacion.correo}<br><strong>Número de contacto:</strong> ${postulacion.contacto}<br>`;
    
                    // Agregar un botón para borrar la postulación aceptada
                    const borrarButton = document.createElement("button");
                    borrarButton.textContent = "Borrar";
                    borrarButton.addEventListener("click", function () {
                        borrarPostulacionAceptada(index);
                    });
    
                    li.appendChild(borrarButton);
                    listaAceptadas.appendChild(li);
                });
            }
        }
    

    // Función para borrar una postulación recibida
    function borrarPostulacionRecibida(index) {
        const postulacionesRecibidas = JSON.parse(localStorage.getItem("servicios")) || [];
        postulacionesRecibidas.splice(index, 1);
        localStorage.setItem("servicios", JSON.stringify(postulacionesRecibidas));
        mostrarPostulacionesRecibidas();
    }
    
    // Función para borrar una postulación aceptada
    function borrarPostulacionAceptada(index) {
        const postulacionesAceptadas = JSON.parse(localStorage.getItem("postulacionesAceptadas")) || [];
        postulacionesAceptadas.splice(index, 1);
        localStorage.setItem("postulacionesAceptadas", JSON.stringify(postulacionesAceptadas));
        mostrarPostulacionesAceptadas();
    }

    // Llama a las funciones para mostrar las postulaciones recibidas y aceptadas cuando se carga la página.
    mostrarPostulacionesRecibidas();
    mostrarPostulacionesAceptadas();
});
