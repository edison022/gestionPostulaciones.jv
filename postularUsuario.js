document.addEventListener("DOMContentLoaded", function () {
    const registroServiciosForm = document.getElementById("registro-servicios-form");
    const opcionesServicio = document.getElementById("opciones-servicio");
    const valorServicio = document.getElementById("valor-servicio");
    const meses = document.getElementById("meses");
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const contacto = document.getElementById("contacto");

    registroServiciosForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const servicioSeleccionado = opcionesServicio.value;
        const valorSeleccionado = valorServicio.value;
        const mesesSeleccionados = meses.value;
        const nombreUsuario = nombre.value;
        const correoUsuario = correo.value;
        const contactoUsuario = contacto.value;

        if (servicioSeleccionado === "seleccionar" || mesesSeleccionados === "seleccionar") {
            alert("Por favor, seleccione un servicio y una duración válidos.");
            return;
        }

        if (!nombreUsuario || !correoUsuario || !contactoUsuario) {
            alert("Por favor, complete todos los campos obligatorios (Nombre, Correo y Número de contacto).");
            return;
        }

        // Agregar validación de formato de correo electrónico
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(correoUsuario)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        // Agregar validación de formato de número de contacto (puedes personalizarla según tus necesidades)
        const phoneRegex = /^[0-9]{10}$/; // Ejemplo: 10 dígitos
        if (!phoneRegex.test(contactoUsuario)) {
            alert("Por favor, ingrese un número de contacto válido.");
            return;
        }

        // Obtener los servicios almacenados en localStorage
        const servicios = JSON.parse(localStorage.getItem("servicios")) || [];

        // Crear objeto de servicio
        const servicio = {
            seleccion: servicioSeleccionado,
            valor: valorSeleccionado,
            meses: mesesSeleccionados,
            nombre: nombreUsuario,
            correo: correoUsuario,
            contacto: contactoUsuario
        };

        // Agregar servicio a la lista
        servicios.push(servicio);
        localStorage.setItem("servicios", JSON.stringify(servicios));

        alert("Servicio registrado con éxito.");
        registroServiciosForm.reset();
    });

    regresarPerfilButton.addEventListener("click", function () {
        window.location.href = "perfil.html";
    });
});
