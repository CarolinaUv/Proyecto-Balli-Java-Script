const formRegistro = document.querySelector(".formulario-registro");

formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = formRegistro.querySelector('input[type="text"]').value.trim();
    const password = formRegistro.querySelector('input[type="password"]').value.trim();

    if (username === "" || password === "") {
        alert("Por favor, completá todos los campos.");
        return;
    }

    // Guardamos el usuario en localStorage
    localStorage.setItem("usuario", JSON.stringify({ username, password }));

    alert("¡Registro exitoso! Ahora podés iniciar sesión.");
    window.location.href = "../pag/login.html"; // Redirige al login
});
