document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registro-form");
    const message = document.getElementById("message");
    const regresarPrincipal = document.getElementById("regresar-principal");
    const regresarSesionUsuario = document.getElementById("regresar-sesionUsuario");

    registroForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const nombres = document.getElementById("nombres").value;
        const apellidos = document.getElementById("apellidos").value;
        const correo = document.getElementById("correo").value;
        const celular = document.getElementById("celular").value;
        const edad = document.getElementById("edad").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Validaciones
        if (!username || !nombres || !apellidos || !correo || !celular || !edad || !password || !confirmPassword) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        if (!/^[a-zA-ZÁÉÍÓÚÜáéíóúü\s]+$/.test(nombres) || !/^[a-zA-ZÁÉÍÓÚÜáéíóúü\s]+$/.test(apellidos)) {
            alert("Los campos 'nombres' y 'apellidos' solo pueden contener letras, espacios y caracteres acentuados.");
            return;
        }

        if (password.length < 3) {
            alert("La contraseña debe tener al menos 3 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        if (isNaN(edad) || edad < 1 || edad > 99) {
            alert("La edad debe ser un número entre 1 y 99.");
            return;
        }

        const correoVali = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!correoVali.test(correo)) {
            alert("Ingrese una dirección de correo electrónico válida.");
            return;
        }

        const celularVali = /^\d{10}$/;
        if (!celularVali.test(celular)) {
            alert("Ingrese un número de teléfono válido (10 dígitos).");
            return;
        }

        if (username.length < 3 || username.length > 20) {
            alert("El nombre de usuario debe tener entre 3 y 20 caracteres.");
            return;
        }

        const usuarioVali = /^[a-zA-Z0-9_]+$/;
        if (!usuarioVali.test(username)) {
            alert("El nombre de usuario solo puede contener letras, números y guiones bajos.");
            return;
        }

        // Crear objeto de usuario
        const usuario = {
            username,
            nombres,
            apellidos,
            correo,
            celular,
            edad,
            password
        };

        // Sobrescribir la lista de usuarios con el nuevo usuario
        const usuarios = [usuario];
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Registro exitoso.");
        registroForm.reset();
    });

    regresarPrincipal.addEventListener("click", function () {
        window.location.href = "principal.html";
    });

    regresarSesionUsuario.addEventListener("click", function () {
        window.location.href = "sesionUsuario.html";
    });
});
