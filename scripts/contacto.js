// ==========================
// VALIDACIÓN FORMULARIO CONTACTO
// ==========================
const form = document.querySelector(".formulario-contacto form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el envío real del form

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completá todos los campos.");
        return;
    }

    // Validar email básico con regex
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Ingresá un correo electrónico válido.");
        return;
    }

    // Simulación de envío (acá podrías integrar EmailJS o backend real)
    alert("¡Gracias por tu mensaje! Te responderé a la brevedad.");

    // Limpiar formulario
    form.reset();
});

// ==========================
// WHATSAPP LINK
// ==========================
// Reemplazá con tu número real en formato internacional (ejemplo Argentina: 549261xxxxxxx)
const whatsappBtn = document.querySelector(".whatsapp a");
if (whatsappBtn) {
    whatsappBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const telefono = "5492611234567"; // 👈 tu número de WhatsApp
        const mensaje = "¡Hola Balli Amigurumis! Quiero más información 😊";
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    });
}
