const formLogin = document.querySelector(".formulario-login");

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = formLogin.querySelector('input[type="text"]').value.trim();
    const password = formLogin.querySelector('input[type="password"]').value.trim();

    if (username === "" || password === "") {
        alert("Por favor, completá todos los campos.");
        return;
    }

    // Traemos el usuario guardado
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioGuardado && username === usuarioGuardado.username && password === usuarioGuardado.password) {
        alert("¡Login exitoso!");
        window.location.href = "../pag/productos.html"; // Redirige después de loguear
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
